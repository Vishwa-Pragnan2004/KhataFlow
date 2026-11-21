
"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import CustomerPicker, { type PickedCustomer } from "@/components/CustomerPicker";
import AddCustomerSheet from "@/components/AddCustomerSheet";
import { createBill } from "@/app/actions";
import { billSchema, type PaymentMethod } from "@/lib/validation";
import { buildItemsNote, itemsTotal, type BillItem } from "@/lib/itemsNote";
import { formatRupees } from "@/lib/money";
import { computeDueDate, DEFAULT_DUE_CHOICE, type DueChoice } from "@/lib/dueDates";
import { formatShortDate, parseInputDate, startOfDay, toInputDate } from "@/lib/dates";
import { buildBillMessage, buildWaLink } from "@/lib/whatsapp";

type AmountMode = "TOTAL" | "ITEMS";

type ItemRow = {
  id: number;
  name: string;
  qty: string;
  price: string;
};

const DUE_OPTIONS: { value: DueChoice; label: string }[] = [
  { value: "7d", label: "7 days (7 din)" },
  { value: "15d", label: "15 days (15 din)" },
  { value: "EOM", label: "End of month (Mahine ke aakhir)" },
  { value: "custom", label: "Custom" },
];

const METHOD_OPTIONS: { value: PaymentMethod; label: string }[] = [
  { value: "CASH", label: "Cash" },
  { value: "UPI", label: "UPI" },
  { value: "OTHER", label: "Aur tarike" },
];

function digitsOnly(s: string): string {
  return s.replace(/\D/g, "");
}

function toIntOrZero(s: string): number {
  const n = Number.parseInt(s, 10);
  return Number.isFinite(n) ? n : 0;
}

export default function QuickBillForm(props: {
  initialCustomers: PickedCustomer[];
}) {
  const router = useRouter();
  const [isSaving, startTransition] = useTransition();

  const [customers, setCustomers] = useState<PickedCustomer[]>(
    props.initialCustomers
  );

  const [selectedCustomer, setSelectedCustomer] =
    useState<PickedCustomer | null>(null);

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const [mode, setMode] = useState<AmountMode>("TOTAL");

  const [totalStr, setTotalStr] = useState("");

  const [rows, setRows] = useState<ItemRow[]>([
    { id: 1, name: "", qty: "", price: "" },
  ]);

  const nextRowId = useRef(2);

  const [dueChoice, setDueChoice] =
    useState<DueChoice>(DEFAULT_DUE_CHOICE);

  const [customStr, setCustomStr] = useState(() =>
    toInputDate(startOfDay(new Date()))
  );

  const todayInput = toInputDate(startOfDay(new Date()));

  const [paidStr, setPaidStr] = useState("");

  const [method, setMethod] = useState<PaymentMethod>("CASH");

  const [error, setError] = useState<string | null>(null);

  const [toast, setToast] = useState<string | null>(null);

  // Calculate total amount
  const typedTotal = toIntOrZero(totalStr);

  // Validate and prepare bill items
  const validItems: BillItem[] = rows.flatMap((r) => {
    const name = r.name.trim();
    const qty = Number(r.qty);
    const price = toIntOrZero(r.price);

    if (
      name === "" ||
      !Number.isFinite(qty) ||
      qty <= 0 ||
      price <= 0
    ) {
      return [];
    }

    return [{ name, qty, price }];
  });

  const itemsSum = itemsTotal(validItems);

  const total = mode === "TOTAL" ? typedTotal : itemsSum;

  const note =
    mode === "ITEMS" ? buildItemsNote(validItems) : "";

  // Calculate due date
  const customDate = customStr
    ? parseInputDate(customStr)
    : undefined;

  const dueDate: Date | null =
    dueChoice === "custom" && !customDate
      ? null
      : computeDueDate(dueChoice, new Date(), customDate);

  const dueInput = dueDate ? toInputDate(dueDate) : "";

  // Calculate payment
  const paidNow = toIntOrZero(paidStr);

  // Form validation
  const isValid =
    selectedCustomer !== null &&
    total > 0 &&
    paidNow <= total &&
    (dueChoice !== "custom" || Boolean(customDate));

  // Handle newly created customer
  function handleCreated(c: PickedCustomer) {
    setCustomers((prev) => [c, ...prev]);
    setSelectedCustomer(c);
    setIsSheetOpen(false);
  }

  // Update item row
  function updateRow(
    id: number,
    patch: Partial<Omit<ItemRow, "id">>
  ) {
    setRows((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, ...patch } : r
      )
    );
  }

  // Add item row
  function addRow() {
    const id = nextRowId.current;
    nextRowId.current += 1;

    setRows((prev) => [
      ...prev,
      { id, name: "", qty: "", price: "" },
    ]);
  }

  // Remove item row
  function removeRow(id: number) {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  // Save bill
  function save(sendWhatsApp: boolean) {
    if (isSaving) return;

    if (!selectedCustomer) {
      setError("Please select a customer.");
      return;
    }

    if (total <= 0) {
      setError("Please enter a valid bill amount.");
      return;
    }

    if (paidNow > total) {
      setError("Paid amount cannot exceed the total bill amount.");
      return;
    }

    if (dueChoice === "custom" && !customDate) {
      setError("Please select a valid due date.");
      return;
    }

    if (
      dueChoice === "custom" &&
      customStr < todayInput
    ) {
      setError("Due date cannot be in the past.");
      return;
    }

    const input = {
      customerId: selectedCustomer.id,
      totalAmount: total,
      itemsNote: note || undefined,
      dueDate: dueInput,
      paidNow,
      paidMethod: method,
    };

    const parsed = billSchema.safeParse(input);

    if (!parsed.success) {
      setError(
        parsed.error.issues[0]?.message ?? "Invalid information."
      );
      return;
    }

    setError(null);

    // Open WhatsApp tab immediately to avoid popup blocking.
    const whatsappWindow = sendWhatsApp
      ? window.open("about:blank", "_blank")
      : null;

    if (sendWhatsApp && !whatsappWindow) {
      setError(
        "Please allow popups in your browser to open WhatsApp."
      );
      return;
    }

    startTransition(async () => {
      try {
        const result = await createBill(parsed.data);

        if (!result.ok) {
          whatsappWindow?.close();
          setError(result.error);
          return;
        }

        const data = result.data;

        // Send bill through WhatsApp
        if (sendWhatsApp) {
          const message = buildBillMessage({
            shopName: data.shopName,
            customerName: data.customerName,
            billNumber: data.billNumber,
            totalAmount: data.totalAmount,
            paidNow: data.paidNow,
            dueDate: parseInputDate(data.dueDate),
            ownerName: data.ownerName,
          });

          const whatsappUrl = buildWaLink(
            data.customerWhatsapp,
            message
          );

          if (whatsappWindow) {
            whatsappWindow.location.href = whatsappUrl;
          }
        }

        setToast("Bill ban gaya: " + data.billNumber);

        setTimeout(() => {
          setToast(null);
          router.push("/");
        }, 1200);

      } catch (err) {
        whatsappWindow?.close();

        console.error("Bill creation failed:", err);

        setError(
          "Something went wrong while creating the bill. Please try again."
        );
      }
    });
  }

  // Button styles
  const modeButtonClass = (active: boolean) =>
    `min-h-14 flex-1 rounded-xl border-2 text-lg font-semibold ${
      active
        ? "border-green-700 bg-green-700 text-white"
        : "border-stone-300 bg-white text-stone-900"
    }`;

  const chipClass = (active: boolean) =>
    `min-h-14 rounded-xl border-2 px-4 text-base font-semibold ${
      active
        ? "border-green-700 bg-green-700 text-white"
        : "border-stone-300 bg-white text-stone-900"
    }`;

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 p-4">

      {/* Success toast */}
      {toast && (
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-xl bg-stone-900 px-4 py-3 text-base text-white shadow-lg">
          {toast}
        </div>
      )}

      {/* Customer selection */}
      <section className="flex flex-col gap-2">
        <h2 className="text-base font-medium text-stone-700">
          Customer
        </h2>

        <CustomerPicker
          customers={customers}
          selectedId={selectedCustomer?.id ?? null}
          onSelect={(c) => setSelectedCustomer(c)}
          onAddNew={() => setIsSheetOpen(true)}
        />
      </section>

      {/* Amount mode */}
      <section className="flex flex-col gap-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setMode("TOTAL")}
            className={modeButtonClass(mode === "TOTAL")}
          >
            Total Amount (Kul Rashi)
          </button>

          <button
            type="button"
            onClick={() => setMode("ITEMS")}
            className={modeButtonClass(mode === "ITEMS")}
          >
            Add Items (Saman ki List)
          </button>
        </div>

        {/* Total amount input */}
        {mode === "TOTAL" ? (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              inputMode="numeric"
              value={totalStr}
              onChange={(e) =>
                setTotalStr(digitsOnly(e.target.value))
              }
              placeholder="₹ 0"
              className="min-h-20 w-full rounded-xl border-2 border-stone-300 bg-white text-center text-4xl font-bold text-stone-900 focus:border-green-700 focus:outline-none"
            />

            {total > 0 && (
              <p className="text-center text-lg text-stone-700">
                {formatRupees(total)}
              </p>
            )}
          </div>
        ) : (

          /* Itemized bill */
          <div className="flex flex-col gap-3">
            {rows.map((r) => (
              <div
                key={r.id}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={r.name}
                  placeholder="Saman ka naam"
                  onChange={(e) =>
                    updateRow(r.id, {
                      name: e.target.value,
                    })
                  }
                  className="min-h-12 min-w-0 flex-1 rounded-xl border border-stone-300 px-3 text-lg text-stone-900 focus:border-green-700 focus:outline-none"
                />

                <input
                  type="text"
                  inputMode="decimal"
                  value={r.qty}
                  placeholder="Qty"
                  onChange={(e) =>
                    updateRow(r.id, {
                      qty: e.target.value.replace(
                        /[^0-9.]/g,
                        ""
                      ),
                    })
                  }
                  className="min-h-12 w-20 rounded-xl border border-stone-300 px-3 text-lg text-stone-900 focus:border-green-700 focus:outline-none"
                />

                <input
                  type="text"
                  inputMode="numeric"
                  value={r.price}
                  placeholder="₹"
                  onChange={(e) =>
                    updateRow(r.id, {
                      price: digitsOnly(e.target.value),
                    })
                  }
                  className="min-h-12 w-24 rounded-xl border border-stone-300 px-3 text-lg text-stone-900 focus:border-green-700 focus:outline-none"
                />

                {rows.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRow(r.id)}
                    aria-label="Saman hatao"
                    className="min-h-12 w-10 text-2xl text-stone-500"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addRow}
              className="min-h-12 w-full rounded-xl border-2 border-dashed border-stone-300 text-lg font-semibold text-green-700"
            >
              + Aur saman
            </button>

            <p className="text-center text-lg text-stone-700">
              Kul: {formatRupees(total)}
            </p>
          </div>
        )}
      </section>

      {/* Due date */}
      <section className="flex flex-col gap-2">
        <h2 className="text-base font-medium text-stone-700">
          Due Date (Kab Tak Dena Hai)
        </h2>

        <div className="grid grid-cols-2 gap-2">
          {DUE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setDueChoice(opt.value)}
              className={chipClass(dueChoice === opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {dueChoice === "custom" && (
          <input
            type="date"
            min={todayInput}
            value={customStr}
            onChange={(e) => setCustomStr(e.target.value)}
            className="min-h-14 w-full rounded-xl border-2 border-stone-300 bg-white px-4 text-lg text-stone-900 focus:border-green-700 focus:outline-none"
          />
        )}

        {dueDate && (
          <p className="text-base text-stone-700">
            Due: {formatShortDate(dueDate)}
          </p>
        )}
      </section>

      {/* Payment details */}
      <section className="flex flex-col gap-3">
        <label
          htmlFor="paid-now"
          className="text-base font-medium text-stone-700"
        >
          Paid Now (Abhi Mile) - Optional
        </label>

        <input
          id="paid-now"
          type="text"
          inputMode="numeric"
          value={paidStr}
          onChange={(e) =>
            setPaidStr(digitsOnly(e.target.value))
          }
          placeholder="₹ 0"
          className="min-h-14 w-full rounded-xl border-2 border-stone-300 bg-white px-4 text-2xl text-stone-900 focus:border-green-700 focus:outline-none"
        />

        {paidNow > 0 && (
          <p className="text-base text-stone-700">
            Balance (Bacha Hua):{" "}
            {formatRupees(Math.max(0, total - paidNow))}
          </p>
        )}

        {paidNow > total && (
          <p className="text-sm text-red-600">
            Paid amount cannot exceed total amount.
          </p>
        )}

        {paidNow > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {METHOD_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setMethod(opt.value)}
                className={chipClass(method === opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Error message */}
      {error && (
        <p
          role="alert"
          className="text-base text-red-600"
        >
          {error}
        </p>
      )}

      {/* Save buttons */}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => save(true)}
          disabled={isSaving || !isValid}
          className="min-h-16 w-full rounded-xl bg-green-700 text-lg font-semibold text-white disabled:opacity-60"
        >
          {isSaving
            ? "Saving..."
            : "Save & Send on WhatsApp"}
        </button>

        <button
          type="button"
          onClick={() => save(false)}
          disabled={isSaving || !isValid}
          className="min-h-16 w-full rounded-xl bg-stone-200 text-lg font-semibold text-stone-900 disabled:opacity-60"
        >
          {isSaving
            ? "Saving..."
            : "Save Only (Sirf Save)"}
        </button>

        {!isValid && (
          <p className="text-center text-base text-stone-600">
            Select both customer and amount
            (Customer aur amount chuniye)
          </p>
        )}
      </div>

      {/* Add customer sheet */}
      <AddCustomerSheet
        open={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        onCreated={handleCreated}
      />

    </div>
  );
}

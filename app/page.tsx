import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatRupees } from "@/lib/money";
import { formatShortDate, toInputDate } from "@/lib/dates";
import { lastRemindedLabel } from "@/lib/reminders";
import RecordPaymentModal from "@/components/RecordPaymentModal";
import EditBillModal from "@/components/EditBillModal";
import {
  FILTER_STATUSES,
  type FilterStatus,
  type UdhaarRow,
  buildListHref,
  buildUdhaarRows,
  filterRows,
  parseStatusParam,
  sortRows,
  summarize,
  toggleStatus,
} from "@/lib/udhaarList";

export const dynamic = "force-dynamic";

const STATUS_CHIPS: { status: FilterStatus; label: string }[] = [
  { status: "UNPAID", label: "Unpaid (Baki)" },
  { status: "PARTIALLY_PAID", label: "Partially Paid (Thoda Mila)" },
  { status: "OVERDUE", label: "Overdue (Late)" },
  { status: "PAID", label: "Paid (Poora Mila)" },
];

const BADGE: Record<UdhaarRow["status"], { label: string; className: string }> = {
  UNPAID: { label: "Unpaid", className: "bg-stone-200 text-stone-800" },
  PARTIALLY_PAID: { label: "Partially Paid", className: "bg-blue-100 text-blue-800" },
  OVERDUE: { label: "Overdue", className: "bg-red-100 text-red-700" },
  PAID: { label: "Paid", className: "bg-green-100 text-green-800" },
};

function chipClass(active: boolean): string {
  const base = "flex min-h-12 items-center whitespace-nowrap rounded-full px-4 text-base";
  return active
    ? `${base} bg-stone-900 text-white`
    : `${base} border border-stone-300 bg-white text-stone-800`;
}

export default async function UdhaarListPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const params = await searchParams;
  const statuses = parseStatusParam(params.status);
  const query = (params.q ?? "").trim();

  const bills = await prisma.bill.findMany({
    include: {
      customer: { select: { name: true, whatsappNumber: true } },
      payments: { select: { amount: true } },
      reminders: { select: { sentAt: true }, orderBy: { sentAt: "desc" }, take: 1 },
    },
    orderBy: { id: "desc" },
  });
  const lastSentById = new Map(bills.map((b) => [b.id, b.reminders[0]?.sentAt ?? null]));
  const editById = new Map(
    bills.map((b) => [
      b.id,
      {
        customerName: b.customer.name,
        whatsappNumber: b.customer.whatsappNumber,
        totalAmount: b.totalAmount,
        dueDate: toInputDate(b.dueDate),
        notes: b.notes ?? "",
      },
    ]),
  );

  const all = buildUdhaarRows(
    bills.map((b) => ({
      id: b.id,
      billNumber: b.billNumber,
      customerName: b.customer.name,
      totalAmount: b.totalAmount,
      dueDate: b.dueDate,
      payments: b.payments,
    })),
    new Date(),
  );
  const summary = summarize(all);
  const shown = sortRows(filterRows(all, statuses, query));

  const allActive = FILTER_STATUSES.every((s) => statuses.includes(s));

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-6">
      <header className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Udhaar Receivables (Baki Khata)</h1>
        <Link
          href="/forecast"
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100"
        >
          Cash Forecast (Nakad Anumaan)
        </Link>

        <Link
          href="/bill/new"
          className="flex min-h-16 w-full items-center justify-center rounded-xl bg-green-700 text-lg font-semibold text-white"
        >
          + New Credit Bill (+ Naya Bill)
        </Link>
      </header>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-stone-500">Total Outstanding (Kul Baaki)</p>
          <p className="text-2xl font-bold text-stone-900">
            {formatRupees(summary.totalOutstanding)}
          </p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-stone-500">Total Overdue (Kitna Overdue Hai)</p>
          <p className="text-2xl font-bold text-red-600">{formatRupees(summary.totalOverdue)}</p>
          <p className="text-sm text-stone-600">
            {summary.overdueCount === 1 ? "1 bill overdue" : summary.overdueCount + " bills overdue"}
          </p>
        </div>
      </section>

      <form method="get" action="/" className="flex flex-col gap-3">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Search customer name (Naam se dhoondhiye)"
          className="min-h-12 w-full rounded-xl border border-stone-300 bg-white px-4 text-lg text-stone-900"
        />
        <input
          type="hidden"
          name="status"
          value={statuses.length === FILTER_STATUSES.length ? "ALL" : statuses.join(",")}
        />
        <button
          type="submit"
          className="min-h-12 w-full rounded-xl bg-stone-800 px-4 text-lg font-semibold text-white"
        >
          Search
        </button>
      </form>

      <nav className="flex gap-2 overflow-x-auto">
        <Link href={buildListHref([...FILTER_STATUSES], query)} className={chipClass(allActive)}>
          All (Sab)
        </Link>
        {STATUS_CHIPS.map((chip) => (
          <Link
            key={chip.status}
            href={buildListHref(toggleStatus(statuses, chip.status), query)}
            className={chipClass(statuses.length === 1 && statuses[0] === chip.status)}
          >
            {chip.label}
          </Link>
        ))}
      </nav>

      {shown.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-xl border bg-white p-6 text-center">
          <p className="text-lg text-stone-700">
            No bills match these filters (Is filter mein koi bill nahi)
          </p>
          <Link
            href="/?status=ALL"
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-stone-800 px-4 text-lg font-semibold text-white"
          >
            Show all bills (Sab dikhao)
          </Link>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {shown.map((row) => {
            const badge = BADGE[row.status];
            const edit = editById.get(row.id);
            return (
              <li key={row.id}>
                <div className="flex flex-col gap-2 rounded-xl border bg-white p-4">
                  <Link href={"/bill/" + row.id} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-lg font-semibold">{row.customerName}</span>
                      <span className={"rounded-full px-3 py-1 text-sm font-medium " + badge.className}>
                        {badge.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm text-stone-500">{row.billNumber}</span>
                      <span className="text-stone-600">Total {formatRupees(row.totalAmount)}</span>
                    </div>

                    {row.status === "PAID" ? (
                      <p className="text-stone-600">Paid in full</p>
                    ) : (
                      <p
                        className={
                          "text-xl font-bold " +
                          (row.status === "OVERDUE" ? "text-red-600" : "text-stone-900")
                        }
                      >
                        {formatRupees(row.balance)}
                      </p>
                    )}

                    <p className="text-sm text-stone-500">
                    Due {formatShortDate(row.dueDate)}
                      {row.status === "OVERDUE" && row.daysOverdue > 0 && (
                        <span className="font-medium text-red-600">
                          {" · " +
                            row.daysOverdue +
                            (row.daysOverdue === 1 ? " day overdue" : " days overdue")}
                        </span>
                      )}
                    </p>
                    {row.status !== "PAID" && lastRemindedLabel(lastSentById.get(row.id) ?? null, new Date()) && (
                      <p className="text-sm text-stone-500">
                        {lastRemindedLabel(lastSentById.get(row.id) ?? null, new Date())}
                      </p>
                    )}
                  </Link>

                  {row.balance > 0 && <RecordPaymentModal billId={row.id} balance={row.balance} />}
                  {edit && <EditBillModal billId={row.id} {...edit} />}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

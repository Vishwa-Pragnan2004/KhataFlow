import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatRupees } from "@/lib/money";
import { formatShortDate, toInputDate } from "@/lib/dates";
import { lastRemindedLabel } from "@/lib/reminders";
import RecordPaymentModal from "@/components/RecordPaymentModal";
import EditBillModal from "@/components/EditBillModal";
import CustomerSearch from "@/components/CustomerSearch";
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

// Static CSS only (no user data). Slow, transform-only drift for the hero glow.
const HERO_DRIFT_CSS = `@keyframes khata-drift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(8px, 8px); }
}`;

const STATUS_CHIPS: { status: FilterStatus; label: string; hindi: string }[] = [
  { status: "UNPAID", label: "Unpaid", hindi: "(Baki)" },
  { status: "PARTIALLY_PAID", label: "Partially Paid", hindi: "(Thoda Mila)" },
  { status: "OVERDUE", label: "Overdue", hindi: "(Late)" },
  { status: "PAID", label: "Paid", hindi: "(Poora Mila)" },
];

const BADGE: Record<UdhaarRow["status"], { label: string; className: string }> = {
  UNPAID: {
    label: "Unpaid",
    className: "bg-amber-100 text-amber-800 ring-1 ring-amber-200",
  },
  PARTIALLY_PAID: {
    label: "Partially Paid",
    className: "bg-sky-100 text-sky-800 ring-1 ring-sky-200",
  },
  OVERDUE: {
    label: "Overdue",
    className: "bg-rose-100 text-rose-800 ring-1 ring-rose-200",
  },
  PAID: {
    label: "Paid",
    className: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  },
};

const CARD_STATUS_BORDER: Record<UdhaarRow["status"], string> = {
  UNPAID: "border-l-amber-500",
  PARTIALLY_PAID: "border-l-sky-500",
  OVERDUE: "border-l-rose-500",
  PAID: "border-l-stone-200",
};

function hindiClass(active: boolean): string {
  return active ? "text-xs text-emerald-100" : "text-xs text-stone-500";
}

function chipClass(active: boolean): string {
  const base =
    "flex min-h-11 items-center whitespace-nowrap rounded-full px-4 py-2 text-base transition-all duration-200 active:scale-95";
  return active
    ? `${base} bg-emerald-600 text-white shadow`
    : `${base} text-stone-600 hover:bg-white`;
}

export default async function UdhaarListPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();
  // A customer search with no explicit status searches across ALL accounts.
  const statuses = parseStatusParam(params.status ?? (query ? "ALL" : undefined));

  const bills = await prisma.bill.findMany({
    include: {
      customer: { select: { name: true, whatsappNumber: true } },
      payments: { select: { amount: true } },
      reminders: { select: { sentAt: true }, orderBy: { sentAt: "desc" }, take: 1 },
    },
    orderBy: { id: "desc" },
  });
  const customers = await prisma.customer.findMany({
    select: { id: true, name: true },
    orderBy: { name: "asc" },
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
  // Counts ignore the active filter so each chip shows its true group size.
  const statusCounts = new Map<FilterStatus, number>(
    FILTER_STATUSES.map((s) => [s, all.filter((row) => row.status === s).length]),
  );
  const outstandingBills = all.filter((row) => row.balance > 0).length;
  const customersOwing = new Set(all.filter((row) => row.balance > 0).map((row) => row.customerName)).size;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-emerald-50/40">
      <style>{HERO_DRIFT_CSS}</style>
      <main className="flex w-full flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8 md:py-6">
        <header className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 px-4 py-4 text-center text-white shadow-lg ring-1 ring-inset ring-white/10 md:py-5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(52,211,153,0.40),_transparent_70%)] animate-[khata-drift_12s_ease-in-out_infinite] motion-reduce:animate-none"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(251,191,36,0.30),_transparent_70%)]"
          />
          <div className="relative flex flex-col items-center">
            <img src="/mascot.png" alt="KhataFlow mascot" className="pointer-events-none absolute left-3 top-1/2 hidden h-28 w-auto -translate-y-1/2 drop-shadow-lg sm:block md:left-8 md:h-36" />
            <h1 className="whitespace-nowrap text-[clamp(1.4rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-emerald-200 to-amber-200 bg-clip-text text-transparent">
                Udhaar Receivables
              </span>{" "}
              <span className="text-emerald-100">(Baki Khata)</span>
            </h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/bill/new"
                className="rounded-full bg-white px-6 py-2.5 font-semibold text-emerald-800 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-50 active:scale-95"
              >
                + New Credit Bill (+ Naya Bill)
              </Link>
            </div>
          </div>
        </header>



        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start">
          <aside className="flex flex-col gap-3 lg:sticky lg:top-6 lg:w-72 xl:w-80 lg:shrink-0">
            <p className="text-xs uppercase tracking-wide text-stone-500">
              Quick links <span className="text-xs text-stone-500">(Jaldi Raasta)</span>
            </p>
            <nav className="flex flex-col gap-3">
              <Link
                href="/forecast"
                className="group flex w-full items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xl text-emerald-700 transition group-hover:scale-110 motion-reduce:transition-none">
                  📈
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-stone-900">
                    Cash Forecast <span className="text-xs text-stone-500">(Nakad Anumaan)</span>
                  </span>
                  <span className="text-sm text-stone-500">90-day cash outlook</span>
                </span>
              </Link>
              <Link
                href="/products"
                className="group flex w-full items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-xl text-amber-700 transition group-hover:scale-110 motion-reduce:transition-none">
                  🏷️
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-stone-900">
                    Products &amp; Prices <span className="text-xs text-stone-500">(Daam)</span>
                  </span>
                  <span className="text-sm text-stone-500">Edit catalog prices</span>
                </span>
              </Link>
            </nav>
            <div className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm text-stone-600">
                  Customers owing <span className="text-xs text-stone-500">(Baaki wale grahak)</span>
                </p>
                <p className="text-xl font-bold text-stone-900">{customersOwing}</p>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm text-stone-600">
                  Overdue bills <span className="text-xs text-stone-500">(Der wale bill)</span>
                </p>
                <p className="text-xl font-bold text-red-600">{summary.overdueCount}</p>
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 w-full flex-1 flex-col gap-6">


        <div className="flex w-full flex-col gap-4">
          <CustomerSearch
            customers={customers}
            defaultValue={query}
            status={params.status && params.status !== "ALL" ? params.status : undefined}
          />


          <nav className="flex w-full gap-1 overflow-x-auto whitespace-nowrap rounded-full bg-stone-100 p-1">
            <Link href={buildListHref([...FILTER_STATUSES], query)} className={chipClass(allActive)}>
              All <span className={hindiClass(allActive)}>(Sab)</span>
              <span className="ml-1">· {all.length}</span>
            </Link>
            {STATUS_CHIPS.map((chip) => {
              const active = statuses.length === 1 && statuses[0] === chip.status;
              return (
                <Link
                  key={chip.status}
                  href={buildListHref(toggleStatus(statuses, chip.status), query)}
                  className={chipClass(active)}
                >
                  {chip.label} <span className={hindiClass(active)}>{chip.hindi}</span>
                  <span className="ml-1">· {statusCounts.get(chip.status) ?? 0}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <section className="grid w-full gap-3 sm:grid-cols-2">
          <div
            className="fade-up motion-reduce:animate-none relative overflow-hidden rounded-2xl border border-t-4 border-sky-500 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ animationDelay: "0ms", animationDuration: "0.35s" }}
          >
            <p className="text-sm text-stone-600">
              Total Outstanding <span className="text-xs text-stone-500">(Kul Baaki)</span>
            </p>
            <p className="mt-1 text-3xl font-bold text-stone-900">
              {formatRupees(summary.totalOutstanding)}
            </p>
            <p className="text-sm text-stone-600">
              {outstandingBills === 1 ? "1 bill with a balance" : outstandingBills + " bills with a balance"}
            </p>
          </div>
          <div
            className="fade-up motion-reduce:animate-none relative overflow-hidden rounded-2xl border border-t-4 border-rose-500 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ animationDelay: "40ms", animationDuration: "0.35s" }}
          >
            <p className="text-sm text-stone-600">
              Total Overdue <span className="text-xs text-stone-500">(Kitna Overdue Hai)</span>
            </p>
            <p className="mt-1 text-3xl font-bold text-red-600">{formatRupees(summary.totalOverdue)}</p>
            <p className="text-sm text-stone-600">
              {summary.overdueCount === 1 ? "1 bill overdue" : summary.overdueCount + " bills overdue"}
            </p>
          </div>
        </section>


        {shown.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border bg-white p-6 text-center shadow-sm">
            <p className="text-lg text-stone-700">
              No bills match these filters (Is filter mein koi bill nahi)
            </p>
            <Link
              href="/?status=ALL"
              className="flex min-h-12 w-full items-center justify-center rounded-xl bg-stone-900 px-4 text-lg font-semibold text-white transition duration-200 hover:bg-stone-800 active:scale-95"
            >
              Show all bills (Sab dikhao)
            </Link>
          </div>
        ) : (
          <ul className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {shown.map((row, index) => {
              const badge = BADGE[row.status];
              const edit = editById.get(row.id);
              const animate = index < 12;
              return (
                <li
                  key={row.id}
                  className={animate ? "fade-up motion-reduce:animate-none" : undefined}
                  style={
                    animate
                      ? { animationDelay: `${index * 40}ms`, animationDuration: "0.35s" }
                      : undefined
                  }
                >
                  <div
                    className={
                      "flex h-full flex-col gap-2 rounded-2xl border border-l-4 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg " +
                      CARD_STATUS_BORDER[row.status]
                    }
                  >
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
                        <>
                          <p className="text-xs text-stone-600">Balance due</p>
                          <p
                            className={
                              "text-2xl font-bold " +
                              (row.status === "OVERDUE" ? "text-red-600" : "text-stone-900")
                            }
                          >
                            {formatRupees(row.balance)}
                          </p>
                        </>
                      )}

                      <p className="text-sm text-stone-600">
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
                        <p className="text-sm text-stone-600">
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
        </div>
      </div>

      </main>
    </div>
  );
}

import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatRupees } from "@/lib/money";
import { addDays, startOfDay } from "@/lib/dates";
import { getBalance, sumPayments } from "@/lib/billStatus";
import {
  buildForecast,
  compareScenarios,
  describeTarget,
  suggestChaseList,
  type ForecastBill,
  type ForecastExpense,
  type ForecastInput,
  type Scenario,
  type ScenarioTarget,
} from "@/lib/forecast";
import ForecastCharts from "@/components/forecast/ForecastCharts";
import WhatIfPanel, { type TargetAvailability } from "./WhatIfPanel";



export const dynamic = "force-dynamic";

const EXCLUDED_STATUSES = ["DRAFT", "CANCELLED"];

type WhatIfRow = { customerId: number; delayDays: number; target: ScenarioTarget };

const SCENARIO_TARGETS: ScenarioTarget[] = ["all", "overdue", "next", "endOfMonth"];

function isScenarioTarget(value: string): value is ScenarioTarget {
  return (SCENARIO_TARGETS as string[]).includes(value);
}


function shortDate(d: Date): string {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

function isSameDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() === startOfDay(b).getTime();
}

function Kpi({
  label,
  value,
  note,
  accent,
}: {
  label: string;
  value: string;
  note?: string;
  accent: string;
}) {
  return (
    <div className={`rounded-md border-l-4 bg-white p-5 shadow-sm ${accent}`}>
      <p className="text-sm uppercase tracking-wide text-stone-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-stone-900">{value}</p>
      {note ? <p className="mt-1 text-sm text-stone-500">{note}</p> : null}
    </div>
  );
}

export default async function ForecastPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;


}) {
  const sp = await searchParams;
  const today = new Date();

  const rawBills = await prisma.bill.findMany({
    where: { status: { notIn: EXCLUDED_STATUSES } },
    include: {
      customer: { select: { id: true, name: true } },
      payments: { select: { amount: true } },
    },
  });

  const bills: ForecastBill[] = rawBills.map((bill) => ({
    id: bill.id,
    customerId: bill.customer.id,
    customerName: bill.customer.name,
    balance: getBalance(bill.totalAmount, sumPayments(bill.payments)),
    dueDate: bill.dueDate,
    promisedDate: bill.promisedDate,
    status: bill.status,
  }));

  const expenses: ForecastExpense[] = await prisma.expense.findMany({
    select: {
      id: true,
      title: true,
      category: true,
      amount: true,
      dueDate: true,
      paidOn: true,
    },
  });

  // Unique customers from the loaded bills, for the what-if dropdown.
  const customerMap = new Map<number, string>();
  for (const bill of bills) customerMap.set(bill.customerId, bill.customerName);
  const customers = Array.from(customerMap.entries()).sort((a, b) =>
    a[1].localeCompare(b[1]),
  );

  // Opening cash = settled payments received minus settled expenses paid, both dated on or before today.
  const [cashInAgg, cashOutAgg] = await Promise.all([
    prisma.payment.aggregate({
      _sum: { amount: true },
      where: { paidOn: { lte: today } },
    }),
    prisma.expense.aggregate({
      _sum: { amount: true },
      where: { paidOn: { lte: today } },
    }),
  ]);
  const openingCash =
    Number(cashInAgg._sum.amount ?? 0) - Number(cashOutAgg._sum.amount ?? 0);

  const input: ForecastInput = {
    today,
    openingCash,
    bills,
    expenses,
  };

  // What-if rows come from s_N (customer), d_N (delay) and t_N (target), where N is the
  // row position. Only rows with a real customer, an integer delay 0..60 and a known
  // target are applied. An old single-scenario link (scenario/delay) counts as one row
  // when no s_N params are present.
  const rowIndexes = Object.keys(sp)
    .flatMap((key) => {
      const match = /^s_(\d+)$/.exec(key);
      return match ? [Number(match[1])] : [];
    })
    .sort((a, b) => a - b);
  const rawRows: { customer?: string; delay?: string; target?: string }[] =
    rowIndexes.length > 0
      ? rowIndexes.map((i) => ({
          customer: sp[`s_${i}`],
          delay: sp[`d_${i}`],
          target: sp[`t_${i}`],
        }))
      : sp.scenario !== undefined
        ? [{ customer: sp.scenario, delay: sp.delay }]
        : [];

  const whatIfRows: WhatIfRow[] = [];
  const scenarios: Scenario[] = [];
  const activeParts: string[] = [];
  for (const raw of rawRows) {
    const customerId = raw.customer ? Number(raw.customer) : NaN;
    const name = customerMap.get(customerId);
    const trimmed = raw.delay?.trim() ?? "";
    const delayDays = trimmed !== "" ? Number(trimmed) : NaN;
    const target = raw.target ?? "all";
    if (name === undefined || !Number.isInteger(delayDays) || delayDays < 0 || delayDays > 60) {
      continue;
    }
    if (!isScenarioTarget(target)) continue;
    whatIfRows.push({ customerId, delayDays, target });
    scenarios.push({ customerId, delayDays, target });
    activeParts.push(`${name}'s ${describeTarget(target)} pays ${delayDays} days late`);
  }
  const activeLabel = activeParts.join(" and ");

  // Which bill targets each customer has, so the panel can disable empty ones.
  // Unpaid means a positive balance. Overdue is due before today; next is due today or later.
  // End-of-month means due in the last 7 days of its month.
  const todayStart = startOfDay(today);
  const targetAvailability: Record<string, TargetAvailability> = {};
  for (const [id] of customers) {
    targetAvailability[String(id)] = { overdue: false, next: false, endOfMonth: false };
  }
  for (const bill of bills) {
    if (bill.balance <= 0) continue;
    const availability = targetAvailability[String(bill.customerId)];
    if (!availability) continue;
    if (startOfDay(bill.dueDate).getTime() < todayStart.getTime()) {
      availability.overdue = true;
    } else {
      availability.next = true;
    }
    const due = bill.dueDate;
    const daysInMonth = new Date(due.getFullYear(), due.getMonth() + 1, 0).getDate();
    if (due.getDate() > daysInMonth - 7) availability.endOfMonth = true;
  }


  let forecast;
  let comparison: ReturnType<typeof compareScenarios> | null = null;
  if (scenarios.length > 0) {
    comparison = compareScenarios(input, scenarios);
    forecast = comparison.base;
  } else {
    forecast = buildForecast(input);
  }


  const chaseList = suggestChaseList(bills, today);
  const cashInItems = forecast.inflowItems.slice(0, 10);
  const negative = forecast.firstNegativeDate !== null;

  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* Header panel */}
      <header className="bg-stone-900 px-6 py-8 text-white">
        <div className="mx-auto max-w-6xl flex items-start gap-6">
          <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-2xl bg-white/5 p-2">
            <img src="/mascot.png" alt="KhataFlow mascot" className="h-full w-full object-contain" />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <Link href="/" className="text-sm text-amber-300 underline">
              Back to Udhaar list
            </Link>
            <div className="flex items-center gap-3">
              <h1 className="mt-3 text-3xl font-bold">Cash Forecast (Nakad Anumaan)</h1>
            </div>
            <p className="mt-2 text-stone-300">
              Next 90 days, built from unpaid bills and upcoming expenses
            </p>
            <p className="mt-1 text-xs text-stone-400">
              Opening cash is derived from recorded payments and expenses: {formatRupees(openingCash)}
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-6 py-8">
        {/* KPI row */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Kpi
            label="Cash in, next 30 days"
            value={formatRupees(forecast.inflow30)}
            accent="border-green-600"
          />
          <Kpi
            label="Cash out, next 30 days"
            value={formatRupees(forecast.outflow30)}
            accent="border-red-600"
          />
          <Kpi
            label="Net, 90 days"
            value={formatRupees(forecast.net90)}
            accent={forecast.net90 < 0 ? "border-red-600" : "border-green-600"}
          />
          <Kpi
            label="Lowest cash point"
            value={formatRupees(forecast.lowestCash)}
            note={`on ${shortDate(forecast.lowestCashDate)}`}
            accent={forecast.lowestCash < 0 ? "border-red-600" : "border-amber-500"}
          />
        </section>

        {negative && forecast.firstNegativeDate ? (
          <div className="rounded-md border border-red-300 bg-red-50 p-4 text-red-800">
            <p className="font-semibold">
              Cash goes negative on {shortDate(forecast.firstNegativeDate)}. Chase these
              customers first.
            </p>
          </div>
        ) : (
          <div className="rounded-md border border-green-300 bg-green-50 p-4 text-green-800">
            <p className="font-semibold">Cash stays positive for 90 days.</p>
          </div>
        )}

        <ForecastCharts
          buckets={forecast.buckets}
          lowestCash={forecast.lowestCash}
          outflowItems={forecast.outflowItems}
        />


        {/* Weekly projection */}
        <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Weekly projection</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-stone-900 text-stone-600">
                <tr>
                  <th className="py-2 pr-4">Week</th>
                  <th className="py-2 pr-4">Dates</th>
                  <th className="py-2 pr-4 text-right">Inflow</th>
                  <th className="py-2 pr-4 text-right">Outflow</th>
                  <th className="py-2 pr-4 text-right">Net</th>
                  <th className="py-2 text-right">Closing cash</th>
                </tr>
              </thead>
              <tbody>
                {forecast.buckets.map((b) => (
                  <tr key={b.label} className="border-b border-stone-200">
                    <td className="py-2 pr-4 font-medium">{b.label}</td>
                    <td className="py-2 pr-4 text-stone-600">
                      {shortDate(addDays(today, b.startDay))} to{" "}
                      {shortDate(addDays(today, b.endDay))}
                    </td>
                    <td className="py-2 pr-4 text-right">{formatRupees(b.inflow)}</td>
                    <td className="py-2 pr-4 text-right">{formatRupees(b.outflow)}</td>
                    <td className="py-2 pr-4 text-right">{formatRupees(b.net)}</td>
                    <td
                      className={`py-2 text-right font-semibold ${
                        b.closingCash < 0 ? "text-red-600" : "text-stone-900"
                      }`}
                    >
                      {formatRupees(b.closingCash)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Cash in */}
          <section className="rounded-md border-t-4 border-green-600 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Cash in (expected receipts)</h2>
            {cashInItems.length === 0 ? (
              <p className="text-stone-500">No open receipts.</p>
            ) : (
              <ul className="divide-y divide-stone-200">
                {cashInItems.map((item) => (
                  <li key={item.billId} className="flex justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium">{item.customerName}</p>
                      <p className="text-sm text-stone-500">
                        Expected {shortDate(item.expectedDate)}
                      </p>
                    </div>
                    <p className="font-semibold text-green-700">
                      {formatRupees(item.amount)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Cash out */}
          <section className="rounded-md border-t-4 border-red-600 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Cash out (expenses)</h2>
            {forecast.outflowItems.length === 0 ? (
              <p className="text-stone-500">No unpaid expenses.</p>
            ) : (
              <ul className="divide-y divide-stone-200">
                {forecast.outflowItems.map((item) => (
                  <li key={item.expenseId} className="flex justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-stone-500">
                        {item.category} · {shortDate(item.date)}
                        {isSameDay(item.date, today) ? (
                          <span className="ml-2 rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                            Due now
                          </span>
                        ) : null}
                      </p>
                    </div>
                    <p className="font-semibold text-red-700">
                      {formatRupees(item.amount)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        {/* What-if scenario */}
        <section className="rounded-md border-l-4 border-amber-500 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">What-if: customer pays late</h2>
          <p className="mt-1 text-sm text-stone-500">
            Pick a customer and how many days late their payments arrive.
          </p>
          <WhatIfPanel
            customers={customers}
            targetAvailability={targetAvailability}
            initialRows={whatIfRows}
          />



          {comparison ? (
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border-l-4 border-stone-900 bg-stone-50 p-4">
                <p className="text-sm text-stone-500">Lowest cash change</p>
                <p
                  className={`text-2xl font-bold ${
                    comparison.lowestCashChange < 0 ? "text-red-600" : "text-stone-900"
                  }`}
                >
                  {formatRupees(comparison.lowestCashChange)}
                </p>
                <p className="mt-2 text-sm text-stone-700">
                  If {activeLabel}, lowest cash changes by{" "}
                  {formatRupees(comparison.lowestCashChange)}.
                </p>
              </div>
              <div className="rounded-md border-l-4 border-stone-900 bg-stone-50 p-4">
                <p className="text-sm text-stone-500">Cash on original due date change</p>
                <p
                  className={`text-2xl font-bold ${
                    comparison.dueDateCashChange < 0 ? "text-red-600" : "text-stone-900"
                  }`}
                >
                  {formatRupees(comparison.dueDateCashChange)}
                </p>
                <p className="mt-2 text-sm text-stone-700">
                  If {activeLabel}, cash on the day the bill was originally expected changes by{" "}
                  {formatRupees(comparison.dueDateCashChange)}.
                </p>
              </div>
            </div>
          ) : null}

        </section>

        {/* Chase list */}
        <section className="rounded-md border-l-4 border-red-600 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Chase list (overdue bills)</h2>
          {chaseList.length === 0 ? (
            <p className="text-stone-500">No overdue bills.</p>
          ) : (
            <ul className="divide-y divide-stone-200">
              {chaseList.map((item) => (
                <li
                  key={item.billId}
                  className="flex flex-wrap items-center justify-between gap-4 py-3"
                >
                  <div>
                    <p className="font-medium">
                      Bill #{item.billId} · {item.customerName}
                    </p>
                    <p className="text-sm text-stone-500">
                      {item.daysOverdue} days overdue · Balance {formatRupees(item.balance)}
                    </p>
                  </div>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                    Chase today
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

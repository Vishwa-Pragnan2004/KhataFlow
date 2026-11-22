import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatRupees } from "@/lib/money";
import { addDays, startOfDay } from "@/lib/dates";
import { getBalance, sumPayments } from "@/lib/billStatus";
import StatusDonut from "@/components/StatusDonut";
import { buildStatusGroups } from "@/lib/invoiceStatus";
import ForecastTabs from "@/components/ForecastTabs";
import CashForecastPanel from "@/components/cashforecast/CashForecastPanel";
import { toForecastInput } from "@/lib/cashforecast/fromDb";
import {
  buildForecast,
  compareScenario,
  suggestChaseList,
  type ForecastBill,
  type ForecastExpense,
  type ForecastInput,
  type Scenario,
} from "@/lib/forecast";

export const dynamic = "force-dynamic";

// Sample data: fixed opening cash until a real cash ledger exists.
const OPENING_CASH = 25000;

const EXCLUDED_STATUSES = ["DRAFT", "CANCELLED"];

const DEFAULT_DELAY_DAYS = 15;

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
  searchParams: Promise<{ scenario?: string; delay?: string }>;
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

  const statusBills = await prisma.bill.findMany({
    where: { status: { notIn: EXCLUDED_STATUSES } },
    include: { customer: true, payments: true },
    orderBy: { billDate: "desc" },
  });
  const statusGroups = buildStatusGroups(statusBills);

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const cashInput = toForecastInput({ bills: statusBills, todayStart });

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

  const input: ForecastInput = {
    today,
    openingCash: OPENING_CASH,
    bills,
    expenses,
  };

  // What-if scenario: only applied when both customer and delay are valid.
  const scenarioCustomerId = sp.scenario ? Number(sp.scenario) : NaN;
  const scenarioName = customerMap.get(scenarioCustomerId);
  const delayDays =
    sp.delay !== undefined && sp.delay.trim() !== "" ? Number(sp.delay) : NaN;
  const validScenario =
    scenarioName !== undefined &&
    Number.isInteger(delayDays) &&
    delayDays >= 0 &&
    delayDays <= 60;

  let forecast;
  let comparison = null;
  if (validScenario) {
    const scenario: Scenario = { customerId: scenarioCustomerId, delayDays };
    comparison = compareScenario(input, scenario);
    forecast = comparison.base;
  } else {
    forecast = buildForecast(input);
  }

  const chaseList = suggestChaseList(bills, today);
  const cashInItems = forecast.inflowItems.slice(0, 10);
  const negative = forecast.firstNegativeDate !== null;

  const overviewContent = (<>
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <Link href="/" className="text-sm font-medium text-stone-800 underline">
          ← Back to Udhaar Receivables
        </Link>
      </div>
      {/* Header panel */}
      <header className="bg-stone-900 px-6 py-8 text-white">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-sm text-amber-300 underline">
            Back to Udhaar list
          </Link>
          <h1 className="mt-3 text-3xl font-bold">Cash Forecast (Nakad Anumaan)</h1>
          <p className="mt-2 text-stone-300">
            Next 90 days, built from unpaid bills and upcoming expenses
          </p>
          <p className="mt-1 text-xs text-stone-400">
            Opening cash is sample data: {formatRupees(OPENING_CASH)}
          </p>
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

        {/* Invoices by status */}
        <section className="mb-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Invoices by status</h2>
          <StatusDonut counts={statusGroups.counts} amounts={statusGroups.amounts} groups={statusGroups.groups} />
        </section>

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
          <form action="/forecast" method="get" className="mt-4 flex flex-wrap items-end gap-4">
            <label className="flex flex-col text-sm">
              <span className="mb-1 text-stone-600">Customer</span>
              <select
                name="scenario"
                defaultValue={sp.scenario ?? ""}
                className="min-h-12 rounded-md border border-stone-300 px-3"
              >
                <option value="">Choose a customer</option>
                {customers.map(([id, name]) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1 text-stone-600">Days late</span>
              <input
                type="number"
                name="delay"
                min={0}
                max={60}
                defaultValue={sp.delay ?? String(DEFAULT_DELAY_DAYS)}
                className="min-h-12 w-32 rounded-md border border-stone-300 px-3"
              />
            </label>
            <button
              type="submit"
              className="min-h-12 rounded-md bg-stone-900 px-5 text-white"
            >
              Run what-if
            </button>
          </form>

          {comparison && scenarioName !== undefined ? (
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
                  If {scenarioName} pays {delayDays} days late, lowest cash changes by{" "}
                  {formatRupees(comparison.lowestCashChange)}.
                </p>
              </div>
              <div className="rounded-md border-l-4 border-stone-900 bg-stone-50 p-4">
                <p className="text-sm text-stone-500">Closing cash (day 90) change</p>
                <p
                  className={`text-2xl font-bold ${
                    comparison.closingCash90Change < 0 ? "text-red-600" : "text-stone-900"
                  }`}
                >
                  {formatRupees(comparison.closingCash90Change)}
                </p>
                <p className="mt-2 text-sm text-stone-700">
                  If {scenarioName} pays {delayDays} days late, day-90 cash changes by{" "}
                  {formatRupees(comparison.closingCash90Change)}.
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
  </>);

  return (<ForecastTabs overview={overviewContent} cashForecast={<CashForecastPanel input={cashInput} />} />);
}

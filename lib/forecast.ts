// Cash forecast engine. Pure module: no Prisma, no I/O.
// All dates are normalised with startOfDay before comparing, and day
// differences use Math.round so DST shifts cannot cause off-by-one errors.
import { addDays, startOfDay } from "./dates";

// ---------- Input types ----------

export type ForecastBill = {
  id: number;
  customerId: number;
  customerName: string;
  balance: number;
  dueDate: Date;
  promisedDate: Date | null;
  status: string;
};

export type ForecastExpense = {
  id: number;
  title: string;
  category: string;
  amount: number;
  dueDate: Date;
  paidOn: Date | null;
};

export type Scenario = { customerId: number; delayDays: number };

export type ForecastInput = {
  today: Date;
  openingCash: number;
  bills: ForecastBill[];
  expenses: ForecastExpense[];
  scenario?: Scenario;
};

// ---------- Output types ----------

export type Bucket = {
  startDay: number;
  endDay: number;
  label: string;
  inflow: number;
  outflow: number;
  net: number;
  closingCash: number;
};

export type InflowItem = {
  billId: number;
  customerName: string;
  amount: number;
  expectedDate: Date;
};

export type OutflowItem = {
  expenseId: number;
  title: string;
  category: string;
  amount: number;
  date: Date;
};

export type ForecastResult = {
  buckets: Bucket[];
  inflow30: number;
  inflow60: number;
  inflow90: number;
  outflow30: number;
  outflow60: number;
  outflow90: number;
  net30: number;
  net60: number;
  net90: number;
  lowestCash: number;
  lowestCashDate: Date;
  firstNegativeDate: Date | null;
  closingCash90: number;
  inflowItems: InflowItem[];
  outflowItems: OutflowItem[];
};

export type ScenarioComparison = {
  base: ForecastResult;
  scenario: ForecastResult;
  lowestCashChange: number;
  closingCash90Change: number;
};

export type ChaseItem = {
  billId: number;
  customerName: string;
  balance: number;
  daysOverdue: number;
  suggestedAction: "Chase today";
};

// ---------- Constants and helpers ----------

const MS_PER_DAY = 24 * 60 * 60 * 1000;
// Overdue bills are assumed to land this many days from today.
const OVERDUE_RECEIPT_DAYS = 7;
const WEEKS = 13;

// Whole days from `from` to `to`, comparing start-of-day values.
function dayDiff(from: Date, to: Date): number {
  return Math.round(
    (startOfDay(to).getTime() - startOfDay(from).getTime()) / MS_PER_DAY,
  );
}

// Sum of amounts whose day index falls within [from, to] inclusive.
function sumDays(
  entries: { day: number; amount: number }[],
  from: number,
  to: number,
): number {
  let total = 0;
  for (const e of entries) {
    if (e.day >= from && e.day <= to) total += e.amount;
  }
  return total;
}

// ---------- Forecast ----------

export function buildForecast(input: ForecastInput): ForecastResult {
  const today = startOfDay(input.today);
  const { openingCash, scenario } = input;

  // Inflows: open bills only (drafts and cancelled excluded).
  const inflowItems: InflowItem[] = [];
  for (const bill of input.bills) {
    if (!(bill.balance > 0)) continue;
    if (bill.status === "DRAFT" || bill.status === "CANCELLED") continue;

    // Use the promised date if it is not in the past, otherwise the due date.
    let expected =
      bill.promisedDate !== null &&
      startOfDay(bill.promisedDate).getTime() >= today.getTime()
        ? startOfDay(bill.promisedDate)
        : startOfDay(bill.dueDate);

    // Already overdue: assume it lands a week from today.
    if (expected.getTime() < today.getTime()) {
      expected = addDays(today, OVERDUE_RECEIPT_DAYS);
    }

    // What-if: delay receipts for the scenario customer.
    if (scenario && bill.customerId === scenario.customerId) {
      expected = addDays(expected, scenario.delayDays);
    }

    inflowItems.push({
      billId: bill.id,
      customerName: bill.customerName,
      amount: bill.balance,
      expectedDate: expected,
    });
  }
  inflowItems.sort((a, b) => a.expectedDate.getTime() - b.expectedDate.getTime());

  // Outflows: unpaid expenses. Overdue ones are counted today.
  const outflowItems: OutflowItem[] = [];
  for (const expense of input.expenses) {
    if (expense.paidOn !== null) continue;
    const due = startOfDay(expense.dueDate);
    outflowItems.push({
      expenseId: expense.id,
      title: expense.title,
      category: expense.category,
      amount: expense.amount,
      date: due.getTime() < today.getTime() ? today : due,
    });
  }
  outflowItems.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Day-indexed copies for bucket and horizon sums.
  const inflowDays = inflowItems.map((i) => ({
    day: dayDiff(today, i.expectedDate),
    amount: i.amount,
  }));
  const outflowDays = outflowItems.map((o) => ({
    day: dayDiff(today, o.date),
    amount: o.amount,
  }));

  // Weekly buckets: day 0-6, 7-13, ..., 84-90.
  const buckets: Bucket[] = [];
  let runningCash = openingCash;
  let lowestCash = openingCash;
  let lowestCashDate = today;
  let firstNegativeDate: Date | null = openingCash < 0 ? today : null;

  for (let w = 0; w < WEEKS; w++) {
    const startDay = w * 7;
    const endDay = startDay + 6;
    const inflow = sumDays(inflowDays, startDay, endDay);
    const outflow = sumDays(outflowDays, startDay, endDay);
    const net = inflow - outflow;
    runningCash += net;

    const bucketStart = addDays(today, startDay);
    buckets.push({
      startDay,
      endDay,
      label: `Week ${w + 1}`,
      inflow,
      outflow,
      net,
      closingCash: runningCash,
    });

    // Track the lowest point; ties keep the earliest date.
    if (runningCash < lowestCash) {
      lowestCash = runningCash;
      lowestCashDate = bucketStart;
    }
    if (firstNegativeDate === null && runningCash < 0) {
      firstNegativeDate = bucketStart;
    }
  }

  // Horizon totals (inclusive day ranges starting at today).
  const inflow30 = sumDays(inflowDays, 0, 30);
  const inflow60 = sumDays(inflowDays, 0, 60);
  const inflow90 = sumDays(inflowDays, 0, 90);
  const outflow30 = sumDays(outflowDays, 0, 30);
  const outflow60 = sumDays(outflowDays, 0, 60);
  const outflow90 = sumDays(outflowDays, 0, 90);

  return {
    buckets,
    inflow30,
    inflow60,
    inflow90,
    outflow30,
    outflow60,
    outflow90,
    net30: inflow30 - outflow30,
    net60: inflow60 - outflow60,
    net90: inflow90 - outflow90,
    lowestCash,
    lowestCashDate,
    firstNegativeDate,
    closingCash90: buckets[WEEKS - 1].closingCash,
    inflowItems,
    outflowItems,
  };
}

// Base forecast vs. forecast with a customer payment delay applied.
// Changes are scenario minus base.
export function compareScenario(
  input: Omit<ForecastInput, "scenario">,
  scenario: Scenario,
): ScenarioComparison {
  const base = buildForecast(input);
  const result = buildForecast({ ...input, scenario });

  return {
    base,
    scenario: result,
    lowestCashChange: result.lowestCash - base.lowestCash,
    closingCash90Change: result.closingCash90 - base.closingCash90,
  };
}

// Open bills already past due, largest balance first.
export function suggestChaseList(bills: ForecastBill[], today: Date): ChaseItem[] {
  const todayStart = startOfDay(today);
  const items: ChaseItem[] = [];

  for (const bill of bills) {
    if (!(bill.balance > 0)) continue;
    const due = startOfDay(bill.dueDate);
    if (due.getTime() >= todayStart.getTime()) continue;

    items.push({
      billId: bill.id,
      customerName: bill.customerName,
      balance: bill.balance,
      daysOverdue: dayDiff(due, todayStart),
      suggestedAction: "Chase today",
    });
  }

  items.sort((a, b) => b.balance - a.balance);
  return items;
}

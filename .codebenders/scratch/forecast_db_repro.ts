// REPRODUCE scratch (DB source): runs the same query as app/forecast/page.tsx
// (lines 23-90) against the local database via the app's Prisma client, then
// feeds the rows to the real buildForecast in lib/forecast.ts.
// Run from project root:  npx tsx .codebenders/scratch/forecast_db_repro.ts
import { prisma } from "../../lib/db";
import { buildForecast, type ForecastBill, type ForecastExpense } from "../../lib/forecast";
import { getBalance, sumPayments } from "../../lib/billStatus";

const OPENING_CASH = 25000;
const EXCLUDED_STATUSES = ["DRAFT", "CANCELLED"];

async function main() {
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

  const paymentRows = rawBills.reduce((n, b) => n + b.payments.length, 0);
  console.log(`rows: bills=${rawBills.length} payments=${paymentRows} expenses=${expenses.length}`);
  console.log("bills (id, status, total, balance, due, promised):");
  for (const [i, b] of rawBills.entries()) {
    const bal = bills[i].balance;
    console.log(
      `  ${b.id}\t${b.status}\t${b.totalAmount}\t${bal}\t${b.dueDate.toISOString()}\t${b.promisedDate ? b.promisedDate.toISOString() : "null"}`,
    );
  }

  const result = buildForecast({ today, openingCash: OPENING_CASH, bills, expenses });

  for (const b of result.buckets) {
    console.log(`${b.label}\tinflow=${b.inflow}\toutflow=${b.outflow}\tnet=${b.net}\tclosing=${b.closingCash}`);
  }

  const nonZeroIn = result.buckets.map((b) => b.inflow).filter((v) => v > 0);
  const sorted = [...nonZeroIn].sort((a, b) => b - a);
  console.log("largest non-zero inflow:", sorted[0], "next largest:", sorted[1]);
  console.log("ratio largest/next:", sorted[1] ? (sorted[0] / sorted[1]).toFixed(3) : "n/a");
}

main()
  .catch((e) => {
    console.error("ERROR:", e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());

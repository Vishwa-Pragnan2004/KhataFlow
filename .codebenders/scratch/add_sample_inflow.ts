// Scratch: idempotently insert sample inflow bills so every forecast week
// (W1..W13) has money coming in. Never modifies existing rows.
import { prisma } from "../../lib/db";
import { addDays, startOfDay } from "../../lib/dates";
import { getBalance, sumPayments } from "../../lib/billStatus";
import {
  buildForecast,
  type ForecastBill,
  type ForecastExpense,
} from "../../lib/forecast";

const SAMPLE_PREFIX = "[SAMPLE] ";
// Same constant as app/forecast/page.tsx.
const OPENING_CASH = 25000;
const EXCLUDED_STATUSES = ["DRAFT", "CANCELLED"];

// offset = days from today for dueDate (week = floor(offset / 7) + 1,
// so each due date lands inside its forecast bucket).
// paid > 0 creates a Payment row; paid === total gives zero inflow.
type Plan = { week: number; offset: number; total: number; paid: number };

const PLAN: Plan[] = [
  { week: 1, offset: 1, total: 12400, paid: 0 },
  { week: 1, offset: 4, total: 9000, paid: 4000 }, // partial
  { week: 2, offset: 9, total: 18750, paid: 0 },
  { week: 2, offset: 12, total: 9500, paid: 0 },
  { week: 3, offset: 15, total: 14200, paid: 0 },
  { week: 3, offset: 19, total: 9500, paid: 0 },
  { week: 4, offset: 22, total: 18750, paid: 0 },
  { week: 5, offset: 30, total: 27400, paid: 0 },
  { week: 5, offset: 33, total: 6300, paid: 6300 }, // full, zero inflow
  { week: 6, offset: 37, total: 14200, paid: 0 },
  { week: 7, offset: 44, total: 18750, paid: 0 },
  { week: 7, offset: 46, total: 9000, paid: 0 },
  { week: 8, offset: 51, total: 11300, paid: 0 },
  { week: 9, offset: 58, total: 27400, paid: 0 },
  { week: 10, offset: 64, total: 14200, paid: 0 },
  { week: 10, offset: 67, total: 18750, paid: 10000 }, // partial
  { week: 11, offset: 71, total: 9500, paid: 0 },
  { week: 12, offset: 79, total: 12600, paid: 0 },
  { week: 12, offset: 81, total: 6300, paid: 0 },
  { week: 13, offset: 86, total: 21000, paid: 0 },
];

async function main() {
  const alreadyThere = await prisma.bill.findFirst({
    where: {
      OR: [
        { notes: { startsWith: "[SAMPLE]" } },
        { itemsNote: { startsWith: "[SAMPLE]" } },
      ],
    },
    select: { id: true },
  });
  if (alreadyThere) {
    console.log("Sample rows already present, nothing inserted");
    return;
  }

  const today = startOfDay(new Date());

  // Reuse up to 5 existing customers, lowest id first.
  const existing = await prisma.customer.findMany({
    orderBy: { id: "asc" },
    take: 5,
  });

  let pool = existing;
  if (existing.length < 3) {
    const created = [];
    for (let i = 1; i <= 3; i++) {
      created.push(
        await prisma.customer.create({
          data: { name: `Sample Customer ${i}`, whatsappNumber: "" },
        }),
      );
    }
    pool = [...existing, ...created];
  }

  for (let i = 0; i < PLAN.length; i++) {
    const p = PLAN[i];
    const customer = pool[i % pool.length];
    const note = `${SAMPLE_PREFIX}Week ${p.week} inflow`;

    const bill = await prisma.bill.create({
      data: {
        billNumber: `SAMPLE-INF-${String(i + 1).padStart(3, "0")}`,
        customerId: customer.id,
        itemsNote: note,
        notes: note,
        totalAmount: p.total,
        subtotal: p.total,
        billDate: today,
        dueDate: addDays(today, p.offset),
        status: "SENT",
        termsDays: 15,
        payments:
          p.paid > 0
            ? {
                create: {
                  amount: p.paid,
                  method: "CASH",
                  paidOn: today,
                },
              }
            : undefined,
      },
    });

    console.log(
      `id=${bill.id} customer=${customer.name} week=W${p.week} total=${p.total} paid=${p.paid}`,
    );
  }

  // Same query and buildForecast call as app/forecast/page.tsx.
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

  const result = buildForecast({
    today: new Date(),
    openingCash: OPENING_CASH,
    bills,
    expenses,
  });

  console.log("\nForecast per week:");
  for (const b of result.buckets) {
    console.log(
      `${b.label} | inflow=${b.inflow} | outflow=${b.outflow} | net=${b.net} | closingCash=${b.closingCash}`,
    );
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());

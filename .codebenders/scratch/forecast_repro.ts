// REPRODUCE scratch: runs the real lib/forecast.ts buildForecast on the
// prisma/seed.ts sample data, mapped the same way app/forecast/page.tsx does.
// Run from project root:  npx tsx .codebenders/scratch/forecast_repro.ts
import { buildForecast, type ForecastBill, type ForecastExpense } from "../../lib/forecast";
import { getBalance, sumPayments } from "../../lib/billStatus";
import { addDays, startOfDay } from "../../lib/dates";

const today = new Date();
const t0 = startOfDay(today);

// Sample bills copied from prisma/seed.ts (customer name, status, dueOffset,
// promisedOffset, total, discount, payments). Totals computed as in seed.ts.
type B = { name: string; status: string; dueOffset: number; promisedOffset?: number; total: number; paid: number };
const seedBills: B[] = [
  { name: "Sunita Devi", status: "SENT", dueOffset: 10, total: 250 + 5 * 190, paid: 0 },
  { name: "Rakesh Yadav", status: "SENT", dueOffset: 10, total: 450, paid: 0 },
  { name: "Priya Sharma", status: "SENT", dueOffset: 3, promisedOffset: 4, total: 20 * 400, paid: 0 },
  { name: "Mohammed Irfan", status: "SENT", dueOffset: 3, total: 2 * 225 + 200, paid: 0 },
  { name: "Anjali Verma", status: "SENT", dueOffset: -3, total: 2300, paid: 0 },
  { name: "Suresh Patel", status: "SENT", dueOffset: -3, total: 750, paid: 0 },
  { name: "Kavita Singh", status: "SENT", dueOffset: -12, promisedOffset: -2, total: 2 * 850 + 4 * 425, paid: 0 },
  { name: "Vijay Kumar", status: "SENT", dueOffset: -12, total: 980, paid: 0 },
  { name: "Neha Gupta", status: "SENT", dueOffset: -35, total: 10 * 1250 - 500, paid: 0 },
  { name: "Arun Mishra", status: "SENT", dueOffset: -40, total: 300, paid: 0 },
  { name: "Sunita Devi", status: "SENT", dueOffset: 7, total: 5500, paid: 2000 },
  { name: "Priya Sharma", status: "SENT", dueOffset: 7, total: 5500, paid: 2000 },
  { name: "Mohammed Irfan", status: "SENT", dueOffset: -5, total: 4 * 700 + 4 * 350, paid: 1000 },
  { name: "Anjali Verma", status: "SENT", dueOffset: -20, total: 6000, paid: 3000 },
  { name: "Suresh Patel", status: "SENT", dueOffset: 14, total: 1800, paid: 1800 },
  { name: "Kavita Singh", status: "SENT", dueOffset: -2, total: 900, paid: 900 },
  { name: "Vijay Kumar", status: "SENT", dueOffset: 20, total: 2750, paid: 2750 },
  { name: "Neha Gupta", status: "SENT", dueOffset: 0, total: 500, paid: 0 },
];

const bills: ForecastBill[] = seedBills.map((b, i) => ({
  id: i + 1,
  customerId: i + 1,
  customerName: b.name,
  balance: getBalance(b.total, sumPayments([{ amount: b.paid }])),
  dueDate: addDays(t0, b.dueOffset),
  promisedDate: b.promisedOffset !== undefined ? addDays(t0, b.promisedOffset) : null,
  status: b.status,
}));

const expenseSeeds: [string, string, number, number][] = [
  ["Shop rent", "RENT", 12000, 5],
  ["Shop rent", "RENT", 12000, 35],
  ["Shop rent", "RENT", 12000, 65],
  ["Shop rent (last month)", "RENT", 12000, -3],
  ["Staff salary (Ravi)", "SALARY", 9000, 10],
  ["Staff salary (Meena)", "SALARY", 9000, 10],
  ["Staff salary (Ravi)", "SALARY", 9000, 40],
  ["Wholesale stock order", "SUPPLIER", 8500, 18],
  ["Packaging supplier", "SUPPLIER", 3200, 50],
  ["Electricity", "UTILITY", 1800, 12],
  ["Shop insurance", "OTHER", 4000, 80],
];
const expenses: ForecastExpense[] = expenseSeeds.map(([title, category, amount, off], i) => ({
  id: i + 1,
  title,
  category,
  amount,
  dueDate: addDays(t0, off),
  paidOn: null,
}));

const result = buildForecast({ today, openingCash: 25000, bills, expenses });

console.log("bills balances:", bills.map((b) => `${b.customerName}=${b.balance}`).join(", "));
for (const b of result.buckets) {
  console.log(`${b.label}\tinflow=${b.inflow}\toutflow=${b.outflow}\tnet=${b.net}\tclosing=${b.closingCash}`);
}
const nonZeroIn = result.buckets.map((b) => b.inflow).filter((v) => v > 0);
const maxIn = Math.max(...nonZeroIn);
const sorted = [...nonZeroIn].sort((a, b) => b - a);
console.log("max inflow:", maxIn, "second-largest non-zero inflow:", sorted[1]);
console.log("ratio max/second:", sorted[1] ? (maxIn / sorted[1]).toFixed(3) : "n/a");

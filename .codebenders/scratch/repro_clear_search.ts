import { parseStatusParam, filterRows, DEFAULT_FILTER, type UdhaarRow } from "../../lib/udhaarList";
const rows: UdhaarRow[] = [
  { id: 1, billNumber: "B1", customerName: "Ram", totalAmount: 100, dueDate: new Date("2000-01-01"), payments: [], paid: 0, balance: 100, status: "OVERDUE", daysOverdue: 5 },
  { id: 2, billNumber: "B2", customerName: "Sita", totalAmount: 100, dueDate: new Date("2999-01-01"), payments: [], paid: 0, balance: 100, status: "UNPAID", daysOverdue: 0 },
  { id: 3, billNumber: "B3", customerName: "Gita", totalAmount: 100, dueDate: new Date("2999-01-01"), payments: [{ amount: 100 }], paid: 100, balance: 0, status: "PAID", daysOverdue: 0 },
];
// Mirrors app/page.tsx:77-79 exactly (the expression itself is not exported)
function pageStatuses(params: { q?: string; status?: string }) {
  const query = (params.q ?? "").trim();
  return { query, statuses: parseStatusParam(params.status ?? (query ? "ALL" : undefined)) };
}
for (const p of [{ q: "Ram" }, { q: "" }, { q: "", status: "ALL" }, { q: "Ram", status: "ALL" }]) {
  const { query, statuses } = pageStatuses(p);
  const shown = filterRows(rows, statuses, query).map((r) => r.customerName);
  console.log(JSON.stringify(p), "-> query=", JSON.stringify(query), "statuses=", JSON.stringify(statuses), "shown=", JSON.stringify(shown));
}
console.log("DEFAULT_FILTER=", JSON.stringify(DEFAULT_FILTER));

"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const money = (n: number) => (n < 0 ? "-" : "") + "\u20B9" + Math.abs(n).toLocaleString("en-IN");

type StatusKey = "PAID" | "PARTIAL" | "UNPAID";

const SLICES: { key: StatusKey; name: string; color: string; icon: string }[] = [
  { key: "PAID", name: "Paid", color: "#16a34a", icon: "\u2705" },
  { key: "PARTIAL", name: "Partially paid", color: "#f59e0b", icon: "\uD83D\uDFE1" },
  { key: "UNPAID", name: "Unpaid", color: "#dc2626", icon: "\u274C" },
];

interface StatusPieProps {
  counts: Record<StatusKey, number>;
  amounts: Record<StatusKey, number>;
  total: number;
  pieFilter: StatusKey | null;
  onPick: (key: StatusKey) => void;
}

export default function StatusPie({ counts, amounts, total, pieFilter, onPick }: StatusPieProps) {
  const pieData = SLICES.map((s) => ({ ...s, value: counts[s.key] })).filter((s) => s.value > 0);

  const detail: Record<StatusKey, string> = {
    PAID: `${counts.PAID} invoices, ${money(amounts.PAID)} collected`,
    PARTIAL: `${counts.PARTIAL} invoices, ${money(amounts.PARTIAL)} still to collect`,
    UNPAID: `${counts.UNPAID} invoices, ${money(amounts.UNPAID)} left to collect`,
  };

  const activeName = SLICES.find((s) => s.key === pieFilter)?.name;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="relative">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
              onClick={(entry: { key: StatusKey }) => onPick(entry.key)}
            >
              {pieData.map((s) => (
                <Cell
                  key={s.key}
                  fill={s.color}
                  opacity={pieFilter && pieFilter !== s.key ? 0.35 : 1}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{total}</span>
          <span className="text-xs text-gray-600">invoices</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {SLICES.map((s) => (
          <button
            key={s.key}
            type="button"
            aria-pressed={pieFilter === s.key}
            onClick={() => onPick(s.key)}
            className={`flex min-h-11 w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 ${
              pieFilter === s.key ? "border-indigo-300 bg-indigo-50" : "border-gray-200 bg-white"
            }`}
          >
            <span aria-hidden="true">{s.icon}</span>
            <span>
              <span className="font-bold text-gray-900">{s.name}</span>
              <span className="block text-sm text-gray-700">{detail[s.key]}</span>
            </span>
          </button>
        ))}
      </div>

      {pieFilter && (
        <p className="mt-2 text-sm text-gray-600">Showing: {activeName}. Tap again to clear.</p>
      )}
    </div>
  );
}

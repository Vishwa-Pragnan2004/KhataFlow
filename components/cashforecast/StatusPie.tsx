"use client";

import { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pieData = SLICES.map((s) => ({ ...s, value: counts[s.key] })).filter((s) => s.value > 0);

  const detail: Record<StatusKey, string> = {
    PAID: `${counts.PAID} invoices, ${money(amounts.PAID)} collected`,
    PARTIAL: `${counts.PARTIAL} invoices, ${money(amounts.PARTIAL)} still to collect`,
    UNPAID: `${counts.UNPAID} invoices, ${money(amounts.UNPAID)} left to collect`,
  };

  const activeName = SLICES.find((s) => s.key === pieFilter)?.name;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="relative mx-auto h-[220px] w-full min-w-0 max-w-[280px]">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={220}>
            <PieChart>
              <Pie
                data={pieData.length > 0 ? pieData : [{ name: "No invoices", value: 1, key: "EMPTY" as StatusKey, color: "#e2e8f0", icon: "" }]}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={pieData.length > 1 ? 3 : 0}
                onClick={(entry: { key?: StatusKey }) => {
                  if (entry?.key && entry.key !== ("EMPTY" as StatusKey)) {
                    onPick(entry.key);
                  }
                }}
              >
                {pieData.length > 0 ? (
                  pieData.map((s) => (
                    <Cell
                      key={s.key}
                      fill={s.color}
                      opacity={pieFilter && pieFilter !== s.key ? 0.35 : 1}
                      stroke={pieFilter === s.key ? "#1e1b4b" : "#ffffff"}
                      strokeWidth={pieFilter === s.key ? 2 : 1}
                    />
                  ))
                ) : (
                  <Cell key="empty" fill="#e2e8f0" stroke="none" />
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
            Loading chart...
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{total}</span>
          <span className="text-xs font-medium text-gray-500">invoices</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {SLICES.map((s) => (
          <button
            key={s.key}
            type="button"
            aria-pressed={pieFilter === s.key}
            onClick={() => onPick(s.key)}
            className={`flex min-h-11 w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 ${
              pieFilter === s.key
                ? "border-indigo-400 bg-indigo-50 font-medium shadow-sm"
                : "border-gray-200 bg-white hover:bg-slate-50"
            }`}
          >
            <span aria-hidden="true" className="text-base">{s.icon}</span>
            <div className="flex-1">
              <span className="font-semibold text-gray-900">{s.name}</span>
              <span className="block text-xs text-gray-600">{detail[s.key]}</span>
            </div>
          </button>
        ))}
      </div>

      {pieFilter && (
        <p className="mt-3 text-center text-xs text-gray-500">
          Filtered by <span className="font-semibold text-gray-700">{activeName}</span>. Tap again to clear filter.
        </p>
      )}
    </div>
  );
}

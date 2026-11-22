"use client";

import {
  ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ReferenceLine, ReferenceDot, ResponsiveContainer,
} from "recharts";
import { dayToDate } from "@/lib/cashforecast/forecast";

const money = (n: number) => (n < 0 ? "-" : "") + "\u20B9" + Math.abs(n).toLocaleString("en-IN");

interface ForecastPoint {
  day: number;
  balance: number;
}

interface ForecastChartProps {
  points: ForecastPoint[];
  scenarioPoints: ForecastPoint[] | null;
  windowDays: number;
}

export default function ForecastChart({ points, scenarioPoints, windowDays }: ForecastChartProps) {
  const data = points.map((p, i) => ({
    day: p.day,
    baseline: p.balance,
    scenario: scenarioPoints ? scenarioPoints[i].balance : null,
    belowZero: Math.min(p.balance, 0),
  }));

  const ticks = [...new Set([0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(f * (windowDays - 1))))];

  const source = scenarioPoints || points;
  const low = source.reduce((m, p) => (p.balance < m.balance ? p : m), source[0]);

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            type="number"
            domain={[0, windowDays - 1]}
            ticks={ticks}
            tickFormatter={(d: number) => dayToDate(d)}
          />
          <YAxis
            width={60}
            tickFormatter={(v: number) => (v === 0 ? "\u20B90" : (v < 0 ? "-\u20B9" : "\u20B9") + (Math.abs(v) >= 1000 ? (Math.abs(v) / 1000).toFixed(0) + "k" : Math.abs(v)))}
          />
          <Tooltip
            labelFormatter={(d: unknown) => dayToDate(d as number)}
            formatter={(value, name) => [money(Number(value ?? 0)), String(name ?? "")] as [string, string]}
          />
          <Area dataKey="belowZero" fill="#fecaca" stroke="none" name="Below zero" />
          <Line dataKey="baseline" name="Without ticks" stroke="#4f46e5" strokeWidth={2.5} dot={false} />
          {scenarioPoints && (
            <Line
              dataKey="scenario"
              name="If ticked people pay"
              stroke="#16a34a"
              strokeWidth={2.5}
              strokeDasharray="6 4"
              dot={false}
            />
          )}
          <ReferenceLine y={0} stroke="#6b7280" strokeDasharray="4 4" />
          <ReferenceDot
            x={low.day}
            y={low.balance}
            r={6}
            fill="#dc2626"
            stroke="#fff"
            label={{ value: money(low.balance), position: "top", fill: "#dc2626", fontSize: 12 }}
          />
          <Legend verticalAlign="bottom" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

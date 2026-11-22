"use client";

import { dayToDate } from "@/lib/cashforecast/forecast";

const money = (n: number) => (n < 0 ? "-" : "") + "\u20B9" + Math.abs(n).toLocaleString("en-IN");

const icon = (s: Scenario) => (s.safe ? "\u2705" : "\u274C");
const short = (s: Scenario) =>
  s.safe ? "safe" : s.firstNegative ? `short on ${dayToDate(s.firstNegative.day)}` : "short";

function joinNames(fullNames: string[]) {
  const firsts = fullNames.map((n) => n.split(" ")[0]);
  const n = firsts.length;
  if (n === 0) return "";
  const top = firsts.slice(0, 3);
  if (n > 3) return `${top.join(", ")} and ${n - 3} others`;
  if (top.length === 1) return top[0];
  return `${top.slice(0, -1).join(", ")} and ${top[top.length - 1]}`;
}

export interface Scenario {
  safe: boolean;
  lowest: { day: number; balance: number };
  firstNegative: { day: number } | null;
}

interface VerdictProps {
  windowDays: number;
  chosen: Scenario;
  all: Record<30 | 60 | 90, Scenario>;
  tickedNames: string[];
  hasTicked: boolean;
}

export default function Verdict({ windowDays, chosen, all, tickedNames, hasTicked }: VerdictProps) {
  const safe = chosen.safe;
  const banner = safe
    ? "bg-emerald-50 border-emerald-300 text-emerald-900"
    : "bg-red-50 border-red-300 text-red-900";

  const shortOn = chosen.firstNegative ? ` on ${dayToDate(chosen.firstNegative.day)}` : "";

  const mainText = safe
    ? `You are safe for the next ${windowDays} days. Lowest cash: ${money(chosen.lowest.balance)} on ${dayToDate(chosen.lowest.day)}.`
    : `Cash runs short${shortOn}. Lowest: ${money(chosen.lowest.balance)} on ${dayToDate(chosen.lowest.day)}.`;

  const namesText = joinNames(tickedNames);
  const verdictSentence = safe
    ? `you are safe for the next ${windowDays} days`
    : `cash still runs short${shortOn}`;

  return (
    <div role="status" className={`rounded-2xl border p-4 ${banner}`}>
      <p className="text-lg font-semibold">
        <span aria-hidden="true">{safe ? "\u2705" : "\u274C"}</span> {mainText}
      </p>

      {hasTicked && (
        <p className="mt-2 text-sm">
          {`30 days: ${icon(all[30])} ${short(all[30])} \u00B7 60 days: ${icon(all[60])} ${short(all[60])} \u00B7 90 days: ${icon(all[90])} ${short(all[90])}`}
        </p>
      )}

      {hasTicked && namesText && (
        <p className="mt-1 text-sm">{`If ${namesText} pay you, then ${verdictSentence}.`}</p>
      )}
    </div>
  );
}

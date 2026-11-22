"use client";

import { useMemo, useState } from "react";
import {
  remaining,
  invoiceStatus,
  runForecast,
  summarize,
  type Customer,
  type Invoice,
  type Bill,
  type Settings,
} from "@/lib/cashforecast/forecast";
import ForecastChart from "./ForecastChart";
import StatusPie from "./StatusPie";
import WhatIfList from "./WhatIfList";
import Verdict from "./Verdict";

type Status = "PAID" | "PARTIAL" | "UNPAID";

type InvoiceRef = {
  id: number;
  billNumber: string;
  customerName: string;
  customerPhone: string;
};

export type CashForecastInput = {
  customers: Customer[];
  invoices: Invoice[];
  bills: Bill[];
  settings: Settings;
  invoiceRefs: InvoiceRef[];
};

type OpenRow = {
  id: number;
  customerName: string;
  status: Status;
  owed: number;
  daysLate: number;
};

const rupees = (n: number) => "₹" + n.toLocaleString("en-IN");

const WINDOWS = [30, 60, 90];

export default function CashForecastPanel({ input }: { input: CashForecastInput }) {
  const { customers, invoices, bills, settings, invoiceRefs } = input;

  const [windowDays, setWindowDays] = useState(90);
  const [selected, setSelected] = useState<number[]>([]);
  const [pieFilter, setPieFilter] = useState<Status | null>(null);

  const baseline90 = useMemo(
    () =>
      runForecast({
        settings,
        customers,
        invoices,
        bills,
        days: 90,
        paidNowIds: [],
      }),
    [settings, customers, invoices, bills]
  );

  const scenario90 = useMemo(
    () =>
      runForecast({
        settings,
        customers,
        invoices,
        bills,
        days: 90,
        paidNowIds: selected,
      }),
    [settings, customers, invoices, bills, selected]
  );

  const hasTicked = selected.length > 0;
  const scenarioSource = hasTicked ? scenario90 : baseline90;
  const points = useMemo(() => baseline90.slice(0, windowDays), [baseline90, windowDays]);
  const scenarioPoints = useMemo(
    () => (hasTicked ? scenario90.slice(0, windowDays) : null),
    [hasTicked, scenario90, windowDays]
  );

  const chosen = useMemo(
    () => summarize(scenarioSource, windowDays),
    [scenarioSource, windowDays]
  );
  const all = useMemo(
    () => ({
      30: summarize(scenarioSource, 30),
      60: summarize(scenarioSource, 60),
      90: summarize(scenarioSource, 90),
    }),
    [scenarioSource]
  );

  const openInvoices = useMemo<OpenRow[]>(
    () =>
      invoices
        .filter((inv) => remaining(inv) > 0)
        .map((inv) => ({
          id: inv.id,
          customerName: invoiceRefs.find((r) => r.id === inv.id)?.customerName ?? "",
          status: invoiceStatus(inv),
          owed: remaining(inv),
          daysLate: -inv.due,
        })),
    [invoices, invoiceRefs]
  );

  const items = useMemo(() => {
    let rows: OpenRow[];
    if (pieFilter === "PAID") rows = [];
    else if (pieFilter === "PARTIAL" || pieFilter === "UNPAID")
      rows = openInvoices.filter((r) => r.status === pieFilter);
    else rows = openInvoices;
    return [...rows].sort((a, b) => b.daysLate - a.daysLate);
  }, [openInvoices, pieFilter]);

  const counts = useMemo(() => {
    const c: Record<Status, number> = { PAID: 0, PARTIAL: 0, UNPAID: 0 };
    invoices.forEach((inv) => {
      c[invoiceStatus(inv)] += 1;
    });
    return c;
  }, [invoices]);

  const amounts = useMemo(() => {
    const a: Record<Status, number> = { PAID: 0, PARTIAL: 0, UNPAID: 0 };
    invoices.forEach((inv) => {
      const s = invoiceStatus(inv);
      if (s === "PAID") a.PAID += inv.total;
      else a[s] += remaining(inv);
    });
    return a;
  }, [invoices]);

  const total = invoices.length;

  const ticked = useMemo(
    () => openInvoices.filter((r) => selected.includes(r.id)),
    [openInvoices, selected]
  );
  const tickedTotal = useMemo(() => ticked.reduce((s, r) => s + r.owed, 0), [ticked]);
  const tickedCount = useMemo(
    () => new Set(ticked.map((r) => r.customerName)).size,
    [ticked]
  );
  const tickedNames = useMemo(
    () => [...new Set(ticked.map((r) => r.customerName))],
    [ticked]
  );

  const comingIn = useMemo(() => openInvoices.reduce((s, r) => s + r.owed, 0), [openInvoices]);
  const billsNext30 = useMemo(
    () => bills.filter((b) => b.d < 30).reduce((s, b) => s + b.amount, 0),
    [bills]
  );

  const toggle = (id: number) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const tickOverdue = () => {
    const ids = items.filter((r) => r.daysLate > 0).map((r) => r.id);
    setSelected((prev) => Array.from(new Set([...prev, ...ids])));
  };

  const tickTop3 = () => {
    const ids = [...items]
      .sort((a, b) => b.owed - a.owed)
      .slice(0, 3)
      .map((r) => r.id);
    setSelected((prev) => Array.from(new Set([...prev, ...ids])));
  };

  const clear = () => setSelected([]);

  const pick = (key: Status) => setPieFilter((prev) => (prev === key ? null : key));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        <header>
          <h2 className="text-2xl font-bold text-slate-900">Cash forecast</h2>
          <p className="text-slate-600">Sri Laxmi Stores</p>
        </header>

        <div className="grid grid-cols-3 gap-2">
          {WINDOWS.map((d) => {
            const active = windowDays === d;
            return (
              <button
                key={d}
                type="button"
                aria-pressed={active}
                onClick={() => setWindowDays(d)}
                className={
                  "min-h-11 rounded-xl px-3 font-medium " +
                  (active ? "bg-indigo-600 text-white" : "bg-white border text-slate-700")
                }
              >
                {d} days
              </button>
            );
          })}
        </div>

        <Verdict
          windowDays={windowDays}
          chosen={chosen}
          all={all}
          tickedNames={tickedNames}
          hasTicked={hasTicked}
        />

        <div className="bg-white rounded-2xl p-3 shadow-sm">
          <h2 className="text-base font-semibold text-slate-800 mb-2">
            Cash over the next {windowDays} days
          </h2>
          <ForecastChart points={points} scenarioPoints={scenarioPoints} windowDays={windowDays} />
        </div>

        <div className="bg-white rounded-2xl p-3 shadow-sm">
          <h2 className="text-base font-semibold text-slate-800 mb-2">Invoices by status</h2>
          <StatusPie
            counts={counts}
            amounts={amounts}
            total={total}
            pieFilter={pieFilter}
            onPick={pick}
          />
        </div>

        {openInvoices.length === 0 ? (
          <div className="bg-white rounded-2xl p-4 shadow-sm text-slate-700">
            No money is owed to you right now.
          </div>
        ) : (
          <WhatIfList
            items={items}
            selected={selected}
            pieFilter={pieFilter}
            onToggle={(id) => toggle(Number(id))}
            onTickOverdue={tickOverdue}
            onTickTop3={tickTop3}
            onClear={clear}
            tickedTotal={tickedTotal}
            tickedCount={tickedCount}
          />
        )}

        <div className="rounded-2xl bg-white p-4 text-sm text-slate-700">
          Cash today {rupees(settings.openingBalance)} · Coming in (unpaid invoices){" "}
          {rupees(comingIn)} · Bills in next 30 days {rupees(billsNext30)}
        </div>
      </div>
    </div>
  );
}

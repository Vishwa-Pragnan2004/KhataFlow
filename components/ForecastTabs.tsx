"use client";

import React, { useState } from "react";

type TabKey = "overview" | "cashForecast";

const TABS: { key: TabKey; label: string; id: string }[] = [
  { key: "overview", label: "Overview", id: "forecast-tab-overview" },
  { key: "cashForecast", label: "Cash forecast", id: "forecast-tab-cash" },
];

export default function ForecastTabs({
  overview,
  cashForecast,
}: {
  overview: React.ReactNode;
  cashForecast: React.ReactNode;
}) {
  const [active, setActive] = useState<TabKey>("overview");

  const panelId = "forecast-tabpanel";
  const activeTab = TABS.find((t) => t.key === active)!;

  return (
    <div className="space-y-5">
      <div role="tablist" aria-label="Forecast views" className="grid grid-cols-2 gap-2">
        {TABS.map((t) => {
          const selected = active === t.key;
          return (
            <button
              key={t.key}
              id={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.key)}
              className={
                "min-h-[44px] rounded-xl px-3 font-medium focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 " +
                (selected ? "bg-indigo-600 text-white" : "bg-white border text-slate-700")
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={panelId} aria-labelledby={activeTab.id}>
        {active === "overview" ? overview : cashForecast}
      </div>
    </div>
  );
}

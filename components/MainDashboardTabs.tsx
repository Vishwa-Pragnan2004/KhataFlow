"use client";

import { useState } from "react";

export type DashboardTab = "receivables" | "forecast";

interface MainDashboardTabsProps {
  initialTab?: DashboardTab;
  receivablesView: React.ReactNode;
  forecastView: React.ReactNode;
}

export default function MainDashboardTabs({
  initialTab = "receivables",
  receivablesView,
  forecastView,
}: MainDashboardTabsProps) {
  const [activeTab, setActiveTab] = useState<DashboardTab>(initialTab);

  const switchTab = (tab: DashboardTab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (tab === "forecast") {
        url.searchParams.set("tab", "forecast");
      } else {
        url.searchParams.delete("tab");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-4 sm:p-6">
      {/* Top-Level Navigation Tabs */}
      <nav
        role="tablist"
        aria-label="Main dashboard views"
        className="flex rounded-2xl border border-stone-200 bg-stone-100 p-1.5 shadow-inner"
      >
        <button
          type="button"
          role="tab"
          id="tab-receivables"
          aria-selected={activeTab === "receivables"}
          aria-controls="panel-receivables"
          tabIndex={activeTab === "receivables" ? 0 : -1}
          onClick={() => switchTab("receivables")}
          className={
            "flex-1 rounded-xl py-3 text-center text-sm font-semibold transition-all sm:text-base " +
            (activeTab === "receivables"
              ? "bg-white text-stone-900 shadow-sm"
              : "text-stone-600 hover:text-stone-900")
          }
        >
          Udhaar Receivables
        </button>
        <button
          type="button"
          role="tab"
          id="tab-forecast"
          aria-selected={activeTab === "forecast"}
          aria-controls="panel-forecast"
          tabIndex={activeTab === "forecast" ? 0 : -1}
          onClick={() => switchTab("forecast")}
          className={
            "flex-1 rounded-xl py-3 text-center text-sm font-semibold transition-all sm:text-base " +
            (activeTab === "forecast"
              ? "bg-white text-stone-900 shadow-sm"
              : "text-stone-600 hover:text-stone-900")
          }
        >
          Cash Forecast (Nakad Anumaan)
        </button>
      </nav>

      {/* Active Tab View */}
      <div
        role="tabpanel"
        id={activeTab === "receivables" ? "panel-receivables" : "panel-forecast"}
        aria-labelledby={activeTab === "receivables" ? "tab-receivables" : "tab-forecast"}
        className="w-full"
      >
        {activeTab === "receivables" ? receivablesView : forecastView}
      </div>
    </main>
  );
}

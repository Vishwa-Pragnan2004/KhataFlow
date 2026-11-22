import { describe, it, expect } from "vitest";
import {
  buildForecast,
  compareScenario,
  suggestChaseList,
  type ForecastBill,
  type ForecastExpense,
} from "../lib/forecast";

// Fixed "today" so results never depend on the real clock.
const today = new Date(2026, 0, 10);

function bill(overrides: Partial<ForecastBill> & { id: number }): ForecastBill {
  return {
    customerId: 1,
    customerName: "Customer",
    balance: 1000,
    dueDate: new Date(2026, 0, 25),
    promisedDate: null,
    status: "SENT",
    ...overrides,
  };
}

function expense(overrides: Partial<ForecastExpense> & { id: number }): ForecastExpense {
  return {
    title: "Expense",
    category: "General",
    amount: 1000,
    dueDate: new Date(2026, 0, 20),
    paidOn: null,
    ...overrides,
  };
}

describe("buildForecast", () => {
  it("with no bills or expenses, closing cash equals opening cash and there is no negative date", () => {
    const result = buildForecast({
      today,
      openingCash: 1000,
      bills: [],
      expenses: [],
    });

    expect(result.closingCash90).toEqual(1000);
    expect(result.firstNegativeDate).toBeNull();
  });

  it("counts a single open bill with a future due date in the 30-day inflow", () => {
    const result = buildForecast({
      today,
      openingCash: 0,
      bills: [bill({ id: 1, balance: 5000, dueDate: new Date(2026, 0, 25) })],
      expenses: [],
    });

    expect(result.inflow30).toEqual(5000);
    expect(result.inflowItems[0].expectedDate).toEqual(new Date(2026, 0, 25));
  });

  it("moves an overdue bill to seven days from today", () => {
    const result = buildForecast({
      today,
      openingCash: 0,
      bills: [bill({ id: 1, balance: 4000, dueDate: new Date(2026, 0, 1) })],
      expenses: [],
    });

    expect(result.inflowItems[0].expectedDate).toEqual(new Date(2026, 0, 17));
  });

  it("applies a customer delay scenario to that customer's bill only", () => {
    const input = {
      today,
      openingCash: 0,
      bills: [bill({ id: 1, customerId: 1, balance: 5000, dueDate: new Date(2026, 0, 20) })],
      expenses: [],
    };

    const comparison = compareScenario(input, { customerId: 1, delayDays: 15 });

    expect(comparison.scenario.inflowItems[0].expectedDate).toEqual(new Date(2026, 1, 4));
    expect(comparison.base.inflowItems[0].expectedDate).toEqual(new Date(2026, 0, 20));
    // Cash still arrives inside the 90-day window either way.
    expect(comparison.closingCash90Change).toEqual(0);
  });

  it("counts an overdue unpaid expense on today's date", () => {
    const result = buildForecast({
      today,
      openingCash: 0,
      bills: [],
      expenses: [expense({ id: 1, amount: 12000, dueDate: new Date(2026, 0, 7), paidOn: null })],
    });

    expect(result.outflowItems[0].date).toEqual(new Date(2026, 0, 10));
    expect(result.outflow30).toEqual(12000);
  });

  it("reports negative cash and the lowest balance when an expense exceeds opening cash", () => {
    const result = buildForecast({
      today,
      openingCash: 1000,
      bills: [],
      expenses: [expense({ id: 1, amount: 5000, dueDate: new Date(2026, 0, 15), paidOn: null })],
    });

    expect(result.lowestCash).toEqual(-4000);
    // The engine reports negative cash at the start of the weekly bucket
    // (day 0 = today) that contains the expense, not on the expense date itself.
    expect(result.firstNegativeDate).toEqual(new Date(2026, 0, 10));
  });
});

describe("suggestChaseList", () => {
  it("lists only overdue bills, with days overdue and the chase action", () => {
    const items = suggestChaseList(
      [
        bill({ id: 1, customerName: "Late Payer", balance: 3000, dueDate: new Date(2026, 0, 3) }),
        bill({ id: 2, customerName: "Future Payer", balance: 2000, dueDate: new Date(2026, 0, 20) }),
      ],
      today,
    );

    expect(items).toHaveLength(1);
    expect(items[0].daysOverdue).toEqual(7);
    expect(items[0].suggestedAction).toEqual("Chase today");
  });
});

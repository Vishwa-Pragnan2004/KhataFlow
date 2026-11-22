import type { Bill, Customer, Invoice, Settings } from './forecast';

// Shape of one bill row as loaded from the database (no Prisma import here).
export interface BillRow {
  id: number;
  billNumber: string;
  totalAmount: number;
  dueDate: Date;
  customer: { name: string; whatsappNumber: string };
  payments: { amount: number }[];
}

export interface InvoiceRef {
  id: number;
  billNumber: string;
  customerName: string;
  customerPhone: string;
}

// These are assumptions, not stored in the database; tune them.
const DEFAULT_DELAY_DAYS = 3;
const DEFAULT_CONF = 0.9;

// KhataFlow has no cash-balance table, so these are sample settings to replace.
const OPENING_BALANCE = 18000;
const AVG_DAILY_CASH_SALES = 1250;

const MS_PER_DAY = 86400000;

export function toForecastInput(args: { bills: BillRow[]; todayStart: Date }): {
  customers: Customer[];
  invoices: Invoice[];
  bills: Bill[];
  settings: Settings;
  invoiceRefs: InvoiceRef[];
} {
  const { bills: rows, todayStart } = args;

  // One customer per distinct name, numeric ids 1..N in first-appearance order.
  const customers: Customer[] = [];
  const customerIdByName = new Map<string, number>();
  for (const row of rows) {
    const name = row.customer.name;
    if (!customerIdByName.has(name)) {
      const id = customers.length + 1;
      customerIdByName.set(name, id);
      customers.push({ id, name, delay: DEFAULT_DELAY_DAYS, conf: DEFAULT_CONF });
    }
  }

  const invoices: Invoice[] = [];
  const invoiceRefs: InvoiceRef[] = [];
  rows.forEach((row, index) => {
    const id = index + 1;
    const paid = row.payments.reduce((sum, p) => sum + p.amount, 0);
    invoices.push({
      id,
      customerId: customerIdByName.get(row.customer.name) as number,
      total: row.totalAmount,
      paid,
      due: Math.round((row.dueDate.getTime() - todayStart.getTime()) / MS_PER_DAY),
    });
    invoiceRefs.push({
      id,
      billNumber: row.billNumber,
      customerName: row.customer.name,
      customerPhone: row.customer.whatsappNumber,
    });
  });

  // KhataFlow has no outgoing-bill model, so there are no outgoing bills.
  const bills: Bill[] = [];

  const settings: Settings = {
    openingBalance: OPENING_BALANCE,
    avgDailyCashSales: AVG_DAILY_CASH_SALES,
  };

  return { customers, invoices, bills, settings, invoiceRefs };
}

import { getBillStatus } from "./billStatus";
import { startOfDay } from "./dates";
import { daysOverdue } from "./udhaarList";

export type StoredInvoiceStatus = "DRAFT" | "SENT" | "CANCELLED";

export type DisplayStatus = "DRAFT" | "SENT" | "PARTIALLY_PAID" | "OVERDUE" | "PAID" | "CANCELLED";

export type InvoiceStatusInput = {
  status: StoredInvoiceStatus;
  totalAmount: number;
  dueDate: Date;
  payments: { amount: number }[];
};

export type InvoiceDerived = {
  display: DisplayStatus;
  paidAmount: number;
  balance: number;
  daysOverdue: number;
  daysUntilDue: number;
};

export function deriveInvoiceStatus(input: InvoiceStatusInput, today: Date): InvoiceDerived {
  const info = getBillStatus(
    { totalAmount: input.totalAmount, dueDate: input.dueDate, payments: input.payments },
    today,
  );
  const paidAmount = info.paid;
  const balance = info.balance;

  const dueStart = startOfDay(input.dueDate).getTime();
  const todayStart = startOfDay(today).getTime();

  let display: DisplayStatus;
  if (input.status === "CANCELLED") {
    display = "CANCELLED";
  } else if (input.status === "DRAFT") {
    display = "DRAFT";
  } else if (balance <= 0) {
    display = "PAID";
  } else if (dueStart < todayStart) {
    display = "OVERDUE";
  } else if (paidAmount > 0) {
    display = "PARTIALLY_PAID";
  } else {
    display = "SENT";
  }

  const overdueDays = display === "OVERDUE" ? daysOverdue(input.dueDate, today) : 0;
  const daysUntilDue = Math.max(0, Math.round((dueStart - todayStart) / 86400000));

  return {
    display,
    paidAmount,
    balance,
    daysOverdue: overdueDays,
    daysUntilDue,
  };
}

export type InvoiceActions = {
  canEdit: boolean;
  editMode: "FREE" | "RESEND" | "LOCKED";
  canDelete: boolean;
  canMarkSent: boolean;
  canRecordPayment: boolean;
  canCancel: boolean;
  cancelBlockedReason: string | null;
};

export function allowedActions(display: DisplayStatus, paidAmount: number): InvoiceActions {
  if (display === "DRAFT") {
    return {
      canEdit: true,
      editMode: "FREE",
      canDelete: true,
      canMarkSent: true,
      canRecordPayment: false,
      canCancel: true,
      cancelBlockedReason: null,
    };
  }

  if (display === "SENT" || display === "OVERDUE" || display === "PARTIALLY_PAID") {
    const hasPayments = paidAmount > 0;
    return {
      canEdit: true,
      editMode: "RESEND",
      canDelete: false,
      canMarkSent: false,
      canRecordPayment: true,
      canCancel: !hasPayments,
      cancelBlockedReason: hasPayments
        ? "Payments are recorded on this invoice, so it cannot be cancelled."
        : null,
    };
  }

  return {
    canEdit: false,
    editMode: "LOCKED",
    canDelete: false,
    canMarkSent: false,
    canRecordPayment: false,
    canCancel: false,
    cancelBlockedReason:
      display === "PAID" ? "This invoice is fully paid, so it is locked." : "This invoice is cancelled.",
  };
}

export function statusAfterSend(current: StoredInvoiceStatus): StoredInvoiceStatus {
  return current === "DRAFT" ? "SENT" : current;
}

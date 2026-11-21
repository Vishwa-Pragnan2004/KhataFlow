module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/invoice-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40559e7268b519a975c694f3195fb18aaa1b7b4aae",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$invoice$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBillDetails"],
    "40b69ca4133e3990a1baef93d4b26a821dd419562c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordPayment"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$invoice$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/app/invoice-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$invoice$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/invoice-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/invoice-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$invoice$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/invoice-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007fabea61f7b5dba29c290d5877470acc88f42b31":{"name":"listCustomers"},"401cf0eb0f4398a9e147602982dac76d8f1c54a1a8":{"name":"prepareReminder"},"401fc2d4c9b72e82178a0f1d4f51929b1bfcfcfd48":{"name":"getReminderWarning"},"402f4e2f4b6c942dbd2dd813c318b206cde7d32e3b":{"name":"createCustomer"},"405ddb51875bd57869d288101f46b80b150556d0cc":{"name":"logReminder"},"40713459087b86eaa2c0510dd1516ad953c687cdf8":{"name":"createBill"},"40b69ca4133e3990a1baef93d4b26a821dd419562c":{"name":"recordPayment"}},"app/actions.ts",""] */ __turbopack_context__.s([
    "createBill",
    ()=>createBill,
    "createCustomer",
    ()=>createCustomer,
    "getReminderWarning",
    ()=>getReminderWarning,
    "listCustomers",
    ()=>listCustomers,
    "logReminder",
    ()=>logReminder,
    "prepareReminder",
    ()=>prepareReminder,
    "recordPayment",
    ()=>recordPayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billNumber$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/billNumber.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/money.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function ok(data) {
    return {
        ok: true,
        data
    };
}
function fail(error) {
    return {
        ok: false,
        error
    };
}
function refresh(billId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/bill/new");
    if (billId !== undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/bill/${billId}`);
    }
}
async function listCustomers() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].customer.findMany({
        orderBy: [
            {
                createdAt: "desc"
            },
            {
                id: "desc"
            }
        ],
        select: {
            id: true,
            name: true,
            whatsappNumber: true,
            email: true,
            createdAt: true
        }
    });
}
async function createCustomer(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customerSchema"].safeParse(input);
    if (!parsed.success) {
        return fail(parsed.error.issues[0]?.message ?? "Invalid customer details");
    }
    try {
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].customer.create({
            data: {
                name: parsed.data.name,
                whatsappNumber: parsed.data.whatsappNumber
            },
            select: {
                id: true,
                name: true,
                whatsappNumber: true
            }
        });
        refresh();
        return ok(created);
    } catch  {
        return fail("Could not save customer (Customer save nahi ho paya)");
    }
}
async function createBill(input) {
    try {
        const customer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].customer.findUnique({
            where: {
                id: input.customerId
            }
        });
        if (!customer) {
            return fail("Customer not found (Customer nahi mila)");
        }
        if (!Number.isFinite(input.totalAmount) || input.totalAmount <= 0) {
            return fail("Enter a valid amount (Sahi amount likhiye)");
        }
        const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(new Date());
        let dueDate;
        if (input.dueDate instanceof Date) {
            dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(input.dueDate);
        } else if (typeof input.dueDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(input.dueDate)) {
            dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(input.dueDate);
        } else if (input.dueOption === "7D") {
            dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(today, 7);
        } else if (input.dueOption === "EOM") {
            dueDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        } else if (input.dueOption === "CUSTOM" && typeof input.dueDate === "string") {
            dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(input.dueDate);
        } else {
            dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(today, 15);
        }
        const totalAmount = Math.round(input.totalAmount);
        const paidNow = Math.max(0, Math.round(input.paidNow ?? 0));
        const balance = Math.max(0, totalAmount - paidNow);
        const method = input.paidMethod ?? input.paymentMethod ?? "CASH";
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            const count = await tx.bill.count();
            const billNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billNumber$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatBillNumber"])(count + 1);
            return tx.bill.create({
                data: {
                    billNumber,
                    customerId: customer.id,
                    subtotal: totalAmount,
                    discount: 0,
                    totalAmount,
                    itemsNote: input.itemsNote?.trim() ? input.itemsNote.trim() : null,
                    notes: input.itemsNote?.trim() ? input.itemsNote.trim() : null,
                    billDate: today,
                    dueDate,
                    status: "SENT",
                    sentAt: today,
                    payments: paidNow > 0 ? {
                        create: {
                            amount: paidNow,
                            method,
                            paidOn: today
                        }
                    } : undefined,
                    activities: {
                        create: [
                            {
                                type: "CREATED",
                                detail: `Bill ${billNumber} created`
                            },
                            ...paidNow > 0 ? [
                                {
                                    type: "PAYMENT",
                                    detail: `Received ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(paidNow)} upfront`
                                }
                            ] : []
                        ]
                    }
                }
            });
        });
        const shop = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shop.findUnique({
            where: {
                id: 1
            }
        });
        const shopName = shop?.name ?? "Our Shop";
        const ownerName = shop?.ownerName ?? shopName;
        const lines = [
            `Namaste ${customer.name},`,
            `Your credit bill (${bill.billNumber}) from ${shopName} is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(totalAmount)}.`,
            ...paidNow > 0 ? [
                `Paid Now (Abhi Mile): ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(paidNow)}`
            ] : [],
            `Balance (Bacha Hua): ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(balance)}`,
            `Due Date (Kab Tak Dena Hai): ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatShortDate"])(dueDate)}`,
            ...bill.itemsNote ? [
                `Items (Saman): ${bill.itemsNote}`
            ] : [],
            `Thank you!`
        ];
        const message = lines.join("\n");
        const phone = customer.whatsappNumber.replace(/\D/g, "");
        const normalizedPhone = phone.length === 10 ? `91${phone}` : phone;
        const whatsappUrl = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
        refresh(bill.id);
        return ok({
            id: bill.id,
            billNumber: bill.billNumber,
            shopName,
            customerName: customer.name,
            totalAmount,
            paidNow,
            dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toInputDate"])(dueDate),
            ownerName,
            customerWhatsapp: customer.whatsappNumber,
            whatsappUrl,
            message
        });
    } catch  {
        return fail("Could not save bill (Bill save nahi ho paya)");
    }
}
async function recordPayment(input) {
    if (!Number.isFinite(input.amount) || input.amount <= 0) {
        return fail("Enter an amount greater than 0 (0 se zyada amount likhiye)");
    }
    try {
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findUnique({
            where: {
                id: input.billId
            },
            include: {
                payments: {
                    select: {
                        amount: true
                    }
                }
            }
        });
        if (!bill) {
            return fail("Bill not found (Bill nahi mila)");
        }
        const amount = Math.round(input.amount);
        const paidOn = input.paidOn ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(input.paidOn) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(new Date());
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].payment.create({
                data: {
                    billId: bill.id,
                    amount,
                    method: input.method,
                    paidOn,
                    reference: input.reference?.trim() ? input.reference.trim() : null
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                data: {
                    billId: bill.id,
                    type: "PAYMENT",
                    detail: `Got ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(amount)} via ${input.method}`
                }
            })
        ]);
        const existingPaid = bill.payments.reduce((sum, p)=>sum + p.amount, 0);
        const paidAmount = existingPaid + amount;
        const balance = Math.max(0, bill.totalAmount - paidAmount);
        refresh(bill.id);
        return ok({
            id: bill.id,
            paidAmount,
            balance
        });
    } catch  {
        return fail("Could not record payment (Payment save nahi ho paya)");
    }
}
async function prepareReminder(input) {
    try {
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findUnique({
            where: {
                id: input.billId
            },
            include: {
                customer: true,
                payments: {
                    select: {
                        amount: true
                    }
                }
            }
        });
        if (!bill) {
            return fail("Bill not found (Bill nahi mila)");
        }
        const shop = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shop.findUnique({
            where: {
                id: 1
            }
        });
        const shopName = shop?.name ?? "Our Shop";
        const paid = bill.payments.reduce((sum, p)=>sum + p.amount, 0);
        const balance = Math.max(0, bill.totalAmount - paid);
        const today = new Date();
        const isOverdue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(bill.dueDate);
        const tone = input.tone ?? (isOverdue ? "FIRM" : "POLITE");
        const language = input.language ?? "EN";
        const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateReminder"])({
            bill: {
                totalAmount: bill.totalAmount,
                dueDate: bill.dueDate,
                itemsNote: bill.itemsNote,
                payments: bill.payments
            },
            customer: {
                name: bill.customer.name
            },
            shop: {
                name: shopName,
                upiId: shop?.upiId ?? ""
            },
            tone,
            today,
            language
        });
        const phone = bill.customer.whatsappNumber.replace(/\D/g, "");
        const normalizedPhone = phone.length === 10 ? `91${phone}` : phone;
        const waLink = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
        return ok({
            tone,
            message,
            waLink,
            balance,
            whatsappNumber: bill.customer.whatsappNumber
        });
    } catch  {
        return fail("Could not prepare reminder (Reminder nahi ban paya)");
    }
}
async function getReminderWarning(billId) {
    try {
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findUnique({
            where: {
                id: billId
            },
            select: {
                customer: {
                    select: {
                        whatsappNumber: true
                    }
                }
            }
        });
        if (!bill) {
            return fail("Bill not found (Bill nahi mila)");
        }
        const latest = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reminderLog.findFirst({
            where: {
                billId
            },
            orderBy: {
                sentAt: "desc"
            },
            select: {
                sentAt: true
            }
        });
        return ok({
            warning: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recentReminderWarning"])(latest?.sentAt ?? null, new Date()),
            whatsappNumber: bill.customer.whatsappNumber
        });
    } catch  {
        return fail("Could not check reminder (Reminder check nahi ho paya)");
    }
}
async function logReminder(input) {
    try {
        const channel = input.channel ?? "WHATSAPP";
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reminderLog.create({
                data: {
                    billId: input.billId,
                    tone: input.tone,
                    channel,
                    message: input.message,
                    sentAt: new Date()
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                data: {
                    billId: input.billId,
                    type: "REMINDER",
                    detail: `${input.tone} reminder via ${channel}`
                }
            })
        ]);
        refresh(input.billId);
        return ok(undefined);
    } catch  {
        return fail("Could not log reminder (Reminder log nahi ho paya)");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    listCustomers,
    createCustomer,
    createBill,
    recordPayment,
    prepareReminder,
    getReminderWarning,
    logReminder
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listCustomers, "007fabea61f7b5dba29c290d5877470acc88f42b31", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCustomer, "402f4e2f4b6c942dbd2dd813c318b206cde7d32e3b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBill, "40713459087b86eaa2c0510dd1516ad953c687cdf8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(recordPayment, "40b69ca4133e3990a1baef93d4b26a821dd419562c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(prepareReminder, "401cf0eb0f4398a9e147602982dac76d8f1c54a1a8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReminderWarning, "401fc2d4c9b72e82178a0f1d4f51929b1bfcfcfd48", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logReminder, "405ddb51875bd57869d288101f46b80b150556d0cc", null);
}),
"[project]/app/invoice-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0040337149b430bd2f95838c0bc62a6f536bc1495a":{"name":"getItemSuggestions"},"4005a08663653b2c9aeff80fd2e2d7ce7d9fc9d393":{"name":"updateInvoice"},"400fd26f406364d7f8f082630a4aa67d7afe8e46a7":{"name":"getFollowupDraft"},"40214af57467def07414a08379433482073356fb65":{"name":"setPromise"},"403c37fdcbd02ec45f46cec00338af4c8973093daa":{"name":"markSent"},"4044c50a3e82a2c23b40c7667f76be9f4bc90aa3a1":{"name":"cancelInvoice"},"40559e7268b519a975c694f3195fb18aaa1b7b4aae":{"name":"updateBillDetails"},"4067b68b77679984c27dd04725288982d344033404":{"name":"recordInvoicePayment"},"40995ca82380c0b2b1f900a550ba3d35ceb23ba815":{"name":"createCustomerQuick"},"40b2d85433605ad6073a3df9b390bdb296b64f08ce":{"name":"markFullyPaid"},"40b51f39c99f9ff97216774c221528d0dde513343b":{"name":"logInvoiceReminder"},"40c97a11484e291ae63c0efa46d668d6db18a05504":{"name":"getRepeatSource"},"40e2112c7c4cd2c23d01cf32792f9bdf4d209244c7":{"name":"createInvoice"},"40e421f4beb30f676335375ed0d8b10e5a306cbd44":{"name":"deleteDraft"}},"app/invoice-actions.ts",""] */ __turbopack_context__.s([
    "cancelInvoice",
    ()=>cancelInvoice,
    "createCustomerQuick",
    ()=>createCustomerQuick,
    "createInvoice",
    ()=>createInvoice,
    "deleteDraft",
    ()=>deleteDraft,
    "getFollowupDraft",
    ()=>getFollowupDraft,
    "getItemSuggestions",
    ()=>getItemSuggestions,
    "getRepeatSource",
    ()=>getRepeatSource,
    "logInvoiceReminder",
    ()=>logInvoiceReminder,
    "markFullyPaid",
    ()=>markFullyPaid,
    "markSent",
    ()=>markSent,
    "recordInvoicePayment",
    ()=>recordInvoicePayment,
    "setPromise",
    ()=>setPromise,
    "updateBillDetails",
    ()=>updateBillDetails,
    "updateInvoice",
    ()=>updateInvoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodIssueCode$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .ZodIssueCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billNumber$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/billNumber.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/money.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$terms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/terms.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$invoiceStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/invoiceStatus.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$followups$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/followups.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const SAVE_ERROR = "Could not save changes (Save nahi ho paya, dobara try kijiye)";
function ok(data) {
    return {
        ok: true,
        data
    };
}
function fail(error) {
    return {
        ok: false,
        error
    };
}
function firstIssue(error) {
    return error.issues[0]?.message ?? "Invalid input (Galat jaankari)";
}
function storedOf(status) {
    if (status === "DRAFT" || status === "CANCELLED") return status;
    return "SENT";
}
function refresh(billId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/invoices");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/followups");
    if (billId !== undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/bill/${billId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/invoices/${billId}`);
    }
}
const idSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive();
const dateString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^\d{4}-\d{2}-\d{2}$/, "Select a valid date (Date chuniye)");
const methodSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
    "CASH",
    "UPI",
    "BANK",
    "OTHER"
]);
const toneSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
    "POLITE",
    "DUE_TODAY",
    "FIRM",
    "FINAL"
]);
const channelSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
    "WHATSAPP",
    "EMAIL",
    "COPY"
]);
const languageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
    "EN",
    "HI"
]);
const itemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1, "Item name is required (Saman ka naam likhiye)").max(120),
    qty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive("Qty must be at least 1 (Qty 1 ya zyada likhiye)").max(10000),
    unitPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0, "Price must be 0 or more (Price 0 ya zyada likhiye)")
});
const invoiceBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    customerId: idSchema,
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "TOTAL",
        "ITEMS"
    ]),
    totalOnly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive("Enter an amount (Amount likhiye)").optional(),
    items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(itemSchema).default([]),
    discount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0, "Discount cannot be negative").default(0),
    terms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$terms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TERMS_CHOICES"]).default("D15"),
    customDueDate: dateString.optional(),
    issueDate: dateString.optional(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(500).optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "DRAFT",
        "SENT"
    ]).default("DRAFT")
});
function checkInvoiceFields(v, ctx) {
    if (v.mode === "TOTAL" && v.totalOnly === undefined) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodIssueCode$3e$__["z"].ZodIssueCode.custom,
            message: "Enter an amount (Amount likhiye)",
            path: [
                "totalOnly"
            ]
        });
    }
    if (v.mode === "ITEMS" && v.items.length === 0) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodIssueCode$3e$__["z"].ZodIssueCode.custom,
            message: "Add at least one item (Kam se kam ek saman likhiye)",
            path: [
                "items"
            ]
        });
    }
    if (v.terms === "CUSTOM" && !v.customDueDate) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodIssueCode$3e$__["z"].ZodIssueCode.custom,
            message: "Select a due date (Due date chuniye)",
            path: [
                "customDueDate"
            ]
        });
    }
}
const createInvoiceSchema = invoiceBase.superRefine(checkInvoiceFields);
const updateInvoiceSchema = invoiceBase.extend({
    id: idSchema
}).superRefine(checkInvoiceFields);
function buildLines(v) {
    if (v.mode === "TOTAL") return {
        items: [],
        subtotal: v.totalOnly ?? 0
    };
    const items = v.items.map((it)=>({
            description: it.description,
            qty: it.qty,
            unitPrice: it.unitPrice,
            amount: Math.round(it.qty * it.unitPrice)
        }));
    return {
        items,
        subtotal: items.reduce((sum, it)=>sum + it.amount, 0)
    };
}
function computeTotals(v) {
    const { items, subtotal } = buildLines(v);
    if (v.discount > subtotal) {
        return fail("Discount cannot exceed subtotal (Discount total se zyada nahi ho sakta)");
    }
    const total = subtotal - v.discount;
    if (total <= 0) {
        return fail("Total must be greater than 0 (Total 0 se zyada hona chahiye)");
    }
    return ok({
        items,
        subtotal,
        total
    });
}
function derive(bill, now) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$invoiceStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deriveInvoiceStatus"])({
        status: storedOf(bill.status),
        totalAmount: bill.totalAmount,
        dueDate: bill.dueDate,
        payments: bill.payments
    }, now);
}
async function loadBill(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findUnique({
        where: {
            id
        },
        include: {
            payments: {
                select: {
                    amount: true
                }
            }
        }
    });
}
async function createInvoice(input) {
    const parsed = createInvoiceSchema.safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const data = parsed.data;
    try {
        const customer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].customer.findUnique({
            where: {
                id: data.customerId
            },
            select: {
                id: true
            }
        });
        if (!customer) return fail("Customer not found (Customer nahi mila)");
        const totals = computeTotals(data);
        if (!totals.ok) return fail(totals.error);
        const { items, subtotal, total } = totals.data;
        const issueDate = data.issueDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(data.issueDate) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(new Date());
        const dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$terms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["computeTermsDueDate"])(data.terms, issueDate, data.customDueDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(data.customDueDate) : undefined);
        const sent = data.status === "SENT";
        const shareToken = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(12).toString("base64url");
        const activities = [
            {
                type: "CREATED",
                detail: "Invoice created"
            }
        ];
        if (sent) activities.push({
            type: "SENT",
            detail: "Marked as sent"
        });
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            const last = await tx.bill.findFirst({
                orderBy: {
                    id: "desc"
                },
                select: {
                    billNumber: true
                }
            });
            return tx.bill.create({
                data: {
                    billNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billNumber$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextBillNumber"])(last?.billNumber ?? null),
                    customerId: data.customerId,
                    totalAmount: total,
                    subtotal,
                    discount: data.discount,
                    billDate: issueDate,
                    dueDate,
                    termsDays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$terms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["termsDaysFromDue"])(issueDate, dueDate),
                    status: sent ? "SENT" : "DRAFT",
                    sentAt: sent ? issueDate : null,
                    notes: data.notes ? data.notes : null,
                    shareToken,
                    items: {
                        create: items
                    },
                    activities: {
                        create: activities
                    }
                },
                select: {
                    id: true,
                    billNumber: true
                }
            });
        });
        refresh(bill.id);
        return ok({
            id: bill.id,
            billNumber: bill.billNumber,
            shareToken
        });
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function updateInvoice(input) {
    const parsed = updateInvoiceSchema.safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const data = parsed.data;
    try {
        const bill = await loadBill(data.id);
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        const now = new Date();
        const derived = derive(bill, now);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$invoiceStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allowedActions"])(derived.display, derived.paidAmount).canEdit) {
            return fail("This invoice is locked and cannot be edited.");
        }
        const totals = computeTotals(data);
        if (!totals.ok) return fail(totals.error);
        const { items, subtotal, total } = totals.data;
        if (total < derived.paidAmount) {
            return fail("New total cannot be less than the amount already paid");
        }
        const issueDate = data.issueDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(data.issueDate) : bill.billDate;
        const dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$terms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["computeTermsDueDate"])(data.terms, issueDate, data.customDueDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(data.customDueDate) : undefined);
        const resend = storedOf(bill.status) === "SENT";
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            await tx.billItem.deleteMany({
                where: {
                    billId: bill.id
                }
            });
            await tx.bill.update({
                where: {
                    id: bill.id
                },
                data: {
                    subtotal,
                    discount: data.discount,
                    totalAmount: total,
                    billDate: issueDate,
                    dueDate,
                    termsDays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$terms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["termsDaysFromDue"])(issueDate, dueDate),
                    notes: data.notes ? data.notes : null,
                    items: {
                        create: items
                    }
                }
            });
            if (resend) {
                await tx.activityLog.create({
                    data: {
                        billId: bill.id,
                        type: "SENT",
                        detail: "Edited and resent"
                    }
                });
            }
        });
        refresh(bill.id);
        return ok({
            id: bill.id
        });
    } catch  {
        return fail(SAVE_ERROR);
    }
}
const billDetailsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customerSchema"].pick({
    name: true,
    whatsappNumber: true
}).extend({
    billId: idSchema,
    totalAmount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive("Amount likhiye"),
    dueDate: dateString,
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(500).optional()
});
async function updateBillDetails(input) {
    const parsed = billDetailsSchema.safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const data = parsed.data;
    try {
        const bill = await loadBill(data.billId);
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        const derived = derive(bill, new Date());
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$invoiceStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allowedActions"])(derived.display, derived.paidAmount).canEdit) {
            return fail("This invoice is locked and cannot be edited.");
        }
        if (data.totalAmount < derived.paidAmount) {
            return fail("New total cannot be less than the amount already paid");
        }
        const dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(data.dueDate);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].customer.update({
                where: {
                    id: bill.customerId
                },
                data: {
                    name: data.name,
                    whatsappNumber: data.whatsappNumber
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.update({
                where: {
                    id: bill.id
                },
                data: {
                    totalAmount: data.totalAmount,
                    subtotal: data.totalAmount + bill.discount,
                    dueDate,
                    termsDays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$terms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["termsDaysFromDue"])(bill.billDate, dueDate),
                    notes: data.notes ? data.notes : null
                }
            })
        ]);
        refresh(bill.id);
        return ok({
            id: bill.id
        });
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function markSent(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        id: idSchema,
        channel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
            "WHATSAPP",
            "EMAIL",
            "COPY",
            "PRINT",
            "MARK"
        ])
    }).safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const { id, channel } = parsed.data;
    try {
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                status: true
            }
        });
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        const stored = storedOf(bill.status);
        if (stored === "CANCELLED") return fail("This invoice is cancelled");
        if (stored === "DRAFT") {
            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$invoiceStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["statusAfterSend"])(stored);
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.update({
                    where: {
                        id
                    },
                    data: {
                        status: next,
                        sentAt: new Date()
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                    data: {
                        billId: id,
                        type: "SENT",
                        detail: `Marked as sent via ${channel}`
                    }
                })
            ]);
            refresh(id);
            return ok({
                id,
                status: next
            });
        }
        if (channel !== "MARK") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                data: {
                    billId: id,
                    type: "SENT",
                    detail: `Shared again via ${channel}`
                }
            });
            refresh(id);
        }
        return ok({
            id,
            status: stored
        });
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function recordInvoicePayment(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        billId: idSchema,
        amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive("Enter an amount greater than 0"),
        method: methodSchema,
        paidOn: dateString.optional(),
        reference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(60).optional()
    }).safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const data = parsed.data;
    try {
        const bill = await loadBill(data.billId);
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        const stored = storedOf(bill.status);
        if (stored === "DRAFT") return fail("Send the invoice first, then record payments.");
        if (stored === "CANCELLED") return fail("This invoice is cancelled.");
        const now = new Date();
        if (derive(bill, now).balance <= 0) return fail("This invoice is already paid");
        const paidOn = data.paidOn ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(data.paidOn) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(now);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].payment.create({
                data: {
                    billId: data.billId,
                    amount: data.amount,
                    method: data.method,
                    paidOn,
                    reference: data.reference ? data.reference : null
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                data: {
                    billId: data.billId,
                    type: "PAYMENT",
                    detail: `Got ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(data.amount)} via ${data.method}`
                }
            })
        ]);
        const after = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$invoiceStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deriveInvoiceStatus"])({
            status: stored,
            totalAmount: bill.totalAmount,
            dueDate: bill.dueDate,
            payments: [
                ...bill.payments,
                {
                    amount: data.amount
                }
            ]
        }, now);
        refresh(data.billId);
        return ok({
            id: data.billId,
            paidAmount: after.paidAmount,
            balance: Math.max(0, after.balance),
            display: after.display
        });
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function markFullyPaid(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        billId: idSchema,
        method: methodSchema,
        paidOn: dateString.optional()
    }).safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    try {
        const bill = await loadBill(parsed.data.billId);
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        const balance = derive(bill, new Date()).balance;
        if (balance <= 0) return fail("Already paid");
        const result = await recordInvoicePayment({
            billId: parsed.data.billId,
            amount: balance,
            method: parsed.data.method,
            paidOn: parsed.data.paidOn
        });
        if (!result.ok) return fail(result.error);
        return ok({
            id: parsed.data.billId
        });
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function setPromise(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        billId: idSchema,
        promisedDate: dateString
    }).safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const { billId, promisedDate } = parsed.data;
    try {
        const bill = await loadBill(billId);
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        const display = derive(bill, new Date()).display;
        if (display !== "SENT" && display !== "OVERDUE" && display !== "PARTIALLY_PAID") {
            return fail("A promise can only be set on an unpaid sent invoice.");
        }
        const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseInputDate"])(promisedDate);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.update({
                where: {
                    id: billId
                },
                data: {
                    promisedDate: date
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                data: {
                    billId,
                    type: "PROMISE",
                    detail: `Promised to pay on ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatShortDate"])(date)}`
                }
            })
        ]);
        refresh(billId);
        return ok({
            id: billId
        });
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function cancelInvoice(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        billId: idSchema
    }).safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const { billId } = parsed.data;
    try {
        const bill = await loadBill(billId);
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        const derived = derive(bill, new Date());
        const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$invoiceStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allowedActions"])(derived.display, derived.paidAmount);
        if (!actions.canCancel) {
            return fail(actions.cancelBlockedReason ?? "This invoice cannot be cancelled");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.update({
                where: {
                    id: billId
                },
                data: {
                    status: "CANCELLED"
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                data: {
                    billId,
                    type: "CANCELLED",
                    detail: "Invoice cancelled"
                }
            })
        ]);
        refresh(billId);
        return ok({
            id: billId
        });
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function deleteDraft(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        billId: idSchema
    }).safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    try {
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findUnique({
            where: {
                id: parsed.data.billId
            },
            select: {
                status: true
            }
        });
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        if (storedOf(bill.status) !== "DRAFT") return fail("Only drafts can be deleted");
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.delete({
            where: {
                id: parsed.data.billId
            }
        });
        refresh();
        return ok(undefined);
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function logInvoiceReminder(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        billId: idSchema,
        tone: toneSchema,
        channel: channelSchema,
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(2000)
    }).safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const { billId, tone, channel, message } = parsed.data;
    try {
        const existingBill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findUnique({
            where: {
                id: billId
            },
            select: {
                id: true
            }
        });
        if (!existingBill) return fail("Invoice not found (Invoice nahi mila)");
        const now = new Date();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reminderLog.create({
                data: {
                    billId,
                    tone,
                    channel,
                    message,
                    sentAt: now
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                data: {
                    billId,
                    type: "REMINDER",
                    detail: `${tone} reminder via ${channel}`
                }
            })
        ]);
        refresh(billId);
        return ok(undefined);
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function getFollowupDraft(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        billId: idSchema,
        tone: toneSchema.optional(),
        language: languageSchema.default("EN"),
        channel: channelSchema.default("WHATSAPP")
    }).safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    const data = parsed.data;
    try {
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findUnique({
            where: {
                id: data.billId
            },
            include: {
                customer: true,
                payments: {
                    select: {
                        amount: true
                    }
                },
                reminders: {
                    orderBy: {
                        sentAt: "desc"
                    },
                    take: 1
                }
            }
        });
        if (!bill) return fail("Invoice not found (Invoice nahi mila)");
        const shop = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shop.findUnique({
            where: {
                id: 1
            }
        });
        if (!shop) return fail("Shop details not found (Dukaan ki jaankari nahi mili)");
        const now = new Date();
        const invoice = {
            status: storedOf(bill.status),
            totalAmount: bill.totalAmount,
            dueDate: bill.dueDate,
            promisedDate: bill.promisedDate,
            payments: bill.payments
        };
        const recommendation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$followups$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReminderStage"])(invoice, now);
        const chosenTone = data.tone ?? recommendation.tone ?? "POLITE";
        const shareUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000") + "/i/" + (bill.shareToken ?? "");
        const draft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$followups$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateReminder"])({
            invoice: {
                invoiceNumber: bill.billNumber,
                totalAmount: bill.totalAmount,
                dueDate: bill.dueDate,
                payments: bill.payments,
                promisedDate: bill.promisedDate
            },
            customer: {
                name: bill.customer.name,
                email: bill.customer.email
            },
            shop: {
                name: shop.name,
                upiId: shop.upiId,
                ownerName: shop.ownerName
            },
            tone: chosenTone,
            language: data.language,
            channel: data.channel,
            today: now,
            shareUrl
        });
        const latest = bill.reminders[0]?.sentAt ?? null;
        return ok({
            tone: chosenTone,
            reason: recommendation.reason,
            promiseBroken: recommendation.promiseBroken,
            subject: draft.subject,
            body: draft.body,
            needsEmail: draft.needsEmail,
            lastRemindedAt: latest ? latest.toISOString() : null,
            reminderWarning: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recentReminderWarning"])(latest, now),
            whatsappNumber: bill.customer.whatsappNumber,
            customerEmail: bill.customer.email
        });
    } catch  {
        return fail("Could not load follow-up draft");
    }
}
async function createCustomerQuick(input) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customerSchema"].safeParse(input);
    if (!parsed.success) return fail(firstIssue(parsed.error));
    try {
        const customer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].customer.create({
            data: {
                name: parsed.data.name,
                whatsappNumber: parsed.data.whatsappNumber
            },
            select: {
                id: true,
                name: true,
                whatsappNumber: true
            }
        });
        refresh();
        return ok(customer);
    } catch  {
        return fail(SAVE_ERROR);
    }
}
async function getRepeatSource(customerId) {
    const parsed = idSchema.safeParse(customerId);
    if (!parsed.success) return fail("Select a customer (Customer chuniye)");
    try {
        const bill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findFirst({
            where: {
                customerId,
                status: {
                    not: "CANCELLED"
                }
            },
            orderBy: {
                id: "desc"
            },
            include: {
                items: {
                    orderBy: {
                        id: "asc"
                    }
                }
            }
        });
        if (!bill) return ok({
            mode: "TOTAL",
            items: [],
            totalOnly: null
        });
        if (bill.items.length > 0) {
            return ok({
                mode: "ITEMS",
                items: bill.items.map((it)=>({
                        description: it.description,
                        qty: it.qty,
                        unitPrice: it.unitPrice
                    })),
                totalOnly: null
            });
        }
        return ok({
            mode: "TOTAL",
            items: [],
            totalOnly: bill.totalAmount
        });
    } catch  {
        return fail("Could not load previous bill (Pichla bill nahi mil paya)");
    }
}
async function getItemSuggestions() {
    try {
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].billItem.findMany({
            orderBy: {
                id: "desc"
            },
            select: {
                description: true,
                unitPrice: true
            },
            take: 500
        });
        const seen = new Map();
        for (const row of rows){
            if (!seen.has(row.description)) seen.set(row.description, row.unitPrice);
            if (seen.size >= 30) break;
        }
        return ok(Array.from(seen.entries()).map(([description, unitPrice])=>({
                description,
                unitPrice
            })));
    } catch  {
        return fail("Could not load item suggestions");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createInvoice,
    updateInvoice,
    updateBillDetails,
    markSent,
    recordInvoicePayment,
    markFullyPaid,
    setPromise,
    cancelInvoice,
    deleteDraft,
    logInvoiceReminder,
    getFollowupDraft,
    createCustomerQuick,
    getRepeatSource,
    getItemSuggestions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createInvoice, "40e2112c7c4cd2c23d01cf32792f9bdf4d209244c7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInvoice, "4005a08663653b2c9aeff80fd2e2d7ce7d9fc9d393", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBillDetails, "40559e7268b519a975c694f3195fb18aaa1b7b4aae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markSent, "403c37fdcbd02ec45f46cec00338af4c8973093daa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(recordInvoicePayment, "4067b68b77679984c27dd04725288982d344033404", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markFullyPaid, "40b2d85433605ad6073a3df9b390bdb296b64f08ce", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setPromise, "40214af57467def07414a08379433482073356fb65", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(cancelInvoice, "4044c50a3e82a2c23b40c7667f76be9f4bc90aa3a1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDraft, "40e421f4beb30f676335375ed0d8b10e5a306cbd44", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logInvoiceReminder, "40b51f39c99f9ff97216774c221528d0dde513343b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFollowupDraft, "400fd26f406364d7f8f082630a4aa67d7afe8e46a7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCustomerQuick, "40995ca82380c0b2b1f900a550ba3d35ceb23ba815", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRepeatSource, "40c97a11484e291ae63c0efa46d668d6db18a05504", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getItemSuggestions, "0040337149b430bd2f95838c0bc62a6f536bc1495a", null);
}),
"[project]/lib/billNumber.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatBillNumber",
    ()=>formatBillNumber,
    "nextBillNumber",
    ()=>nextBillNumber
]);
function formatBillNumber(n) {
    return "BILL-" + String(n).padStart(4, "0");
}
function nextBillNumber(lastBillNumber) {
    if (lastBillNumber === null) {
        return "BILL-0001";
    }
    const match = /(\d+)$/.exec(lastBillNumber);
    if (!match) {
        throw new Error("Invalid bill number");
    }
    const parsed = Number(match[1]);
    return formatBillNumber(parsed + 1);
}
}),
"[project]/lib/billStatus.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBalance",
    ()=>getBalance,
    "getBillStatus",
    ()=>getBillStatus,
    "sumPayments",
    ()=>sumPayments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
;
function sumPayments(payments) {
    return payments.reduce((total, payment)=>total + payment.amount, 0);
}
function getBalance(totalAmount, paid) {
    return totalAmount - paid;
}
function getBillStatus(input, today) {
    const paid = sumPayments(input.payments);
    const balance = getBalance(input.totalAmount, paid);
    let status;
    if (balance <= 0) {
        status = "PAID";
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(input.dueDate).getTime() < (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today).getTime()) {
        status = "OVERDUE";
    } else if (paid > 0) {
        status = "PARTIALLY_PAID";
    } else {
        status = "UNPAID";
    }
    return {
        status,
        paid,
        balance,
        isOverdue: status === "OVERDUE"
    };
}
}),
"[project]/lib/dates.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDays",
    ()=>addDays,
    "endOfMonthDay",
    ()=>endOfMonthDay,
    "formatShortDate",
    ()=>formatShortDate,
    "parseInputDate",
    ()=>parseInputDate,
    "startOfDay",
    ()=>startOfDay,
    "toInputDate",
    ()=>toInputDate
]);
function startOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function addDays(d, days) {
    const result = startOfDay(d);
    result.setDate(result.getDate() + days);
    return result;
}
function endOfMonthDay(d) {
    return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}
function formatShortDate(d) {
    return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short"
    });
}
function toInputDate(d) {
    const year = String(d.getFullYear()).padStart(4, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
function parseInputDate(s) {
    const [y, m, d] = s.split("-").map((part)=>Number(part));
    return new Date(y, m - 1, d);
}
}),
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/lib/followups.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateReminder",
    ()=>generateReminder,
    "getReminderStage",
    ()=>getReminderStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/billStatus.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/money.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
;
;
;
;
const DAY_MS = 86400000;
/** Whole calendar days from `from` to `to` (positive when `to` is later). */ function dayDiff(from, to) {
    return Math.round(((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(to).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(from).getTime()) / DAY_MS);
}
function getReminderStage(invoice, today) {
    if (invoice.status !== "SENT") {
        return {
            tone: null,
            reason: "Nothing to chase yet",
            promiseBroken: false
        };
    }
    const { balance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBillStatus"])({
        totalAmount: invoice.totalAmount,
        dueDate: invoice.dueDate,
        payments: invoice.payments
    }, today);
    if (balance <= 0) {
        return {
            tone: null,
            reason: "Already paid",
            promiseBroken: false
        };
    }
    const promisedDate = invoice.promisedDate;
    if (promisedDate !== null) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(promisedDate).getTime() >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today).getTime()) {
            return {
                tone: null,
                reason: "Promised for " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatShortDate"])(promisedDate),
                promiseBroken: false
            };
        }
        return {
            tone: "FIRM",
            reason: "Promise broken (promised for " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatShortDate"])(promisedDate) + "), firm nudge recommended",
            promiseBroken: true
        };
    }
    const daysUntil = dayDiff(today, invoice.dueDate);
    if (daysUntil >= 1 && daysUntil <= 3) {
        return {
            tone: "POLITE",
            reason: "Due in " + daysUntil + (daysUntil === 1 ? " day" : " days") + ", polite reminder recommended",
            promiseBroken: false
        };
    }
    if (daysUntil > 3) {
        return {
            tone: null,
            reason: "Not due yet",
            promiseBroken: false
        };
    }
    if (daysUntil === 0) {
        return {
            tone: "DUE_TODAY",
            reason: "Due today",
            promiseBroken: false
        };
    }
    const overdue = -daysUntil;
    if (overdue <= 14) {
        return {
            tone: "FIRM",
            reason: overdue + (overdue === 1 ? " day" : " days") + " overdue, firm nudge recommended",
            promiseBroken: false
        };
    }
    return {
        tone: "FINAL",
        reason: overdue + " days overdue, final reminder recommended",
        promiseBroken: false
    };
}
function generateReminder(args) {
    const { invoice, customer, shop, tone, language, channel, today, shareUrl } = args;
    const { balance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBillStatus"])({
        totalAmount: invoice.totalAmount,
        dueDate: invoice.dueDate,
        payments: invoice.payments
    }, today);
    const money = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(Math.max(0, balance));
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firstNameOf"])(customer.name);
    const due = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ordinalDay"])(invoice.dueDate);
    const inv = invoice.invoiceNumber;
    const upi = shop.upiId;
    const overdueDays = Math.max(0, dayDiff(invoice.dueDate, today));
    const link = shareUrl;
    const promisedDate = invoice.promisedDate;
    const promiseDate = promisedDate !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatShortDate"])(promisedDate) : "";
    const promiseBroken = tone === "FIRM" && promisedDate !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(promisedDate).getTime() < (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today).getTime();
    let body;
    if (language === "EN") {
        if (tone === "POLITE") {
            body = `Hi ${name} ji, quick reminder that ${money} (${inv}) at ${shop.name} is due on ${due}. UPI: ${upi}. Invoice: ${link}`;
        } else if (tone === "DUE_TODAY") {
            body = `Hi ${name} ji, ${money} (${inv}) is due today. UPI: ${upi}. Invoice: ${link}`;
        } else if (tone === "FIRM") {
            body = promiseBroken ? `Hi ${name} ji, you had promised to pay ${money} (${inv}) by ${promiseDate}, but it is still pending. Kindly clear it today. UPI: ${upi}. Invoice: ${link}` : `Hi ${name} ji, ${money} (${inv}) is overdue by ${overdueDays} ${overdueDays === 1 ? "day" : "days"}. Kindly clear it at your earliest convenience so we can settle our distributor bills. UPI: ${upi}. Invoice: ${link}`;
        } else {
            body = `Hi ${name} ji, ${money} (${inv}) is now ${overdueDays} days overdue. This is our final reminder before we stop further credit. Please clear it or call us. UPI: ${upi}. Invoice: ${link}`;
        }
    } else {
        if (tone === "POLITE") {
            body = `Namaste ${name} ji, ${money} ka balance (${inv}) ${due} tareekh ko due hai. Jab convenient ho UPI kar dijiye. UPI: ${upi}. Invoice: ${link}`;
        } else if (tone === "DUE_TODAY") {
            body = `Namaste ${name} ji, ${money} (${inv}) aaj due hai. UPI: ${upi}. Invoice: ${link}`;
        } else if (tone === "FIRM") {
            body = promiseBroken ? `Namaste ${name} ji, aapne ${promiseDate} tak ${money} (${inv}) dene ka vaada kiya tha, abhi tak baaki hai. Kripya aaj clear kar dijiye. UPI: ${upi}. Invoice: ${link}` : `Namaste ${name} ji, ${money} (${inv}) ${overdueDays} din se overdue hai. Kripya jald se jald clear kar dijiye, taaki hum apne distributor ke bills settle kar saken. UPI: ${upi}. Invoice: ${link}`;
        } else {
            body = `Namaste ${name} ji, ${money} (${inv}) ${overdueDays} din se overdue hai. Ye hamara aakhri reminder hai, aage credit rokna padega. Kripya clear kar dijiye ya call kijiye. UPI: ${upi}. Invoice: ${link}`;
        }
    }
    if (channel !== "EMAIL") {
        return {
            subject: null,
            body,
            needsEmail: false
        };
    }
    const subjectSuffix = tone === "FINAL" ? "final reminder" : tone === "FIRM" ? "overdue" : tone === "DUE_TODAY" ? "due today" : "due soon";
    return {
        subject: `${inv}: ${money} ${subjectSuffix}`,
        body: `Dear ${customer.name},\n\n${body}\n\nRegards, ${shop.ownerName}, ${shop.name}`,
        needsEmail: !customer.email
    };
}
}),
"[project]/lib/invoiceStatus.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allowedActions",
    ()=>allowedActions,
    "deriveInvoiceStatus",
    ()=>deriveInvoiceStatus,
    "statusAfterSend",
    ()=>statusAfterSend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/billStatus.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$udhaarList$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/udhaarList.ts [app-rsc] (ecmascript)");
;
;
;
function deriveInvoiceStatus(input, today) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBillStatus"])({
        totalAmount: input.totalAmount,
        dueDate: input.dueDate,
        payments: input.payments
    }, today);
    const paidAmount = info.paid;
    const balance = info.balance;
    const dueStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(input.dueDate).getTime();
    const todayStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today).getTime();
    let display;
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
    const overdueDays = display === "OVERDUE" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$udhaarList$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["daysOverdue"])(input.dueDate, today) : 0;
    const daysUntilDue = Math.max(0, Math.round((dueStart - todayStart) / 86400000));
    return {
        display,
        paidAmount,
        balance,
        daysOverdue: overdueDays,
        daysUntilDue
    };
}
function allowedActions(display, paidAmount) {
    if (display === "DRAFT") {
        return {
            canEdit: true,
            editMode: "FREE",
            canDelete: true,
            canMarkSent: true,
            canRecordPayment: false,
            canCancel: true,
            cancelBlockedReason: null
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
            cancelBlockedReason: hasPayments ? "Payments are recorded on this invoice, so it cannot be cancelled." : null
        };
    }
    return {
        canEdit: false,
        editMode: "LOCKED",
        canDelete: false,
        canMarkSent: false,
        canRecordPayment: false,
        canCancel: false,
        cancelBlockedReason: display === "PAID" ? "This invoice is fully paid, so it is locked." : "This invoice is cancelled."
    };
}
function statusAfterSend(current) {
    return current === "DRAFT" ? "SENT" : current;
}
}),
"[project]/lib/money.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRupees",
    ()=>formatRupees
]);
function formatRupees(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
}
}),
"[project]/lib/reminders.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultTone",
    ()=>defaultTone,
    "firstNameOf",
    ()=>firstNameOf,
    "formatItemsPhrase",
    ()=>formatItemsPhrase,
    "generateReminder",
    ()=>generateReminder,
    "lastRemindedLabel",
    ()=>lastRemindedLabel,
    "ordinalDay",
    ()=>ordinalDay,
    "recentReminderWarning",
    ()=>recentReminderWarning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/billStatus.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$udhaarList$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/udhaarList.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/money.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
;
;
;
;
const DAY_MS = 86400000;
const HOUR_MS = 3600000;
function defaultTone(bill, today) {
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBillStatus"])({
        totalAmount: bill.totalAmount,
        dueDate: bill.dueDate,
        payments: bill.payments
    }, today);
    return status.isOverdue ? "FIRM" : "POLITE";
}
function firstNameOf(fullName) {
    const first = fullName.trim().split(/\s+/)[0];
    return first && first.length > 0 ? first : "Customer";
}
function ordinalDay(d) {
    const n = d.getDate();
    const mod100 = n % 100;
    if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
    switch(n % 10){
        case 1:
            return `${n}st`;
        case 2:
            return `${n}nd`;
        case 3:
            return `${n}rd`;
        default:
            return `${n}th`;
    }
}
function formatItemsPhrase(itemsNote, language) {
    if (itemsNote !== null) {
        const lines = itemsNote.split(/\r?\n/).map((line)=>line.trim()).filter((line)=>line.length > 0);
        if (lines.length > 0) return lines.join(", ");
    }
    return language === "HI" ? "aapki kharidari" : "your purchase";
}
function generateReminder(args) {
    const { bill, customer, shop, tone, today } = args;
    const language = args.language ?? "EN";
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBillStatus"])({
        totalAmount: bill.totalAmount,
        dueDate: bill.dueDate,
        payments: bill.payments
    }, today);
    const money = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(Math.max(0, status.balance));
    const overdueDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$udhaarList$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["daysOverdue"])(bill.dueDate, today);
    const name = firstNameOf(customer.name);
    const items = formatItemsPhrase(bill.itemsNote, language);
    const due = ordinalDay(bill.dueDate);
    const upi = shop.upiId;
    const shopName = shop.name;
    if (language === "EN") {
        if (tone === "POLITE") {
            return `Hi ${name} ji, quick reminder that ${money} for ${items} at ${shopName} is due on ${due}. UPI: ${upi}`;
        }
        const dayWord = overdueDays === 1 ? "day" : "days";
        const phrase = overdueDays > 0 ? `is overdue by ${overdueDays} ${dayWord}` : `is due on ${due}`;
        return `Hi ${name} ji, ${money} ${phrase}. Kindly clear at your earliest convenience so we can settle our distributor bills. UPI: ${upi}`;
    }
    if (tone === "POLITE") {
        return `Hi ${name} ji, ek chhoti si yaad dilani thi, ${items} ka ${money} ${shopName} ko ${due} tak dena hai. UPI: ${upi}`;
    }
    const phraseHi = overdueDays > 0 ? `${overdueDays} din se overdue hai` : `${due} tak dena hai`;
    return `Hi ${name} ji, ${money} ${phraseHi}. Kripya jald se jald clear kar dijiye, taaki hum apne distributor ke bills settle kar saken. UPI: ${upi}`;
}
function recentReminderWarning(lastSentAt, now) {
    if (lastSentAt === null) return null;
    const diffMs = Math.max(0, now.getTime() - lastSentAt.getTime());
    if (diffMs >= DAY_MS) return null;
    const hours = Math.floor(diffMs / HOUR_MS);
    if (hours < 1) {
        return "Reminded less than an hour ago, send again?";
    }
    return `Reminded ${hours} ${hours === 1 ? "hour" : "hours"} ago, send again?`;
}
function lastRemindedLabel(lastSentAt, today) {
    if (lastSentAt === null) return null;
    const raw = Math.round(((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(lastSentAt).getTime()) / DAY_MS);
    const days = Math.max(0, raw);
    if (days === 0) return "Last reminded today";
    if (days === 1) return "Last reminded 1 day ago";
    return `Last reminded ${days} days ago`;
}
}),
"[project]/lib/terms.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TERMS_CHOICES",
    ()=>TERMS_CHOICES,
    "TERMS_LABELS",
    ()=>TERMS_LABELS,
    "computeTermsDueDate",
    ()=>computeTermsDueDate,
    "termsDaysFromDue",
    ()=>termsDaysFromDue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
;
const TERMS_CHOICES = [
    "ON_RECEIPT",
    "D7",
    "D15",
    "D30",
    "EOM",
    "CUSTOM"
];
const TERMS_LABELS = {
    ON_RECEIPT: "Due on receipt",
    D7: "7 days",
    D15: "15 days",
    D30: "30 days",
    EOM: "End of month",
    CUSTOM: "Custom date"
};
function computeTermsDueDate(choice, issueDate, customDate) {
    switch(choice){
        case "ON_RECEIPT":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(issueDate);
        case "D7":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(issueDate, 7);
        case "D15":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(issueDate, 15);
        case "D30":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(issueDate, 30);
        case "EOM":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["endOfMonthDay"])(issueDate);
        case "CUSTOM":
            if (!customDate) {
                throw new Error("Custom date required");
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(customDate);
    }
}
function termsDaysFromDue(issueDate, dueDate) {
    return Math.max(0, Math.round(((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(dueDate).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(issueDate).getTime()) / 86400000));
}
}),
"[project]/lib/udhaarList.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FILTER",
    ()=>DEFAULT_FILTER,
    "FILTER_STATUSES",
    ()=>FILTER_STATUSES,
    "buildListHref",
    ()=>buildListHref,
    "buildUdhaarRows",
    ()=>buildUdhaarRows,
    "daysOverdue",
    ()=>daysOverdue,
    "filterRows",
    ()=>filterRows,
    "parseStatusParam",
    ()=>parseStatusParam,
    "sortRows",
    ()=>sortRows,
    "summarize",
    ()=>summarize,
    "toggleStatus",
    ()=>toggleStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/billStatus.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
;
;
const FILTER_STATUSES = [
    "UNPAID",
    "PARTIALLY_PAID",
    "OVERDUE",
    "PAID"
];
const DEFAULT_FILTER = [
    "OVERDUE",
    "UNPAID"
];
function isFilterStatus(value) {
    return FILTER_STATUSES.includes(value);
}
function parseStatusParam(raw) {
    const trimmed = raw?.trim() ?? "";
    if (trimmed === "") {
        return [
            ...DEFAULT_FILTER
        ];
    }
    if (trimmed.toUpperCase() === "ALL") {
        return [
            ...FILTER_STATUSES
        ];
    }
    const requested = new Set(trimmed.split(",").map((part)=>part.trim()).filter(isFilterStatus));
    const result = FILTER_STATUSES.filter((status)=>requested.has(status));
    return result.length > 0 ? result : [
        ...DEFAULT_FILTER
    ];
}
function daysOverdue(dueDate, today) {
    return Math.max(0, Math.round(((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(dueDate).getTime()) / 86400000));
}
function buildUdhaarRows(inputs, today) {
    return inputs.map((input)=>{
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBillStatus"])({
            totalAmount: input.totalAmount,
            dueDate: input.dueDate,
            payments: input.payments
        }, today);
        return {
            ...input,
            paid: info.paid,
            balance: info.balance,
            status: info.status,
            daysOverdue: info.status === "OVERDUE" ? daysOverdue(input.dueDate, today) : 0
        };
    });
}
function filterRows(rows, statuses, query) {
    const needle = query.trim().toLowerCase();
    return rows.filter((row)=>{
        if (!statuses.includes(row.status)) {
            return false;
        }
        if (needle === "") {
            return true;
        }
        return row.customerName.toLowerCase().includes(needle);
    });
}
function sortRows(rows) {
    return [
        ...rows
    ].sort((a, b)=>{
        const aOverdue = a.status === "OVERDUE";
        const bOverdue = b.status === "OVERDUE";
        if (aOverdue !== bOverdue) {
            return aOverdue ? -1 : 1;
        }
        if (aOverdue && bOverdue && a.daysOverdue !== b.daysOverdue) {
            return b.daysOverdue - a.daysOverdue;
        }
        if (!aOverdue && !bOverdue) {
            const dueDiff = a.dueDate.getTime() - b.dueDate.getTime();
            if (dueDiff !== 0) {
                return dueDiff;
            }
        }
        return a.id - b.id;
    });
}
function summarize(rows) {
    let totalOutstanding = 0;
    let totalOverdue = 0;
    let overdueCount = 0;
    for (const row of rows){
        if (row.balance > 0) {
            totalOutstanding += row.balance;
        }
        if (row.status === "OVERDUE") {
            totalOverdue += row.balance;
            overdueCount += 1;
        }
    }
    return {
        totalOutstanding,
        totalOverdue,
        overdueCount
    };
}
function buildListHref(statuses, query) {
    const allSelected = FILTER_STATUSES.every((status)=>statuses.includes(status));
    const statusValue = allSelected ? "ALL" : FILTER_STATUSES.filter((status)=>statuses.includes(status)).join(",");
    const params = new URLSearchParams();
    params.set("status", statusValue);
    const trimmedQuery = query.trim();
    if (trimmedQuery !== "") {
        params.set("q", trimmedQuery);
    }
    return "/?" + params.toString();
}
function toggleStatus(current, status) {
    const isOnlyActive = current.length === 1 && current[0] === status;
    return isOnlyActive ? [
        ...FILTER_STATUSES
    ] : [
        status
    ];
}
}),
"[project]/lib/validation.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAYMENT_METHODS",
    ()=>PAYMENT_METHODS,
    "billSchema",
    ()=>billSchema,
    "customerSchema",
    ()=>customerSchema,
    "paymentSchema",
    ()=>paymentSchema,
    "reminderSchema",
    ()=>reminderSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .enum>");
;
const PAYMENT_METHODS = [
    "CASH",
    "UPI",
    "OTHER"
];
const customerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1, "Naam likhiye").max(60),
    whatsappNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().regex(/^[6-9]\d{9}$/, "10 digit number likhiye (6-9 se shuru)")
});
const billSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    customerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive(),
    totalAmount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive("Amount likhiye"),
    itemsNote: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(500).optional(),
    dueDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^\d{4}-\d{2}-\d{2}$/),
    paidNow: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).default(0),
    paidMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(PAYMENT_METHODS).default("CASH")
}).refine((v)=>v.paidNow <= v.totalAmount, {
    message: "Abhi mile amount total se zyada nahi ho sakta",
    path: [
        "paidNow"
    ]
});
const paymentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    billId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive(),
    amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive("Amount likhiye"),
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(PAYMENT_METHODS),
    paidOn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date chuniye").optional()
});
const reminderSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    billId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive(),
    tone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "POLITE",
        "FIRM"
    ]),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "EN",
        "HI"
    ]).optional()
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_04yiqcg5_3h._.js.map
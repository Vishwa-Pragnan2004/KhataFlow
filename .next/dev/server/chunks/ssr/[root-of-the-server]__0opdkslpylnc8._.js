module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/forecast/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForecastPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/money.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/billStatus.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forecast$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forecast.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const dynamic = "force-dynamic";
// Sample data: fixed opening cash until a real cash ledger exists.
const OPENING_CASH = 25000;
const EXCLUDED_STATUSES = [
    "DRAFT",
    "CANCELLED"
];
const DEFAULT_DELAY_DAYS = 15;
function shortDate(d) {
    return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short"
    });
}
function isSameDay(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(a).getTime() === (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(b).getTime();
}
function Kpi({ label, value, note, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-md border-l-4 bg-white p-5 shadow-sm ${accent}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm uppercase tracking-wide text-stone-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-3xl font-bold text-stone-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-stone-500",
                children: note
            }, void 0, false, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 48,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/forecast/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
async function ForecastPage({ searchParams }) {
    const sp = await searchParams;
    const today = new Date();
    const rawBills = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].bill.findMany({
        where: {
            status: {
                notIn: EXCLUDED_STATUSES
            }
        },
        include: {
            customer: {
                select: {
                    id: true,
                    name: true
                }
            },
            payments: {
                select: {
                    amount: true
                }
            }
        }
    });
    const bills = rawBills.map((bill)=>({
            id: bill.id,
            customerId: bill.customer.id,
            customerName: bill.customer.name,
            balance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBalance"])(bill.totalAmount, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$billStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sumPayments"])(bill.payments)),
            dueDate: bill.dueDate,
            promisedDate: bill.promisedDate,
            status: bill.status
        }));
    const expenses = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].expense.findMany({
        select: {
            id: true,
            title: true,
            category: true,
            amount: true,
            dueDate: true,
            paidOn: true
        }
    });
    // Unique customers from the loaded bills, for the what-if dropdown.
    const customerMap = new Map();
    for (const bill of bills)customerMap.set(bill.customerId, bill.customerName);
    const customers = Array.from(customerMap.entries()).sort((a, b)=>a[1].localeCompare(b[1]));
    const input = {
        today,
        openingCash: OPENING_CASH,
        bills,
        expenses
    };
    // What-if scenario: only applied when both customer and delay are valid.
    const scenarioCustomerId = sp.scenario ? Number(sp.scenario) : NaN;
    const scenarioName = customerMap.get(scenarioCustomerId);
    const delayDays = sp.delay !== undefined && sp.delay.trim() !== "" ? Number(sp.delay) : NaN;
    const validScenario = scenarioName !== undefined && Number.isInteger(delayDays) && delayDays >= 0 && delayDays <= 60;
    let forecast;
    let comparison = null;
    if (validScenario) {
        const scenario = {
            customerId: scenarioCustomerId,
            delayDays
        };
        comparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forecast$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compareScenario"])(input, scenario);
        forecast = comparison.base;
    } else {
        forecast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forecast$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildForecast"])(input);
    }
    const chaseList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forecast$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["suggestChaseList"])(bills, today);
    const cashInItems = forecast.inflowItems.slice(0, 10);
    const negative = forecast.firstNegativeDate !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-stone-100 text-stone-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-stone-900 px-6 py-8 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm text-amber-300 underline",
                            children: "Back to Udhaar list"
                        }, void 0, false, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-3 text-3xl font-bold",
                            children: "Cash Forecast (Nakad Anumaan)"
                        }, void 0, false, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-stone-300",
                            children: "Next 90 days, built from unpaid bills and upcoming expenses"
                        }, void 0, false, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-stone-400",
                            children: [
                                "Opening cash is sample data: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(OPENING_CASH)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/forecast/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl space-y-8 px-6 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid grid-cols-1 gap-4 md:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                                label: "Cash in, next 30 days",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(forecast.inflow30),
                                accent: "border-green-600"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                                label: "Cash out, next 30 days",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(forecast.outflow30),
                                accent: "border-red-600"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                                label: "Net, 90 days",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(forecast.net90),
                                accent: forecast.net90 < 0 ? "border-red-600" : "border-green-600"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                                label: "Lowest cash point",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(forecast.lowestCash),
                                note: `on ${shortDate(forecast.lowestCashDate)}`,
                                accent: forecast.lowestCash < 0 ? "border-red-600" : "border-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    negative && forecast.firstNegativeDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border border-red-300 bg-red-50 p-4 text-red-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: [
                                "Cash goes negative on ",
                                shortDate(forecast.firstNegativeDate),
                                ". Chase these customers first."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border border-green-300 bg-green-50 p-4 text-green-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: "Cash stays positive for 90 days."
                        }, void 0, false, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-md bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 text-xl font-bold",
                                children: "Weekly projection"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "border-b-2 border-stone-900 text-stone-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4",
                                                        children: "Week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4",
                                                        children: "Dates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4 text-right",
                                                        children: "Inflow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4 text-right",
                                                        children: "Outflow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4 text-right",
                                                        children: "Net"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 text-right",
                                                        children: "Closing cash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/forecast/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: forecast.buckets.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-stone-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 pr-4 font-medium",
                                                            children: b.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 pr-4 text-stone-600",
                                                            children: [
                                                                shortDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(today, b.startDay)),
                                                                " to",
                                                                " ",
                                                                shortDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(today, b.endDay))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 pr-4 text-right",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.inflow)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 pr-4 text-right",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.outflow)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 pr-4 text-right",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.net)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `py-2 text-right font-semibold ${b.closingCash < 0 ? "text-red-600" : "text-stone-900"}`,
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.closingCash)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, b.label, true, {
                                                    fileName: "[project]/app/forecast/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/forecast/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/forecast/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-8 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-md border-t-4 border-green-600 bg-white p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-4 text-xl font-bold",
                                        children: "Cash in (expected receipts)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    cashInItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-stone-500",
                                        children: "No open receipts."
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "divide-y divide-stone-200",
                                        children: cashInItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex justify-between gap-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: item.customerName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forecast/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-stone-500",
                                                                children: [
                                                                    "Expected ",
                                                                    shortDate(item.expectedDate)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/forecast/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-green-700",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(item.amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.billId, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-md border-t-4 border-red-600 bg-white p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-4 text-xl font-bold",
                                        children: "Cash out (expenses)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    forecast.outflowItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-stone-500",
                                        children: "No unpaid expenses."
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "divide-y divide-stone-200",
                                        children: forecast.outflowItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex justify-between gap-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forecast/page.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-stone-500",
                                                                children: [
                                                                    item.category,
                                                                    " · ",
                                                                    shortDate(item.date),
                                                                    isSameDay(item.date, today) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-2 rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700",
                                                                        children: "Due now"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/forecast/page.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/forecast/page.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-red-700",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(item.amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.expenseId, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-md border-l-4 border-amber-500 bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold",
                                children: "What-if: customer pays late"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-stone-500",
                                children: "Pick a customer and how many days late their payments arrive."
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: "/forecast",
                                method: "get",
                                className: "mt-4 flex flex-wrap items-end gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex flex-col text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mb-1 text-stone-600",
                                                children: "Customer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "scenario",
                                                defaultValue: sp.scenario ?? "",
                                                className: "min-h-12 rounded-md border border-stone-300 px-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Choose a customer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 17
                                                    }, this),
                                                    customers.map(([id, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: id,
                                                            children: name
                                                        }, id, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex flex-col text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mb-1 text-stone-600",
                                                children: "Days late"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "delay",
                                                min: 0,
                                                max: 60,
                                                defaultValue: sp.delay ?? String(DEFAULT_DELAY_DAYS),
                                                className: "min-h-12 w-32 rounded-md border border-stone-300 px-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "min-h-12 rounded-md bg-stone-900 px-5 text-white",
                                        children: "Run what-if"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            comparison && scenarioName !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-md border-l-4 border-stone-900 bg-stone-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-stone-500",
                                                children: "Lowest cash change"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-2xl font-bold ${comparison.lowestCashChange < 0 ? "text-red-600" : "text-stone-900"}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(comparison.lowestCashChange)
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-stone-700",
                                                children: [
                                                    "If ",
                                                    scenarioName,
                                                    " pays ",
                                                    delayDays,
                                                    " days late, lowest cash changes by",
                                                    " ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(comparison.lowestCashChange),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-md border-l-4 border-stone-900 bg-stone-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-stone-500",
                                                children: "Closing cash (day 90) change"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-2xl font-bold ${comparison.closingCash90Change < 0 ? "text-red-600" : "text-stone-900"}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(comparison.closingCash90Change)
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-stone-700",
                                                children: [
                                                    "If ",
                                                    scenarioName,
                                                    " pays ",
                                                    delayDays,
                                                    " days late, day-90 cash changes by",
                                                    " ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(comparison.closingCash90Change),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-md border-l-4 border-red-600 bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 text-xl font-bold",
                                children: "Chase list (overdue bills)"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            chaseList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-500",
                                children: "No overdue bills."
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "divide-y divide-stone-200",
                                children: chaseList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-wrap items-center justify-between gap-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: [
                                                            "Bill #",
                                                            item.billId,
                                                            " · ",
                                                            item.customerName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-stone-500",
                                                        children: [
                                                            item.daysOverdue,
                                                            " days overdue · Balance ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(item.balance)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700",
                                                children: "Chase today"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.billId, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/forecast/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/forecast/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/forecast/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/lib/forecast.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildForecast",
    ()=>buildForecast,
    "compareScenario",
    ()=>compareScenario,
    "suggestChaseList",
    ()=>suggestChaseList
]);
// Cash forecast engine. Pure module: no Prisma, no I/O.
// All dates are normalised with startOfDay before comparing, and day
// differences use Math.round so DST shifts cannot cause off-by-one errors.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dates.ts [app-rsc] (ecmascript)");
;
// ---------- Constants and helpers ----------
const MS_PER_DAY = 24 * 60 * 60 * 1000;
// Overdue bills are assumed to land this many days from today.
const OVERDUE_RECEIPT_DAYS = 7;
const WEEKS = 13;
// Whole days from `from` to `to`, comparing start-of-day values.
function dayDiff(from, to) {
    return Math.round(((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(to).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(from).getTime()) / MS_PER_DAY);
}
// Sum of amounts whose day index falls within [from, to] inclusive.
function sumDays(entries, from, to) {
    let total = 0;
    for (const e of entries){
        if (e.day >= from && e.day <= to) total += e.amount;
    }
    return total;
}
function buildForecast(input) {
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(input.today);
    const { openingCash, scenario } = input;
    // Inflows: open bills only (drafts and cancelled excluded).
    const inflowItems = [];
    for (const bill of input.bills){
        if (!(bill.balance > 0)) continue;
        if (bill.status === "DRAFT" || bill.status === "CANCELLED") continue;
        // Use the promised date if it is not in the past, otherwise the due date.
        let expected = bill.promisedDate !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(bill.promisedDate).getTime() >= today.getTime() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(bill.promisedDate) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(bill.dueDate);
        // Already overdue: assume it lands a week from today.
        if (expected.getTime() < today.getTime()) {
            expected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(today, OVERDUE_RECEIPT_DAYS);
        }
        // What-if: delay receipts for the scenario customer.
        if (scenario && bill.customerId === scenario.customerId) {
            expected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(expected, scenario.delayDays);
        }
        inflowItems.push({
            billId: bill.id,
            customerName: bill.customerName,
            amount: bill.balance,
            expectedDate: expected
        });
    }
    inflowItems.sort((a, b)=>a.expectedDate.getTime() - b.expectedDate.getTime());
    // Outflows: unpaid expenses. Overdue ones are counted today.
    const outflowItems = [];
    for (const expense of input.expenses){
        if (expense.paidOn !== null) continue;
        const due = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(expense.dueDate);
        outflowItems.push({
            expenseId: expense.id,
            title: expense.title,
            category: expense.category,
            amount: expense.amount,
            date: due.getTime() < today.getTime() ? today : due
        });
    }
    outflowItems.sort((a, b)=>a.date.getTime() - b.date.getTime());
    // Day-indexed copies for bucket and horizon sums.
    const inflowDays = inflowItems.map((i)=>({
            day: dayDiff(today, i.expectedDate),
            amount: i.amount
        }));
    const outflowDays = outflowItems.map((o)=>({
            day: dayDiff(today, o.date),
            amount: o.amount
        }));
    // Weekly buckets: day 0-6, 7-13, ..., 84-90.
    const buckets = [];
    let runningCash = openingCash;
    let lowestCash = openingCash;
    let lowestCashDate = today;
    let firstNegativeDate = openingCash < 0 ? today : null;
    for(let w = 0; w < WEEKS; w++){
        const startDay = w * 7;
        const endDay = startDay + 6;
        const inflow = sumDays(inflowDays, startDay, endDay);
        const outflow = sumDays(outflowDays, startDay, endDay);
        const net = inflow - outflow;
        runningCash += net;
        const bucketStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(today, startDay);
        buckets.push({
            startDay,
            endDay,
            label: `Week ${w + 1}`,
            inflow,
            outflow,
            net,
            closingCash: runningCash
        });
        // Track the lowest point; ties keep the earliest date.
        if (runningCash < lowestCash) {
            lowestCash = runningCash;
            lowestCashDate = bucketStart;
        }
        if (firstNegativeDate === null && runningCash < 0) {
            firstNegativeDate = bucketStart;
        }
    }
    // Horizon totals (inclusive day ranges starting at today).
    const inflow30 = sumDays(inflowDays, 0, 30);
    const inflow60 = sumDays(inflowDays, 0, 60);
    const inflow90 = sumDays(inflowDays, 0, 90);
    const outflow30 = sumDays(outflowDays, 0, 30);
    const outflow60 = sumDays(outflowDays, 0, 60);
    const outflow90 = sumDays(outflowDays, 0, 90);
    return {
        buckets,
        inflow30,
        inflow60,
        inflow90,
        outflow30,
        outflow60,
        outflow90,
        net30: inflow30 - outflow30,
        net60: inflow60 - outflow60,
        net90: inflow90 - outflow90,
        lowestCash,
        lowestCashDate,
        firstNegativeDate,
        closingCash90: buckets[WEEKS - 1].closingCash,
        inflowItems,
        outflowItems
    };
}
function compareScenario(input, scenario) {
    const base = buildForecast(input);
    const result = buildForecast({
        ...input,
        scenario
    });
    return {
        base,
        scenario: result,
        lowestCashChange: result.lowestCash - base.lowestCash,
        closingCash90Change: result.closingCash90 - base.closingCash90
    };
}
function suggestChaseList(bills, today) {
    const todayStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today);
    const items = [];
    for (const bill of bills){
        if (!(bill.balance > 0)) continue;
        const due = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(bill.dueDate);
        if (due.getTime() >= todayStart.getTime()) continue;
        items.push({
            billId: bill.id,
            customerName: bill.customerName,
            balance: bill.balance,
            daysOverdue: dayDiff(due, todayStart),
            suggestedAction: "Chase today"
        });
    }
    items.sort((a, b)=>b.balance - a.balance);
    return items;
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0opdkslpylnc8._.js.map
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forecast$2f$ForecastCharts$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forecast/ForecastCharts.tsx [app-rsc] (ecmascript)");
;
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
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-3xl font-bold text-stone-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-stone-500",
                children: note
            }, void 0, false, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 50,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/forecast/page.tsx",
        lineNumber: 47,
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
                    className: "mx-auto max-w-6xl flex items-start gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-48 w-48 shrink-0 items-center justify-center rounded-2xl bg-white/5 p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/mascot.png",
                                alt: "KhataFlow mascot",
                                className: "h-full w-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-sm text-amber-300 underline",
                                    children: "Back to Udhaar list"
                                }, void 0, false, {
                                    fileName: "[project]/app/forecast/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-3 text-3xl font-bold",
                                        children: "Cash Forecast (Nakad Anumaan)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/forecast/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-stone-300",
                                    children: "Next 90 days, built from unpaid bills and upcoming expenses"
                                }, void 0, false, {
                                    fileName: "[project]/app/forecast/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-stone-400",
                                    children: [
                                        "Opening cash is sample data: ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(OPENING_CASH)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/forecast/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/forecast/page.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 134,
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
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                                label: "Cash out, next 30 days",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(forecast.outflow30),
                                accent: "border-red-600"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                                label: "Net, 90 days",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(forecast.net90),
                                accent: forecast.net90 < 0 ? "border-red-600" : "border-green-600"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                                label: "Lowest cash point",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(forecast.lowestCash),
                                note: `on ${shortDate(forecast.lowestCashDate)}`,
                                accent: forecast.lowestCash < 0 ? "border-red-600" : "border-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 158,
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
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border border-green-300 bg-green-50 p-4 text-green-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: "Cash stays positive for 90 days."
                        }, void 0, false, {
                            fileName: "[project]/app/forecast/page.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forecast$2f$ForecastCharts$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        buckets: forecast.buckets,
                        lowestCash: forecast.lowestCash,
                        outflowItems: forecast.outflowItems
                    }, void 0, false, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-md bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 text-xl font-bold",
                                children: "Weekly projection"
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 204,
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
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4",
                                                        children: "Dates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4 text-right",
                                                        children: "Inflow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4 text-right",
                                                        children: "Outflow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 pr-4 text-right",
                                                        children: "Net"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 text-right",
                                                        children: "Closing cash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/forecast/page.tsx",
                                            lineNumber: 207,
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
                                                            lineNumber: 220,
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
                                                            lineNumber: 221,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 pr-4 text-right",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.inflow)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 pr-4 text-right",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.outflow)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 pr-4 text-right",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.net)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `py-2 text-right font-semibold ${b.closingCash < 0 ? "text-red-600" : "text-stone-900"}`,
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.closingCash)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, b.label, true, {
                                                    fileName: "[project]/app/forecast/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/forecast/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/forecast/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 203,
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
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    cashInItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-stone-500",
                                        children: "No open receipts."
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 247,
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
                                                                lineNumber: 253,
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
                                                                lineNumber: 254,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-green-700",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(item.amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.billId, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 244,
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
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    forecast.outflowItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-stone-500",
                                        children: "No unpaid expenses."
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 271,
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
                                                                lineNumber: 277,
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
                                                                        lineNumber: 281,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/forecast/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-red-700",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(item.amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forecast/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.expenseId, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 242,
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
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-stone-500",
                                children: "Pick a customer and how many days late their payments arrive."
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 300,
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
                                                lineNumber: 305,
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
                                                        lineNumber: 311,
                                                        columnNumber: 17
                                                    }, this),
                                                    customers.map(([id, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: id,
                                                            children: name
                                                        }, id, false, {
                                                            fileName: "[project]/app/forecast/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 304,
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
                                                lineNumber: 320,
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
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "min-h-12 rounded-md bg-stone-900 px-5 text-white",
                                        children: "Run what-if"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 303,
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
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-2xl font-bold ${comparison.lowestCashChange < 0 ? "text-red-600" : "text-stone-900"}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(comparison.lowestCashChange)
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 342,
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
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 340,
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
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-2xl font-bold ${comparison.closingCash90Change < 0 ? "text-red-600" : "text-stone-900"}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(comparison.closingCash90Change)
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 356,
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
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 298,
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
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            chaseList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-500",
                                children: "No overdue bills."
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 376,
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
                                                        lineNumber: 385,
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
                                                        lineNumber: 388,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700",
                                                children: "Chase today"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forecast/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.billId, true, {
                                        fileName: "[project]/app/forecast/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/forecast/page.tsx",
                                lineNumber: 378,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forecast/page.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/forecast/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/forecast/page.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/forecast/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/forecast/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/forecast/ForecastCharts.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Server-compatible charts for the Cash Forecast page. Hand-drawn inline SVG,
// no client hooks and no chart library. All props are plain numbers/strings.
__turbopack_context__.s([
    "default",
    ()=>ForecastCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/money.ts [app-rsc] (ecmascript)");
;
;
const FORECAST_CHARTS_CSS = `
@keyframes forecast-draw {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}
@keyframes forecast-grow {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
.forecast-draw {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: forecast-draw 1.6s ease-out forwards;
}
.forecast-bar {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: forecast-grow 0.7s ease-out both;
}
@media (prefers-reduced-motion: reduce) {
  .forecast-draw {
    stroke-dasharray: none;
    stroke-dashoffset: 0;
    animation: none;
  }
  .forecast-bar {
    animation: none;
  }
}
`;
// SVG geometry shared by the two bar/line charts.
const W = 640;
const H = 280;
const PAD_L = 72;
const PAD_R = 20;
const PAD_T = 20;
const PAD_B = 36;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;
const EMERALD = "#10b981";
const ROSE = "#f43f5e";
const PALETTE = [
    "#10b981",
    "#f59e0b",
    "#0ea5e9",
    "#8b5cf6",
    "#f43f5e",
    "#78716c"
];
// Compact rupee label for axis ticks: ₹5L, ₹50k, ₹1.2Cr.
function compactRupees(n) {
    const sign = n < 0 ? "-" : "";
    const a = Math.abs(n);
    const trim = (x)=>Number(x.toFixed(1)).toString();
    if (a >= 10000000) return `${sign}₹${trim(a / 10000000)}Cr`;
    if (a >= 100000) return `${sign}₹${trim(a / 100000)}L`;
    if (a >= 1000) return `${sign}₹${trim(a / 1000)}k`;
    return `${sign}₹${Math.round(a)}`;
}
// Rounds a raw step up to a 1, 2, 2.5, 5 or 10 multiple of a power of ten.
function niceStep(raw) {
    const base = Math.pow(10, Math.floor(Math.log10(raw)));
    const f = raw / base;
    const nice = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10;
    return nice * base;
}
// Nice axis bounds and tick values covering all values. Guards against a
// zero range so the scale never divides by zero.
function makeScale(values) {
    const min = Math.min(...values);
    let max = Math.max(...values);
    if (!(max > min)) max = min + 1;
    const step = niceStep((max - min) / 4);
    const lo = Math.floor(min / step) * step;
    let hi = Math.ceil(max / step) * step;
    if (hi <= lo) hi = lo + step;
    const ticks = [];
    for(let t = lo; t <= hi + step / 2; t += step)ticks.push(t);
    return {
        lo,
        hi,
        ticks
    };
}
function scaleY(sc, v) {
    return PAD_T + (sc.hi - v) / (sc.hi - sc.lo) * PLOT_H;
}
function ChartCard({ title, subtitle, className = "", children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `rounded-2xl border border-stone-200 bg-white p-5 shadow-sm md:p-6 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-stone-900",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-stone-500",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forecast/ForecastCharts.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
function EmptyNote({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "py-10 text-center text-sm text-stone-500",
        children: text
    }, void 0, false, {
        fileName: "[project]/components/forecast/ForecastCharts.tsx",
        lineNumber: 130,
        columnNumber: 10
    }, this);
}
// Break mark and exact-amount label for a bar cut off at the top of the scale.
function ClippedMark({ x, w, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M${x - 1} ${PAD_T + 14} l${w + 2} -5 M${x - 1} ${PAD_T + 20} l${w + 2} -5`,
                stroke: "#ffffff",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x + w / 2,
                y: PAD_T - 4,
                textAnchor: "middle",
                fontSize: 10,
                fontWeight: 600,
                fill: "#44403c",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forecast/ForecastCharts.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
function ForecastCharts({ buckets, lowestCash, outflowItems }) {
    const n = buckets.length;
    // ----- Chart 1: cash balance area + line -----
    let cashChart;
    if (n === 0) {
        cashChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyNote, {
            text: "No weekly forecast data yet (Abhi koi data nahi)"
        }, void 0, false, {
            fileName: "[project]/components/forecast/ForecastCharts.tsx",
            lineNumber: 156,
            columnNumber: 17
        }, this);
    } else {
        const sc = makeScale([
            0,
            ...buckets.map((b)=>b.closingCash)
        ]);
        const xOf = (i)=>n === 1 ? PAD_L + PLOT_W / 2 : PAD_L + i * PLOT_W / (n - 1);
        const yOf = (v)=>scaleY(sc, v);
        const points = buckets.map((b, i)=>({
                x: xOf(i),
                y: yOf(b.closingCash)
            }));
        const linePath = points.map((p, i)=>`${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
        const baseY = yOf(0);
        const areaPath = `${linePath} L${xOf(n - 1).toFixed(1)} ${baseY.toFixed(1)} L${xOf(0).toFixed(1)} ${baseY.toFixed(1)} Z`;
        let minIdx = 0;
        buckets.forEach((b, i)=>{
            if (b.closingCash < buckets[minIdx].closingCash) minIdx = i;
        });
        const low = points[minIdx];
        const labelAbove = low.y - 14 > PAD_T + 2;
        const labelY = labelAbove ? low.y - 12 : low.y + 20;
        const labelX = Math.min(Math.max(low.x, PAD_L + 70), W - PAD_R - 70);
        cashChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: `0 0 ${W} ${H}`,
            width: "100%",
            className: "h-auto",
            role: "img",
            "aria-label": "Cash balance over 13 weeks line chart",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "forecast-cash-grad",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: EMERALD,
                                stopOpacity: "0.35"
                            }, void 0, false, {
                                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: EMERALD,
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this),
                sc.ticks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: PAD_L,
                                x2: W - PAD_R,
                                y1: yOf(t),
                                y2: yOf(t),
                                stroke: "#e7e5e4",
                                strokeWidth: 1
                            }, void 0, false, {
                                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: PAD_L - 8,
                                y: yOf(t) + 4,
                                textAnchor: "end",
                                fontSize: 11,
                                fill: "#78716c",
                                children: compactRupees(t)
                            }, void 0, false, {
                                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `g-${t}`, true, {
                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)),
                sc.lo < 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: PAD_L,
                    x2: W - PAD_R,
                    y1: baseY,
                    y2: baseY,
                    stroke: "#dc2626",
                    strokeWidth: 1.5,
                    strokeDasharray: "6 4"
                }, void 0, false, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: areaPath,
                    fill: "url(#forecast-cash-grad)"
                }, void 0, false, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: linePath,
                    fill: "none",
                    stroke: EMERALD,
                    strokeWidth: 3,
                    strokeLinejoin: "round",
                    strokeLinecap: "round",
                    pathLength: 1,
                    className: "forecast-draw"
                }, void 0, false, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this),
                buckets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: points[i].x,
                        cy: points[i].y,
                        r: 4,
                        fill: "#ffffff",
                        stroke: "#059669",
                        strokeWidth: 2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            children: `${b.label}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.closingCash)}`
                        }, void 0, false, {
                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this)
                    }, `p-${b.label}`, false, {
                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: low.x,
                    cy: low.y,
                    r: 6,
                    fill: ROSE,
                    stroke: "#ffffff",
                    strokeWidth: 2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: `Lowest: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(lowestCash)}`
                    }, void 0, false, {
                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: labelX,
                    y: labelY,
                    textAnchor: "middle",
                    fontSize: 12,
                    fontWeight: 600,
                    fill: "#be123c",
                    children: `Lowest ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(lowestCash)}`
                }, void 0, false, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                buckets.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: xOf(i),
                        y: H - PAD_B + 18,
                        textAnchor: "middle",
                        fontSize: 11,
                        fill: "#78716c",
                        children: `W${i + 1}`
                    }, `x-${i}`, false, {
                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/forecast/ForecastCharts.tsx",
            lineNumber: 178,
            columnNumber: 7
        }, this);
    }
    // ----- Chart 2: grouped inflow vs outflow bars -----
    let barChart;
    if (n === 0) {
        barChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyNote, {
            text: "No weekly forecast data yet (Abhi koi data nahi)"
        }, void 0, false, {
            fileName: "[project]/components/forecast/ForecastCharts.tsx",
            lineNumber: 285,
            columnNumber: 16
        }, this);
    } else {
        // Bar-only scale: the 90th percentile of the non-zero values sets the top
        // (times 1.5), so one outlier week cannot flatten the rest. Bars above it
        // are cut off at the plot top and labelled with their exact amount.
        const nonZero = buckets.flatMap((b)=>[
                b.inflow,
                b.outflow
            ]).filter((v)=>v !== 0).sort((a, b)=>a - b);
        const p90 = nonZero.length > 0 ? nonZero[Math.floor(0.9 * (nonZero.length - 1))] : 0;
        const barMax = nonZero.length > 0 ? Math.max(p90 * 1.5, 1) : 1;
        const barStep = niceStep(barMax / 4);
        const barHi = Math.ceil(barMax / barStep) * barStep;
        const barTicks = [];
        for(let t = 0; t <= barHi + barStep / 2; t += barStep)barTicks.push(t);
        const sc = {
            lo: 0,
            hi: barHi
        };
        const yOf = (v)=>scaleY(sc, v);
        const isClipped = (v)=>v > barMax;
        const barTopY = (v)=>isClipped(v) ? PAD_T : yOf(Math.max(0, v));
        const clippedCount = buckets.reduce((c, b)=>c + (isClipped(b.inflow) ? 1 : 0) + (isClipped(b.outflow) ? 1 : 0), 0);
        const baseY = yOf(0);
        const groupW = PLOT_W / n;
        const barW = Math.min(18, groupW * 0.3);
        barChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                clippedCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 text-xs text-stone-500",
                    children: "Bars above the scale are cut off; their exact amounts are labelled (Scale se bahar ki rakam ka label dekhiye)"
                }, void 0, false, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 315,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 flex flex-wrap gap-4 text-sm text-stone-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block h-3 w-3 rounded-sm bg-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                "Inflow (Aaya)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block h-3 w-3 rounded-sm bg-rose-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this),
                                "Outflow (Gaya)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: `0 0 ${W} ${H}`,
                    width: "100%",
                    className: "h-auto",
                    role: "img",
                    "aria-label": "Inflow versus outflow per week bar chart",
                    children: [
                        barTicks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: PAD_L,
                                        x2: W - PAD_R,
                                        y1: yOf(t),
                                        y2: yOf(t),
                                        stroke: "#e7e5e4",
                                        strokeWidth: 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: PAD_L - 8,
                                        y: yOf(t) + 4,
                                        textAnchor: "end",
                                        fontSize: 11,
                                        fill: "#78716c",
                                        children: compactRupees(t)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `g-${t}`, true, {
                                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)),
                        buckets.map((b, i)=>{
                            const cx = PAD_L + i * groupW + groupW / 2;
                            const inX = cx - barW - 2;
                            const outX = cx + 2;
                            const inH = Math.max(0, baseY - barTopY(b.inflow));
                            const outH = Math.max(0, baseY - barTopY(b.outflow));
                            const delay = `${i * 60}ms`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        className: "forecast-bar",
                                        style: {
                                            animationDelay: delay
                                        },
                                        x: inX,
                                        y: baseY - inH,
                                        width: barW,
                                        height: inH,
                                        rx: 3,
                                        fill: EMERALD,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                            children: `${b.label} · Inflow: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.inflow)}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                        lineNumber: 361,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        className: "forecast-bar",
                                        style: {
                                            animationDelay: delay
                                        },
                                        x: outX,
                                        y: baseY - outH,
                                        width: barW,
                                        height: outH,
                                        rx: 3,
                                        fill: ROSE,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                            children: `${b.label} · Outflow: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.outflow)}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                            lineNumber: 383,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                        lineNumber: 373,
                                        columnNumber: 17
                                    }, this),
                                    isClipped(b.inflow) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ClippedMark, {
                                        x: inX,
                                        w: barW,
                                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.inflow)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                        lineNumber: 386,
                                        columnNumber: 19
                                    }, this) : null,
                                    isClipped(b.outflow) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ClippedMark, {
                                        x: outX,
                                        w: barW,
                                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(b.outflow)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                        lineNumber: 389,
                                        columnNumber: 19
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: cx,
                                        y: H - PAD_B + 18,
                                        textAnchor: "middle",
                                        fontSize: 11,
                                        fill: "#78716c",
                                        children: `W${i + 1}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `bar-${b.label}`, true, {
                                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                lineNumber: 360,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: PAD_L,
                            x2: W - PAD_R,
                            y1: baseY,
                            y2: baseY,
                            stroke: "#a8a29e",
                            strokeWidth: 1
                        }, void 0, false, {
                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/forecast/ForecastCharts.tsx",
            lineNumber: 313,
            columnNumber: 7
        }, this);
    }
    // ----- Chart 3: donut of outflow by category -----
    const totals = new Map();
    for (const item of outflowItems){
        totals.set(item.category, (totals.get(item.category) ?? 0) + item.amount);
    }
    const slices = Array.from(totals.entries()).filter(([, v])=>v > 0).sort((a, b)=>b[1] - a[1]);
    const total = slices.reduce((sum, [, v])=>sum + v, 0);
    let donutChart;
    if (slices.length === 0 || total <= 0) {
        donutChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyNote, {
            text: "No upcoming expenses (Koi kharch nahi)"
        }, void 0, false, {
            fileName: "[project]/components/forecast/ForecastCharts.tsx",
            lineNumber: 421,
            columnNumber: 18
        }, this);
    } else {
        const R = 70;
        const STROKE = 26;
        const C = 2 * Math.PI * R;
        let offset = 0;
        donutChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-6 sm:flex-row sm:items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 200",
                    className: "h-auto w-48 shrink-0",
                    role: "img",
                    "aria-label": "Outflow by category donut chart",
                    children: [
                        slices.map(([category, value], i)=>{
                            const len = value / total * C;
                            const seg = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: 100,
                                cy: 100,
                                r: R,
                                fill: "none",
                                stroke: PALETTE[i % PALETTE.length],
                                strokeWidth: STROKE,
                                strokeDasharray: `${len} ${C - len}`,
                                strokeDashoffset: -offset,
                                transform: "rotate(-90 100 100)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                    children: `${category}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(value)}`
                                }, void 0, false, {
                                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                    lineNumber: 450,
                                    columnNumber: 17
                                }, this)
                            }, `seg-${category}`, false, {
                                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                lineNumber: 438,
                                columnNumber: 15
                            }, this);
                            offset += len;
                            return seg;
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 100,
                            y: 94,
                            textAnchor: "middle",
                            fontSize: 11,
                            fill: "#78716c",
                            children: "Total"
                        }, void 0, false, {
                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 100,
                            y: 114,
                            textAnchor: "middle",
                            fontSize: 13,
                            fontWeight: 700,
                            fill: "#1c1917",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(total)
                        }, void 0, false, {
                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 429,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "w-full flex-1 divide-y divide-stone-200",
                    children: slices.map(([category, value], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center justify-between gap-3 py-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 font-medium text-stone-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block h-3 w-3 rounded-sm",
                                            style: {
                                                backgroundColor: PALETTE[i % PALETTE.length]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                            lineNumber: 468,
                                            columnNumber: 17
                                        }, this),
                                        category
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right text-stone-600",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRupees"])(value),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-stone-500",
                                            children: [
                                                "(",
                                                (value / total * 100).toFixed(1),
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `legend-${category}`, true, {
                            fileName: "[project]/components/forecast/ForecastCharts.tsx",
                            lineNumber: 466,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/forecast/ForecastCharts.tsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/forecast/ForecastCharts.tsx",
            lineNumber: 428,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: FORECAST_CHARTS_CSS
                }
            }, void 0, false, {
                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "Cash balance over 13 weeks (Nakad balance)",
                        subtitle: "Closing cash at the end of each week",
                        className: "lg:col-span-2",
                        children: cashChart
                    }, void 0, false, {
                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "Inflow vs outflow per week (Aaya vs Gaya)",
                        subtitle: "Money coming in and going out, week by week",
                        children: barChart
                    }, void 0, false, {
                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "Where the cash goes (Kharch ka breakdown)",
                        subtitle: "Upcoming expenses grouped by category",
                        children: donutChart
                    }, void 0, false, {
                        fileName: "[project]/components/forecast/ForecastCharts.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forecast/ForecastCharts.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forecast/ForecastCharts.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0gn560kiybrmn._.js.map
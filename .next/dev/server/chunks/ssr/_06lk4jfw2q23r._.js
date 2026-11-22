module.exports = [
"[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/products/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "401fd61039e40d606fdc5c2e73f25c80fbf2b54954",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductPrice"],
    "4036aa3920d6eaa1439d649359af083b034570fcfc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveProductPrice"],
    "40f2c2797d47d2aa2d6756b9465b508ce4fdd0b08b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"],
    "605e4061a683506470b89bc2d7d1ec9216f85e6099",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProduct"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$products$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => "[project]/app/products/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/products/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/products/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/products/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/app/products/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401fd61039e40d606fdc5c2e73f25c80fbf2b54954":{"name":"updateProductPrice"},"4036aa3920d6eaa1439d649359af083b034570fcfc":{"name":"saveProductPrice"},"40f2c2797d47d2aa2d6756b9465b508ce4fdd0b08b":{"name":"deleteProduct"},"605e4061a683506470b89bc2d7d1ec9216f85e6099":{"name":"createProduct"}},"app/products/actions.ts",""] */ __turbopack_context__.s([
    "createProduct",
    ()=>createProduct,
    "deleteProduct",
    ()=>deleteProduct,
    "saveProductPrice",
    ()=>saveProductPrice,
    "updateProductPrice",
    ()=>updateProductPrice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function updateProductPrice(formData) {
    const idRaw = String(formData.get("id") ?? "").trim();
    const priceRaw = String(formData.get("price") ?? "").trim();
    const id = Number(idRaw);
    if (!idRaw || !Number.isInteger(id) || id <= 0) {
        return {
            ok: false,
            error: "Invalid product (Galat saman)"
        };
    }
    const price = Number(priceRaw);
    if (!priceRaw || !Number.isInteger(price) || price < 1 || price > 100000) {
        return {
            ok: false,
            error: "Enter a whole-number price between 1 and 100000 (Daam 1 se 100000 ke beech likhiye)"
        };
    }
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product.findUnique({
            where: {
                id
            },
            select: {
                id: true
            }
        });
        if (!existing) return {
            ok: false,
            error: "Product not found (Saman nahi mila)"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product.update({
            where: {
                id
            },
            data: {
                pricePerUnit: price
            }
        });
    } catch  {
        return {
            ok: false,
            error: "Could not save price (Daam save nahi ho paya, dobara try kijiye)"
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/bill/new");
    return {
        ok: true
    };
}
async function saveProductPrice(formData) {
    await updateProductPrice(formData);
}
async function deleteProduct(formData) {
    const idRaw = String(formData.get("id") ?? "").trim();
    const id = Number(idRaw);
    if (!idRaw || !Number.isInteger(id) || id <= 0) {
        return;
    }
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product.findUnique({
            where: {
                id
            },
            select: {
                id: true
            }
        });
        if (!existing) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product.delete({
            where: {
                id
            }
        });
    } catch  {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/bill/new");
}
const PRODUCT_UNITS = [
    "KG",
    "L",
    "PIECE"
];
async function createProduct(_prevState, formData) {
    const name = String(formData.get("name") ?? "").trim();
    const nameHi = String(formData.get("nameHi") ?? "").trim();
    const category = String(formData.get("category") ?? "").trim();
    const unit = String(formData.get("unit") ?? "").trim();
    const priceRaw = String(formData.get("pricePerUnit") ?? "").trim();
    if (!name || name.length > 80) {
        return {
            ok: false,
            error: "Name is required, up to 80 characters (Naam zaroori hai, 80 akshar tak)"
        };
    }
    if (!category || category.length > 60) {
        return {
            ok: false,
            error: "Category is required, up to 60 characters (Shreni zaroori hai, 60 akshar tak)"
        };
    }
    if (!PRODUCT_UNITS.includes(unit)) {
        return {
            ok: false,
            error: "Choose a valid unit (Sahi unit chuniye)"
        };
    }
    const price = Number(priceRaw);
    if (!priceRaw || !Number.isInteger(price) || price < 1 || price > 100000) {
        return {
            ok: false,
            error: "Enter a whole-number price between 1 and 100000 (Daam 1 se 100000 ke beech likhiye)"
        };
    }
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product.findMany({
            select: {
                name: true
            }
        });
        const lower = name.toLowerCase();
        if (existing.some((p)=>p.name.trim().toLowerCase() === lower)) {
            return {
                ok: false,
                error: "A product with this name already exists (Yeh saman pehle se maujood hai)"
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product.create({
            data: {
                name,
                nameHi: nameHi || null,
                category,
                unit,
                pricePerUnit: price
            }
        });
    } catch  {
        return {
            ok: false,
            error: "Could not add item (Saman add nahi ho paya, dobara try kijiye)"
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/bill/new");
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateProductPrice,
    saveProductPrice,
    deleteProduct,
    createProduct
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductPrice, "401fd61039e40d606fdc5c2e73f25c80fbf2b54954", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveProductPrice, "4036aa3920d6eaa1439d649359af083b034570fcfc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "40f2c2797d47d2aa2d6756b9465b508ce4fdd0b08b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProduct, "605e4061a683506470b89bc2d7d1ec9216f85e6099", null);
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
];

//# sourceMappingURL=_06lk4jfw2q23r._.js.map
import { parseStatusParam, FILTER_STATUSES } from "../../lib/udhaarList";

const all = parseStatusParam("ALL");
const def = parseStatusParam(undefined);
const okAll = JSON.stringify(all) === JSON.stringify([...FILTER_STATUSES]);
const okDef = JSON.stringify(def) === JSON.stringify(["OVERDUE", "UNPAID"]);
console.log(JSON.stringify({ all, def, okAll, okDef }));
if (!okAll || !okDef) {
  console.log("CHECK FAIL");
  process.exit(1);
}
console.log("CHECK PASS");

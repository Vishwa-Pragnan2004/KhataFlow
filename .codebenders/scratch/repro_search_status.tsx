import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import CustomerSearch from "../../components/CustomerSearch";

const customers = [{ id: 1, name: "Ram Kumar" }];
const html = renderToStaticMarkup(
  createElement(CustomerSearch, { customers, defaultValue: "", status: undefined }),
);
const hidden = html.match(/<input[^>]*type="hidden"[^>]*>/g) ?? [];
console.log("hidden inputs with status prop undefined:", JSON.stringify(hidden));
console.log("form has name=status input:", /name="status"/.test(html));

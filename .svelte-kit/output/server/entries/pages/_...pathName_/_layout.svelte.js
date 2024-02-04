import { c as create_ssr_component, b as subscribe } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

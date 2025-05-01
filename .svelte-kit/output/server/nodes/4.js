import * as server from '../entries/pages/_...pathName_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_...pathName_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[...pathName]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.kVo0sPsM.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/index.pcUX0N4E.js","_app/immutable/chunks/searchStores._Z4E9g3a.js","_app/immutable/chunks/entry.fXVk5d1S.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.n9Zjv6kz.js"];
export const stylesheets = ["_app/immutable/assets/4.JBvwbS5s.css"];
export const fonts = [];

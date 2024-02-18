import * as server from '../entries/pages/_...pathName_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_...pathName_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[...pathName]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.bE0leO5e.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/index.pcUX0N4E.js","_app/immutable/chunks/searchStores.nRcNlJAN.js","_app/immutable/chunks/entry.ji9AbM62.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.kSkbOczK.js"];
export const stylesheets = ["_app/immutable/assets/4.JBvwbS5s.css"];
export const fonts = [];

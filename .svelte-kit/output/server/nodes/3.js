import * as universal from '../entries/pages/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/3.81hqOWr5.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/index.pcUX0N4E.js"];
export const stylesheets = [];
export const fonts = [];

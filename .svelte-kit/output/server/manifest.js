export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.nJuVnQ1d.js","app":"_app/immutable/entry/app.w7xDpSMa.js","imports":["_app/immutable/entry/start.nJuVnQ1d.js","_app/immutable/chunks/entry.BE8a1D_m.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.w7xDpSMa.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/index.pcUX0N4E.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

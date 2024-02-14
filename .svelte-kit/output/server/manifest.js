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
		client: {"start":"_app/immutable/entry/start.4unL4Dwi.js","app":"_app/immutable/entry/app.i6cKJlq1.js","imports":["_app/immutable/entry/start.4unL4Dwi.js","_app/immutable/chunks/entry.8WG6dXE7.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.i6cKJlq1.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/index.pcUX0N4E.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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

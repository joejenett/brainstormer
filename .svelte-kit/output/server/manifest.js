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
		client: {"start":"_app/immutable/entry/start.aoXpZ32q.js","app":"_app/immutable/entry/app.iW3QXV5n.js","imports":["_app/immutable/entry/start.aoXpZ32q.js","_app/immutable/chunks/entry.c3PVozKO.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.iW3QXV5n.js","_app/immutable/chunks/scheduler.RVZl7Ocu.js","_app/immutable/chunks/index.pcUX0N4E.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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

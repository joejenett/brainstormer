
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n<div style=\"padding:3px 12px;background:#dedede;margin-bottom:6px;\">\n<a href=\"javascript:history.go(-1)\">\n<button style=\"background:white;font-family:'Courier New',serif;padding:1px 3px;border:1px solid #999;margin-bottom:3px;\">&lt;&mdash;go back</button>\n</a>\n<a href=\"https://ideas.joejenett.com/\">\n<button style=\"background:white;font-family:'Courier New',serif;padding:1px 3px;border:1px solid #999;margin-bottom:3px;\">🌱 joe.ideas.&mdash;&gt;</button>\n</a>\n</div>\n\t\t<div style=\"display: contents\">" + body + "</div>\n<div style=\"text-align:left;padding:14px;\">\n<div style=\"padding-bottom:14px;\">\n<a href=\"https://iwebthings.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/iwp.png\" width=\"160\" alt=\"\"></a>\n</div>\n<div style=\"display:flex;flex-wrap:nowrap;\">\n<a title=\"i.webthings, an independent and noncommercial web initiative\" href=\"https://iwebthings.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/iwt-button.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a><a title=\"it’s personal. and micro. — simply.\" href=\"https://simply.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/simply-button.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a><a title=\"an eclectic selection of sites to explore, curated by a fellow human\" href=\"https://directory.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/iwd.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a>\n</div>\n<div style=\"display:flex;flex-wrap:nowrap;\">\n<a title=\"a pile of tasty miscellany\" href=\"https://wiki.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/jenett-wiki.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a><a title=\"a new take\" href=\"https://bulltown.2022.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/b22button.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a><a title=\"joe’s little digital garden\" href=\"https://ideas.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/ji.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a>\n</div>\n<div style=\"display:flex;flex-wrap:nowrap;\">\n<a title=\"a combined collection of posts from the dailywebthing linkport and dailywebthing daily pointers, spanning several decades\" href=\"https://dwt-archives.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/dwt-archives.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a><a title=\"This is where my web lives.\" href=\"https://joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/aka.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a><a title=\"joe’s new brainstormer\" href=\"https://brainstormer.joejenett.com/\"><img src=\"https://ideas.joejenett.com/images/joe.brainstormer.png\" alt=\"\" width=\"66\" style=\"margin:1px;\"></a>\n</div>\n</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "su0yif"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };

const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","files/Aigerim_Gilmanova2.pdf","global.css","images/pic2.png"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-7f168f11.js","imports":["_app/immutable/start-7f168f11.js","_app/immutable/chunks/index-dc6137a2.js","_app/immutable/chunks/singletons-579b8ca9.js","_app/immutable/chunks/paths-6cd3a76e.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-440389e0.js'),
			() => import('./chunks/1-b3af0a77.js'),
			() => import('./chunks/2-a6c6cfd6.js'),
			() => import('./chunks/3-e718f6c9.js'),
			() => import('./chunks/4-81c7b0cb.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "contacts",
				pattern: /^\/contacts\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "randog",
				pattern: /^\/randog\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map

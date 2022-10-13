// const dev = process.env.NODE_ENV === 'development';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			assets: 'https://aigerimu.github.io'
		},
		// prerender: {
		// 	// entries:[],
		// 	default: true
		// },

		appDir: 'internal',
	}
};

export default config;

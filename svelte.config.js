// const dev = process.env.NODE_ENV === 'development';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		// prerender: {
		// 	// entries:[],
		// 	default: true
		// },
		// paths: {
		// 	base: dev ? '' : '/Aigerim',
		// },
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		appDir: 'internal',
	}
};

export default config;

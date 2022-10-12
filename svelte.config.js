const dev = process.env.NODE_ENV === 'development';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	paths: {
		base: dev ? '' : '/aigerimu.github.io',
	},
	// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
	// For example, instead of '_app', use 'app_', 'internal', etc.
	appDir: 'internal',
};

export default config;

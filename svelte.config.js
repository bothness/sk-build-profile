import adapter from '@sveltejs/adapter-static';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback:'404.html'
		}),
		prerender: {
			enabled: false
		},
		paths: {
			assets: production ? 'https://bothness.github.io/sk-build-profile' : '',
			base: production ? '/sk-build-profile' : ''
		}
	}
};

export default config;

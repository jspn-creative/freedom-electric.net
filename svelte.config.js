import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$components: 'src/lib/components',
			$utils: 'src/lib/utils',
			$static: 'static',
			$lib: 'src/lib',
			// $types: 'src/lib/types',
		},
		adapter: adapter()
	}
};

export default config;

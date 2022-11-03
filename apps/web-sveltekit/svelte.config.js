import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter({ edge: true }),
		env: {
			// The prefix used by public (available in the client) env variables
			// See the .env.example file for an example
			publicPrefix: "PUBLIC",
		},
		// These are aliases used by external packages
		alias: {
			// Aliases for the «common» package
			"@/types/*": "../../packages/common/src/types/*",
			"@/clients/*": "../../packages/common/src/clients/*",
			"@/content/*": "../../packages/common/src/content/*",
			"@/utils/*": "../../packages/common/src/utils/*",
			"@/sanity/*": "../../packages/common/src/sanity/*",
		},
	},
};

export default config;

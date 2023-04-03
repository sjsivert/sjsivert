/**
 * This is the default config for Sanity
 */
export interface SanityConfig {
	projectId: string;
	dataset: string;
	token?: string;
	useCdn?: boolean;
	apiVersion?: string;
}

/**
 * Takes some params and returns the Sanity client config
 */
export function getSanityConfig(config: SanityConfig): SanityConfig {
	return {
		projectId: config.projectId,
		dataset: config.dataset,
		token: config.token,
		apiVersion: config.apiVersion || "2021-03-25",
		useCdn: config.useCdn || true,
	};
}

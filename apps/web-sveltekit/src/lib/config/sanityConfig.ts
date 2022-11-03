import { SANITY_SECRET_TOKEN } from "$env/static/private";
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";
import type { SanityConfig } from "common/src/clients/config";
import { getSanityConfig as commonGetSanityConfig } from "common/src/clients/config";

/**
 * Returns the correct sanity config
 * @returns
 */
export function getSanityConfig(): SanityConfig {
	return commonGetSanityConfig({
		projectId: PUBLIC_SANITY_PROJECT_ID,
		dataset: PUBLIC_SANITY_DATASET,
		token: SANITY_SECRET_TOKEN,
	});
}

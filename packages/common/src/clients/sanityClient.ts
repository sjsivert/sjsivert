import PicoSanity from "picosanity";

import { SanityConfig } from "./config";

/**
 * Returns the correct Sanity client based on the preview param
 * When preview is true/active, no CDN is used since we want drafts
 */
export function getSanityClient(config: SanityConfig, preview = false) {
	return preview ? new PicoSanity({ ...config, useCdn: false }) : new PicoSanity(config);
}

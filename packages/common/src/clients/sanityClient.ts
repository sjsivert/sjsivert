import PicoSanity from "picosanity";

import { sanityConfig } from "./config";

/**
 * The Sanity client used for preview
 * should not use a cdn (we want _drafts)
 */
const previewClient = new PicoSanity({
	...sanityConfig,
	useCdn: false,
});

/**
 * The "regular" Sanity client
 */
const sanityClient = new PicoSanity(sanityConfig);

/**
 * Returns the correct Sanity client based on the preview param
 */
export function getSanityClient(preview = false) {
	return preview ? previewClient : sanityClient;
}

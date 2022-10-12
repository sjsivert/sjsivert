import { createClient } from "next-sanity";

import { sanityConfig } from "./config";

/**
 * The Sanity client used for preview
 * should not use a cdn
 */
const previewClient = createClient({
    ...sanityConfig,
    useCdn: false,
});

/**
 * The "regular" Sanity client
 */
const sanityClient = createClient(sanityConfig);

/**
 * Returns the correct Sanity client based on the preview param
 */
export function getSanityClient(preview = false) {
    return preview ? previewClient : sanityClient;
}

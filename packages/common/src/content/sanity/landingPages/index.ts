import { getSanityClient } from "@/clients/sanityClient";
import { LandingPage } from "@/types/sanity/landingPage";
import type { SanityConfig } from "@/clients/config";

import { landingPageGroq } from "./groq";

/**
 * Fetches a landing page (including drafts) for a given slug
 * @param preview
 * @param slug
 * @returns
 */
export async function getLandingPageDocumentsBySlug(
	config: SanityConfig,
	preview: boolean,
	slug: string
): Promise<Array<LandingPage>> {
	const data = await getSanityClient(config, preview).fetch<Array<LandingPage>>(landingPageGroq, { slug });
	return data;
}

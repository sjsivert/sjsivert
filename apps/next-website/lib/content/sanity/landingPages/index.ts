import { getSanityClient } from "@/lib/clients/sanityClient";
import { LandingPage } from "@/lib/types/sanity/landingPage";

import { landingPageGroq } from "./groq";

/**
 * Fetches a landing page (including drafts) for a given slug
 * @param preview
 * @param slug
 * @returns
 */
export async function getLandingPageDocumentsBySlug(preview: boolean, slug: string): Promise<Array<LandingPage>> {
	const data = await getSanityClient(preview).fetch<Array<LandingPage>>(landingPageGroq, { slug });
	return data;
}

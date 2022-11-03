import { getSanityClient } from "@/clients/sanityClient";
import { LandingPageBase } from "@/types/sanity/landingPage";
import type { SanityConfig } from "@/clients/config";

import { homePageGroq } from "./groq";

/**
 * fetches the home page document(s), including drafts
 * @param preview
 * @returns
 */
export async function getHomePageDocuments(config: SanityConfig, preview: boolean): Promise<Array<LandingPageBase>> {
	const data = await getSanityClient(config, preview).fetch<Array<LandingPageBase>>(homePageGroq);
	return data;
}

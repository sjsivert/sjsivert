import { getSanityClient } from "@/clients/sanityClient";
import { LandingPageBase } from "@/types/sanity/landingPage";

import { homePageGroq } from "./groq";

/**
 * fetches the home page document(s), including drafts
 * @param preview
 * @returns
 */
export async function getHomePageDocuments(preview: boolean): Promise<Array<LandingPageBase>> {
	const data = await getSanityClient(preview).fetch<Array<LandingPageBase>>(homePageGroq);
	return data;
}

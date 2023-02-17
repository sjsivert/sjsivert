import type { SanityConfig } from "@/clients/config";
import { getSanityClient } from "@/clients/sanityClient";

import { LandingPageBase, LandingPageBaseSanityData } from "@/types/sanity/landingPage";

import { handleLocalizationForLandingPage } from "../landingPages";

export const homePageGroq = `*[_type == "pageHome"]{
	...,
	pageItems[] {
		...,
		_type == "landingPageItemArticleSection" => {
			articleReferences[]-> { 
				...,
				collection->,
				"path": collection->.path.current,
				  "slug": slug.current
			 },
		},
	},	
}`;

/**
 * fetches the home page document(s), including drafts
 * @param preview
 * @returns
 */
export async function getHomePageDocuments(
	config: SanityConfig,
	lang: string,
	preview: boolean
): Promise<Array<LandingPageBase>> {
	const data = await getSanityClient(config, preview).fetch<Array<LandingPageBaseSanityData>>(homePageGroq);

	// handle locales
	return data.map((page) => {
		return handleLocalizationForLandingPage(page, lang);
	});
}

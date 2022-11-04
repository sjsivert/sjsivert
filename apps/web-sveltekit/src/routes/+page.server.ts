import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { getHomePageDocuments } from "common/src/content/sanity/homePage";
import { filterDataToSingleItem } from "common/src/utils/sanity/";

export const load: PageServerLoad = async ({ locals }) => {
	const preview = locals.preview;
	const homePageDocs = await getHomePageDocuments(getSanityConfig(), preview);

	// Filter down to one document
	const homePageData = filterDataToSingleItem(homePageDocs, preview);

	return { homePageData };
};

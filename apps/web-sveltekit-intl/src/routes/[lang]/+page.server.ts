import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getHomePageDocuments } from "common/src/content/sanity-intl/homePage";
import { filterDataToSingleItem } from "common/src/utils/sanity/";

export const load: PageServerLoad = async ({ locals }) => {
	const preview = locals.preview;
	const homePageDocs = await getHomePageDocuments(getSanityConfig(), locals.locale, preview);

	// Filter down to one document
	const homePageData = filterDataToSingleItem(homePageDocs, preview);

	if (homePageData) return { homePageData };

	throw error(404, "Page not found");
};

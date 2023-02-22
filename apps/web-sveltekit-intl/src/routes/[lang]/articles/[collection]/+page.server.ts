import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { getAllArticlesForCollection } from "common/src/content/sanity-intl/articles";

export const load: PageServerLoad = async ({ params, locals }) => {
	const articles = await getAllArticlesForCollection(getSanityConfig(), params.collection, locals.locale);
	return { articles };
};

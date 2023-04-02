import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { getArticlesBySlug } from "common/src/content/sanity/articles";
import { filterDataToSingleItem } from "common/src/utils/sanity/";

export const load: PageServerLoad = async ({ params, locals }) => {
	const preview = locals.preview;
	const articles = await getArticlesBySlug(getSanityConfig(), preview, params.collection, params.slug);

	const article = filterDataToSingleItem(articles, preview);

	return { article };
};

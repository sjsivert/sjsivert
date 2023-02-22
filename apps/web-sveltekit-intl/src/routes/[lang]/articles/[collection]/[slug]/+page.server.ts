import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getArticlesBySlug } from "common/src/content/sanity-intl/articles";
import { filterDataToSingleItem } from "common/src/utils/sanity/";

export const load: PageServerLoad = async ({ params, locals }) => {
	const preview = locals.preview;

	const articles = await getArticlesBySlug(getSanityConfig(), preview, params.collection, params.slug, locals.locale);

	const article = filterDataToSingleItem(articles, preview);

	if (article) return { article };

	throw error(404, "Article not found");
};

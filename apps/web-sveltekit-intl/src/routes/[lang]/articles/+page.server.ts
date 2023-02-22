import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { getAllArticles } from "common/src/content/sanity-intl/articles";

export const load: PageServerLoad = async ({ locals }) => {
	const articles = await getAllArticles(getSanityConfig(), locals.locale);
	return { articles };
};

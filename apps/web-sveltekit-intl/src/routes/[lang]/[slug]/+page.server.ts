import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getLandingPageDocumentsBySlug } from "common/src/content/sanity-intl/landingPages";
import { filterDataToSingleItem } from "common/src/utils/sanity/";

export const load: PageServerLoad = async ({ params, locals }) => {
	const preview = locals.preview;

	const pages = await getLandingPageDocumentsBySlug(getSanityConfig(), preview, params.slug, locals.locale);
	const page = filterDataToSingleItem(pages, preview);

	if (!page) {
		throw error(404, `Landing page with slug ${params.slug} was not found`);
	}

	return { page };
};

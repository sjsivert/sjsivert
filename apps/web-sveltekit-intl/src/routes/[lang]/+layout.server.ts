import { getSanityConfig } from "$lib/config/sanityConfig";
import type { LayoutServerLoad } from "./$types";
import { getMainMenuAndFooterData } from "common/src/content/sanity-intl/allPages/";

export const load: LayoutServerLoad = async ({ locals }) => {
	const data = await getMainMenuAndFooterData(getSanityConfig(), locals.locale);
	return { headerAndFooterData: data, preview: locals.preview };
};

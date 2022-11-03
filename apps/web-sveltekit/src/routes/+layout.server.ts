import { getSanityConfig } from "$lib/config/sanityConfig";
import type { LayoutServerLoad } from "./$types";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages/";
import type { MainMenuAndFooter } from "common/src/types/sanity/allPages/";

export const load: LayoutServerLoad<MainMenuAndFooter> = async () => {
	const data = await getMainMenuAndFooterData(getSanityConfig());
	return data;
};

import { getSanityClient } from "@/clients/sanityClient";
import { MainMenuAndFooter } from "@/types/sanity/allPages";
import { Footer } from "@/types/sanity/allPages/footer";
import { MainMenu } from "@/types/sanity/allPages/mainMenu";

/**
 * Fetches data for the main menu and the footer
 * This will be used for all pages
 * @returns
 */
export async function getMainMenuAndFooterData(): Promise<MainMenuAndFooter> {
	const query = `{
		"footer": *[_type == "siteFooter" && !(_id in path("drafts.**"))][0],
		"mainMenu": *[_type == "mainMenu" && !(_id in path("drafts.**"))][0]
	}`;
	const { mainMenu, footer } = await getSanityClient().fetch<{ footer: Footer; mainMenu: MainMenu }>(query);

	return { mainMenu, footer };
}

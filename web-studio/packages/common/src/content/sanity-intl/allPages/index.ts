import type { SanityConfig } from "@/clients/config";
import SchemaType from "@/sanity/SchemaType";

import { getSanityClient } from "@/clients/sanityClient";

import { MainMenuAndFooter } from "@/types/sanity/allPages";
import { Footer, FooterLink, FooterSanityData } from "@/types/sanity/allPages/footer";
import { MainMenuSanityData } from "@/types/sanity/allPages/mainMenu";

import { getLocalizedStringForLocaleObject } from "../../../locales/languages";

/**
 * Fetches data for the main menu and the footer
 * This will be used for all pages
 * @returns
 */
export async function getMainMenuAndFooterData(config: SanityConfig, locale: string): Promise<MainMenuAndFooter> {
	const query = `{
		"footerData": *[_type == "siteFooter" && !(_id in path("drafts.**"))][0],
		"mainMenuData": *[_type == "mainMenu" && !(_id in path("drafts.**"))][0]
	}`;

	// Get the localized data from Sanity (includes all languages)
	const { mainMenuData, footerData } = await getSanityClient(config).fetch<{
		footerData: FooterSanityData;
		mainMenuData: MainMenuSanityData;
	}>(query);

	// Handle locales for the footer
	const footerLinks: Array<FooterLink> = footerData.footerLinks.map((fl) => {
		return { ...fl, footerLinkTitle: getLocalizedStringForLocaleObject(fl.footerLinkTitle, locale) };
	});
	const footer: Footer = {
		...footerData,
		footerText: getLocalizedStringForLocaleObject(footerData.footerText, locale),
		footerLinks,
	};

	// Handle locales for the header
	const menuItems = mainMenuData.menuItems.map((mi) => {
		if (mi._type === SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT) {
			return {
				...mi,
				label: typeof mi.label === "string" ? mi.label : getLocalizedStringForLocaleObject(mi.label, locale),
			};
		}
		// Sub menu item
		const subItems = mi.subItems.map((si) => {
			return {
				...si,
				label: typeof si.label === "string" ? si.label : getLocalizedStringForLocaleObject(si.label, locale),
			};
		});
		return {
			...mi,
			label: typeof mi.label === "string" ? mi.label : getLocalizedStringForLocaleObject(mi.label, locale),
			subItems,
		};
	});
	const mainMenu = { ...mainMenuData, menuItems };

	// Good to go
	return { mainMenu, footer };
}

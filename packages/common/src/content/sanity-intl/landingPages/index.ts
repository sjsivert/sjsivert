import type { SanityConfig } from "@/clients/config";

import { getSanityClient } from "@/clients/sanityClient";

import {
	LandingPage,
	LandingPageBase,
	LandingPageBaseSanityData,
	LandingPageComponents,
	LandingPageComponentsSanityData,
	LandingPageSanityData,
} from "@/types/sanity/landingPage";

import { getLocalizedStringForLocaleObject } from "../../../locales/languages";
import SchemaType from "../../../sanity/SchemaType";
import { handleLocalizationForAccessibleImage } from "../utils/accessibleImage";

/**
 * Fetches a landing page (including drafts) for a given slug
 * @param preview
 * @param slug
 * @returns
 */
export async function getLandingPageDocumentsBySlug(
	config: SanityConfig,
	preview: boolean,
	slug: string,
	lang: string
): Promise<Array<LandingPage>> {
	const query = `*[_type == "pageLandingPage" && slug.current == $slug]{
		...,
		"slug": slug.current,
		pageItems[] {
			...,
			_type == "reference" => @->,
			_type == "landingPageItemArticleSection" => {
				articleReferences[]-> { 
					...,
					collection->,
					"path": collection->.path.current,
					  "slug": slug.current
				 },
			},
		},	
	}`;
	const data = await getSanityClient(config, preview).fetch<Array<LandingPageSanityData>>(query, { slug });
	return data.map((page) => {
		return handleLocalizationForLandingPage(page, lang) as LandingPage;
	});
}

/**
 * Returns only the slug for all landing pages
 * Used to generate a sitemap or for generateStaticParams
 * @param config
 * @returns
 */
export async function getAllLandingPagesForSitemap(config: SanityConfig): Promise<Array<{ slug: string }>> {
	const query = `*[_type == "pageLandingPage" && !(_id in path("drafts.**"))] {
		"slug": slug.current,
	}`;
	const data = await getSanityClient(config).fetch<Array<{ slug: string }>>(query);
	return data;
}

/**
 * Handles localization for landing pages (and other pages using the same data structure)
 */
export function handleLocalizationForLandingPage(
	page: LandingPageSanityData | LandingPageBaseSanityData,
	lang: string
): LandingPage | LandingPageBase {
	const pageItems = page.pageItems.map((item) => {
		return handleLocalizationForLandingPageItem(item, lang);
	});

	return {
		...page,
		title: getLocalizedStringForLocaleObject(page.title, lang),
		description: getLocalizedStringForLocaleObject(page.description, lang),
		pageItems,
	};
}

/**
 * Handles localization key for the page items (landing page components)
 * Note that you can do this in the component serializer or in the React component.
 * In this example the handling is done as close to the source as possible so you don't
 * need to worry about locales in the UI layer
 */
function handleLocalizationForLandingPageItem(
	item: LandingPageComponentsSanityData,
	lang: string
): LandingPageComponents {
	switch (item._type) {
		case SchemaType.LANDING_PAGE_ITEM_HERO:
			return {
				...item,
				title: getLocalizedStringForLocaleObject(item.title, lang),
				bodyText: getLocalizedStringForLocaleObject(item.bodyText, lang),
				callToActionLabel: getLocalizedStringForLocaleObject(item.callToActionLabel, lang),
				backgroundImage:
					item.backgroundImage && handleLocalizationForAccessibleImage(item.backgroundImage, lang),
				heroImage: handleLocalizationForAccessibleImage(item.heroImage, lang),
			};
		case SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR:
			return {
				...item,
				bodyText: getLocalizedStringForLocaleObject(item.bodyText, lang),
				callToActionLabel: getLocalizedStringForLocaleObject(item.callToActionLabel, lang),
			};
		case SchemaType.GLOBAL_COMP_ALERT:
			return {
				...item,
				title: getLocalizedStringForLocaleObject(item.title, lang),
				alertText: getLocalizedStringForLocaleObject(item.alertText, lang),
			};
		case SchemaType.GLOBAL_COMP_INFO_BOX:
			return {
				...item,
				title: getLocalizedStringForLocaleObject(item.title, lang),
				infoText: getLocalizedStringForLocaleObject(item.infoText, lang),
			};
		default:
			return item as unknown as LandingPageComponents;
	}
}

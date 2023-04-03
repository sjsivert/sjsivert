import SchemaType from "@/sanity/SchemaType";
import { SanityDocument } from "@sanity/types";

import { Locale } from "@/types/sanity/common";

import { GlobalAlert, GlobalAlertSanityData } from "../globalComponents/alert";
import { GlobalInfoBox, GlobalInfoBoxSanityData } from "../globalComponents/infoBox";
import { PageItemArticleSection, PageItemArticleSectionSanityData } from "./pageItemArticleSection";
import { PageItemCallToActionBar, PageItemCallToActionBarSanityData } from "./pageItemCallToActionBar";
import { PageItemHero, PageItemHeroSanityData } from "./pageItemHero";

export type LandingPageComponents =
	| PageItemHero
	| PageItemArticleSection
	| PageItemCallToActionBar
	| GlobalAlert
	| GlobalInfoBox;

export type LandingPageComponentsSanityData =
	| PageItemHeroSanityData
	| PageItemArticleSectionSanityData
	| PageItemCallToActionBarSanityData
	| GlobalAlertSanityData
	| GlobalInfoBoxSanityData;

/**
 * Defines the data for a base landing page (a landing page without a slug, e.g. the Home page)
 */
export interface LandingPageBase extends SanityDocument {
	_type: SchemaType.PAGE_HOME;
	title: string;
	description: string;
	pageItems: Array<LandingPageComponents>;
}

export interface LandingPageBaseSanityData extends SanityDocument {
	_type: SchemaType.PAGE_HOME;
	title: Locale;
	description: Locale;
	pageItems: Array<LandingPageComponentsSanityData>;
}

/**
 * A general LandingPage is a HomePage with a slug
 */
export interface LandingPage extends LandingPageBase {
	slug: string;
}

export interface LandingPageSanityData extends LandingPageBaseSanityData {
	slug: string;
}

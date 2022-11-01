import SchemaType from "@/sanity/SchemaType";

import { SanityDocument } from "../common";
import { GlobalAlert } from "../globalComponents/alert";
import { GlobalInfoBox } from "../globalComponents/infoBox";

import { PageItemArticleSection } from "./pageItemArticleSection";
import { PageItemCallToActionBar } from "./pageItemCallToActionBar";
import { PageItemHero } from "./pageItemHero";

export type LandingPageComponents =
	| PageItemHero
	| PageItemArticleSection
	| PageItemCallToActionBar
	| GlobalAlert
	| GlobalInfoBox;

/**
 * Defines the data for a base landing page (a landing page without a slug, e.g. the Home page)
 */
export interface LandingPageBase extends SanityDocument {
	_type: SchemaType.PAGE_HOME;
	title: string;
	description: string;
	pageItems: Array<LandingPageComponents>;
}

/**
 * A general LandingPage is a HomePage with a slug
 */
export interface LandingPage extends LandingPageBase {
	slug: string;
}

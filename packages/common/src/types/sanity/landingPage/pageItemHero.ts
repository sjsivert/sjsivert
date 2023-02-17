import { Locale } from "@/types/sanity/common";

import SchemaType from "../../../sanity/SchemaType";
import { AccessibleImage, AccessibleImageIntl } from "../accessibleImage";
import { SanityObject } from "../common";

interface PageItemHeroBase extends SanityObject {
	_type: SchemaType.LANDING_PAGE_ITEM_HERO;

	// Settings (all required)
	layout: "imageLeft" | "imageRight";
	purpose: "header" | "section";
	colorScheme: "light" | "grey" | "dark";

	callToActionType: "button" | "link";
	callToActionUrl: string;
}

export interface PageItemHero extends PageItemHeroBase {
	backgroundImage?: AccessibleImage;

	// Image area
	heroImage: AccessibleImage;

	// Text area
	title: string;
	bodyText: string;
	callToActionLabel: string;
}

export interface PageItemHeroSanityData extends PageItemHeroBase {
	backgroundImage?: AccessibleImageIntl;

	// Image area
	heroImage: AccessibleImageIntl;

	// Text area
	title: Locale;
	bodyText: Locale;
	callToActionLabel: Locale;
}

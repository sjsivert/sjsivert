import SchemaType from "../../../sanity/SchemaType";
import { AccessibleImage } from "../accessibleImage";
import { SanityObject } from "../common";

export interface PageItemHero extends SanityObject {
	_type: SchemaType.LANDING_PAGE_ITEM_HERO;

	// Settings (all required)
	layout: "imageLeft" | "imageRight";
	purpose: "header" | "section";
	colorScheme: "light" | "grey" | "dark";
	backgroundImage?: AccessibleImage;

	// Image area
	heroImage: AccessibleImage;

	// Text area
	title: string;
	bodyText: string;
	callToActionType: "button" | "link";
	callToActionLabel: string;
	callToActionUrl: string;
}

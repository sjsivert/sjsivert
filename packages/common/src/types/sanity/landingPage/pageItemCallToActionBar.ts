import SchemaType from "@/sanity/SchemaType";

import { Locale } from "@/types/sanity/common";

import { SanityObject } from "../common";

interface PageItemCallToActionBarBase extends SanityObject {
	_type: SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR;

	bodyText: string | Locale;
	callToActionLabel: string | Locale;
	callToActionUrl: string;
	backgroundColor: "white" | "grey";
}

export interface PageItemCallToActionBar extends PageItemCallToActionBarBase {
	bodyText: string;
	callToActionLabel: string;
}

export interface PageItemCallToActionBarSanityData extends PageItemCallToActionBarBase {
	bodyText: Locale;
	callToActionLabel: Locale;
}

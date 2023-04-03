import SchemaType from "@/sanity/SchemaType";

import { Locale } from "@/types/sanity/common";

import { Article } from "../article";
import { SanityObject } from "../common";

interface PageItemArticleSectionBase extends SanityObject {
	_type: SchemaType.LANDING_PAGE_ITEM_ARTICLE_SECTION;
	hideHeader?: boolean;
	title: string | Locale;
	description: string | Locale;
	articleReferences: Array<Article>;
	backgroundColor: "white" | "grey";
}

export interface PageItemArticleSection extends PageItemArticleSectionBase {
	title: string;
	description: string;
}

export interface PageItemArticleSectionSanityData extends PageItemArticleSectionBase {
	title: Locale;
	description: Locale;
}

import { SanityDocument } from "@sanity/types";

import { AccessibleImage, AccessibleImageIntl } from "@/types/sanity/accessibleImage";
import { BlockContainer } from "@/types/sanity/blockContainer";

import { Locale } from "../common";

export interface ArticleCollectionBase extends SanityDocument {
	path: { current: string };
}

export interface ArticleCollection extends ArticleCollectionBase {
	name: string;
	description?: string;
}

export interface ArticleCollectionSanityData extends ArticleCollectionBase {
	name: Locale;
	description?: Locale;
}

export interface BaseArticle extends SanityDocument {
	path: string;
	slug: string;
}

export interface Article extends BaseArticle {
	title: string;
	description: string;
	summary: string;
	articlePreviewImage: AccessibleImage;
	collection: ArticleCollection;
	blocks: BlockContainer;
	category?: { name: string; slug: { current: string } };
}

/**
 * Used for projects that use localization
 */
export interface ArticleSanityData extends BaseArticle {
	title: Locale;
	description: Locale;
	summary: Locale;
	collection: ArticleCollectionSanityData;
	articlePreviewImage: AccessibleImageIntl;
	blocks: { [key: string]: BlockContainer };
	category?: { name: Locale; slug: { current: string } };
}

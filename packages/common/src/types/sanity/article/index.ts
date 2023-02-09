import { SanityDocument } from "@sanity/types";

import { AccessibleImage } from "@/types/sanity/accessibleImage";
import { BlockContainer } from "@/types/sanity/blockContainer";

export interface ArticleCollection extends SanityDocument {
	name: string;
	path: { current: string };
	description?: string;
}

export interface ArticleCategory extends SanityDocument {
	name: string;
	slug: { current: string };
}

export interface Article extends SanityDocument {
	articlePreviewImage: AccessibleImage;
	path: string;
	slug: string;
	collection: ArticleCollection;
	category?: ArticleCategory;
	title: string;
	description: string;
	summary: string;
	blocks: BlockContainer;
}

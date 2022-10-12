import { AccessibleImage } from "@/lib/types/sanity/accessibleImage";
import { BlockContainer } from "@/lib/types/sanity/blockContainer";
import { SanityDocument } from "@/lib/types/sanity/common";

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

import SchemaType from "common/sanity/SchemaType";

import { Article } from "@/lib/types/sanity/article";
import { SanityObject } from "@/lib/types/sanity/common";

export interface PageItemArticleSection extends SanityObject {
    _type: SchemaType.LANDING_PAGE_ITEM_ARTICLE_SECTION;
    _key: string;
    hideHeader?: boolean;
    title: string;
    description: string;
    articleReferences: Array<Article>;
    backgroundColor: "white" | "grey";
}

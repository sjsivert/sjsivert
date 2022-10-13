import SchemaType from "common/sanity/SchemaType";

import { Article } from "@/lib/types/sanity/article";

export interface PageItemArticleSection {
    _type: SchemaType.LANDING_PAGE_ITEM_ARTICLE_SECTION;
    _key: string;
    hideHeader?: boolean;
    title: string;
    description: string;
    articleReferences: Array<Article>;
    backgroundColor: "white" | "grey";
}

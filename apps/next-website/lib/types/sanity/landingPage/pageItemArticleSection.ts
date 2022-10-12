import { Article } from "@/lib/types/sanity/article";

import { ComponentType } from "./index";

export interface PageItemArticleSection {
    _type: ComponentType.ARTICLE_SECTION;
    _key: string;
    hideHeader?: boolean;
    title: string;
    description: string;
    articleReferences: Array<Article>;
    backgroundColor: "white" | "grey";
}

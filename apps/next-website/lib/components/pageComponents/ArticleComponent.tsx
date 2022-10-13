import { PortableText } from "@portabletext/react";

import { portableTextArticleComponents } from "@/lib/components/portableText";
import { Article as ArticlePageType } from "@/lib/types/sanity/article";

interface Props {
    articlePageDocument: ArticlePageType;
}

export default function ArticleComponent({ articlePageDocument }: Props): JSX.Element {
    return (
        <div>
            <h1>Article page {articlePageDocument.title}</h1>
            <PortableText value={articlePageDocument.blocks} components={portableTextArticleComponents} />
        </div>
    );
}

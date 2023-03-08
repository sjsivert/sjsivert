import { portableTextArticleComponents } from "@/lib/components/portableText";
import { PortableText } from "@portabletext/react";
import { Article as ArticlePageType } from "common/src/types/sanity/article";

interface Props {
	articlePageDocument: ArticlePageType;
}

/**
 * This component is responsible for rendering an article page
 * Most of the work here is performed by the <PortableText> Sanity module.
 * The «portableTextArticleComponents» serializer rules are passed in to <PortableText>
 * to inform the module how it should render each component or mark
 */
export default function ArticleComponent({ articlePageDocument }: Props): JSX.Element {
	return (
		<div>
			<h1>Article page {articlePageDocument.title}</h1>
			<PortableText value={articlePageDocument.blocks.body} components={portableTextArticleComponents} />
		</div>
	);
}

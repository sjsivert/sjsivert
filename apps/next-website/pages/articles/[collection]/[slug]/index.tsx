// an article
import type { GetStaticProps, GetStaticPaths } from "next";

import Layout from "@/lib/components/Layout";
import ArticleComponent from "@/lib/components/pageComponents/articlePageComponent";
import { getMainMenuAndFooterData } from "@/lib/content/sanity/allPages";
import { getArticlesBySlug } from "@/lib/content/sanity/articles";
import { articleGroq } from "@/lib/content/sanity/articles/groq";
import { usePreviewSubscription } from "@/lib/hooks/useSanityPreviewSubscription";
import { MainMenuAndFooter } from "@/lib/types/sanity/allPages";
import { Article as ArticlePageType } from "@/lib/types/sanity/article";
import { filterDataToSingleItem } from "@/lib/utils/sanity";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	articlePageDocument: ArticlePageType;
	preview: boolean;
}

type Params = { slug: string; collection: string };

export default function ArticlePage({ mainMenuAndFooterData, articlePageDocument, preview }: Props) {
	const { data: previewData } = usePreviewSubscription(articleGroq, {
		initialData: articlePageDocument,
		enabled: preview,
	});

	const currentPage = filterDataToSingleItem<ArticlePageType>(
		Array.isArray(previewData) ? previewData : [previewData],
		preview
	);

	return (
		<Layout mainMenuAndFooterData={mainMenuAndFooterData}>
			<ArticleComponent articlePageDocument={currentPage} />
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ preview, params }) => {
	// Get the slug for the page
	const slug = (params as Params).slug;
	const collection = (params as Params).collection;

	// preview
	const previewEnabled: boolean = preview || false;
	// Get header and footer data
	const [mainMenuAndFooterData, articlePageDocuments] = await Promise.all([
		getMainMenuAndFooterData(),
		getArticlesBySlug(previewEnabled, collection, slug),
	]);

	// Filter out based on preview
	const articlePageDocument = filterDataToSingleItem<ArticlePageType>(articlePageDocuments, previewEnabled);

	if (!articlePageDocument) {
		return { notFound: true };
	}

	const props: Props = {
		mainMenuAndFooterData,
		articlePageDocument,
		preview: previewEnabled,
	};

	return { props, revalidate: 60 * 5 };
};

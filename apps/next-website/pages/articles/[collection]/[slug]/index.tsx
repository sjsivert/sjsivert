// an article
import Layout from "@/lib/components/Layout";
import ArticleComponent from "@/lib/components/pageComponents/articlePageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";
import { getArticlesBySlug } from "common/src/content/sanity/articles";
import { MainMenuAndFooter } from "common/src/types/sanity/allPages";
import { Article as ArticlePageType } from "common/src/types/sanity/article";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import type { GetStaticPaths, GetStaticProps } from "next";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	articlePageDocument: ArticlePageType;
}

type Params = { slug: string; collection: string };

/**
 * Article template handler
 */
export default function ArticlePage({ mainMenuAndFooterData, articlePageDocument }: Props) {
	return (
		<Layout mainMenuAndFooterData={mainMenuAndFooterData}>
			<ArticleComponent articlePageDocument={articlePageDocument} />
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
		getMainMenuAndFooterData(sanityConfig),
		getArticlesBySlug(sanityConfig, previewEnabled, collection, slug),
	]);

	// Filter out based on preview
	const articlePageDocument = filterDataToSingleItem<ArticlePageType>(articlePageDocuments, previewEnabled);

	if (!articlePageDocument) {
		return { notFound: true };
	}

	const props: Props = {
		mainMenuAndFooterData,
		articlePageDocument,
	};

	return { props, revalidate: 60 * 5 };
};

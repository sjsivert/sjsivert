import ArticleComponent from "@/lib/components/pageComponents/articlePageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { BaseParams } from "@/lib/types/pages";
import { getArticlesBySlug } from "common/src/content/sanity-intl/articles";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import { previewData } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 3600; // every hour

interface Params extends BaseParams {
	collection: string;
	slug: string;
}

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const preview = previewData() ? true : false;
	const article = await getData(preview, params.collection, params.slug, params.lang);
	if (!article) {
		return null;
	}
	return {
		title: article.title,
		description: article.description,
	};
}

async function getData(preview: boolean, collection: string, slug: string, lang: string) {
	// Get all pages (published and drafts)
	// Note that this is two steps here since the data fetching
	// is shared with other projects.
	const pages = await getArticlesBySlug(sanityConfig, preview, collection, slug, lang);
	// Get the correct page based on the preview context
	const currentPage = filterDataToSingleItem(Array.isArray(pages) ? pages : [pages], preview);
	// ..and return it
	return currentPage;
}

export default async function ArticlePage({ params }: { params: Params }) {
	const preview = previewData() ? true : false;
	const article = await getData(preview, params.collection, params.slug, params.lang);

	if (!article) {
		notFound();
	}

	return <ArticleComponent articlePageDocument={article} />;
}

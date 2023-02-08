import ArticleComponent from "@/lib/components/pageComponents/articlePageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { getSEOTitle } from "@/lib/config/seo";
import { getArticlesBySlug } from "common/src/content/sanity/articles";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import { previewData } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 3600; // every hour

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const preview = previewData() ? true : false;
	const article = await getData(preview, params.collection, params.slug);
	if (!article) {
		return null;
	}
	return {
		title: getSEOTitle(article.title),
		description: article.description,
	};
}

async function getData(preview: boolean, collection: string, slug: string) {
	// Get all pages (published and drafts)
	// Note that this is two steps here since the data fetching
	// is shared with other projects.
	const pages = await getArticlesBySlug(sanityConfig, preview, collection, slug);
	// Get the correct page based on the preview context
	const currentPage = filterDataToSingleItem(Array.isArray(pages) ? pages : [pages], preview);
	// ..and return it
	return currentPage;
}

interface Params {
	collection: string;
	slug: string;
}

export default async function ArticlePage({ params }: { params: Params }) {
	const preview = previewData() ? true : false;
	const article = await getData(preview, params.collection, params.slug);

	if (!article) {
		notFound();
	}

	return <ArticleComponent articlePageDocument={article} />;
}

import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { BaseParams } from "@/lib/types/pages";
import { getHomePageDocuments } from "common/src/content/sanity-intl/homePage";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import { previewData } from "next/headers";
import { notFound } from "next/navigation";

// Caching
// Revalidate this page every hour
export const revalidate = 3600;

// SEO
// This is a "magic" Next function, see https://beta.nextjs.org/docs/guides/seo
export async function generateMetadata(lang: string) {
	const preview = previewData() ? true : false;
	const page = await getData(lang, preview);
	if (page) {
		return { title: page.title, description: page.description };
	}
	return null;
}

async function getData(lang: string, preview: boolean) {
	// Get all pages (published and drafts)
	// Note that this is two steps here since the data fetching
	// is shared with other projects.
	const pages = await getHomePageDocuments(sanityConfig, lang, preview);
	// Get the correct page based on the preview context
	const currentPage = filterDataToSingleItem(Array.isArray(pages) ? pages : [pages], preview);
	// ..and return it
	return currentPage;
}

export default async function HomePage({ params }: { params: BaseParams }) {
	const preview = previewData() ? true : false;
	const page = await getData(params.lang, preview);

	if (!page) {
		return notFound();
	}

	return <LandingPageComponent landingPageDocument={page} />;
}

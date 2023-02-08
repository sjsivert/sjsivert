import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { getSEOTitle } from "@/lib/config/seo";
import { getHomePageDocuments } from "common/src/content/sanity/homePage/";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import { previewData } from "next/headers";
import { notFound } from "next/navigation";

// Caching
// Revalidate this page every hour
export const revalidate = 3600;

// SEO
// This is a "magic" Next function, see https://beta.nextjs.org/docs/guides/seo
export async function generateMetadata() {
	const preview = previewData() ? true : false;
	const page = await getData(preview);
	if (page) {
		return { title: getSEOTitle(page.title || "No title"), description: page.description };
	}
	return null;
}

async function getData(preview: boolean) {
	// Get all pages (published and drafts)
	// Note that this is two steps here since the data fetching
	// is shared with other projects.
	const pages = await getHomePageDocuments(sanityConfig, preview);
	// Get the correct page based on the preview context
	const currentPage = filterDataToSingleItem(Array.isArray(pages) ? pages : [pages], preview);
	// ..and return it
	return currentPage;
}

export default async function HomePage() {
	const preview = previewData() ? true : false;
	const page = await getData(preview);

	if (!page) {
		return notFound();
	}

	return <LandingPageComponent landingPageDocument={page} />;
}

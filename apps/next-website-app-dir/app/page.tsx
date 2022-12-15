import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { getHomePageDocuments } from "common/src/content/sanity/homePage/";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import { previewData } from "next/headers";

export const revalidate = 3600; // every hour

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
	return <LandingPageComponent landingPageDocument={page} />;
}
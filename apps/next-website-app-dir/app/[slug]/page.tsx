import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { getLandingPageDocumentsBySlug } from "common/src/content/sanity/landingPages";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import { previewData } from "next/headers";

export const revalidate = 3600; // every hour

async function getData(preview: boolean, slug: string) {
	// Get all pages (published and drafts)
	// Note that this is two steps here since the data fetching
	// is shared with other projects.
	const pages = await getLandingPageDocumentsBySlug(sanityConfig, preview, slug);
	// Get the correct page based on the preview context
	const currentPage = filterDataToSingleItem(Array.isArray(pages) ? pages : [pages], preview);
	// ..and return it
	return currentPage;
}

interface Params {
	slug: string;
}
export default async function LandingPage({ params }: { params: Params }) {
	const preview = previewData() ? true : false;
	const page = await getData(preview, params.slug);

	return <LandingPageComponent landingPageDocument={page} />;
}

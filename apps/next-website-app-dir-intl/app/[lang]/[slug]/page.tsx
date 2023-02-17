import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { BaseParams } from "@/lib/types/pages";
import { getLandingPageDocumentsBySlug } from "common/src/content/sanity-intl/landingPages";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import { previewData } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 3600; // every hour

interface Params extends BaseParams {
	slug: string;
}

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const preview = previewData() ? true : false;
	const page = await getData(preview, params.slug, params.lang);
	if (page) {
		return { title: page.title, description: page.description };
	}
	return null;
}

async function getData(preview: boolean, slug: string, lang: string) {
	// Get all pages (published and drafts)
	// Note that this is two steps here since the data fetching
	// is shared with other projects.
	const pages = await getLandingPageDocumentsBySlug(sanityConfig, preview, slug, lang);
	// Get the correct page based on the preview context
	const currentPage = filterDataToSingleItem(Array.isArray(pages) ? pages : [pages], preview);
	// ..and return it
	return currentPage;
}

export default async function LandingPage({ params }: { params: Params }) {
	const preview = previewData() ? true : false;
	const page = await getData(preview, params.slug, params.lang);
	if (!page) {
		return notFound();
	}
	return <LandingPageComponent landingPageDocument={page} />;
}

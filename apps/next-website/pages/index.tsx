import type { GetStaticProps } from "next";
import Link from "next/link";

import Layout from "@/lib/components/Layout";
import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { getMainMenuAndFooterData } from "@/lib/content/sanity/allPages";
import { getHomePageDocuments } from "@/lib/content/sanity/homePage/";
import { homePageGroq } from "@/lib/content/sanity/homePage/groq";
import { usePreviewSubscription } from "@/lib/hooks/useSanityPreviewSubscription";
import { MainMenuAndFooter } from "@/lib/types/sanity/allPages";
import { LandingPageBase } from "@/lib/types/sanity/landingPage";
import { filterDataToSingleItem } from "@/lib/utils/sanity";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	homePageDocument: LandingPageBase;
	preview: boolean;
}

/**
 * The home page
 * This page is simply a landing page without a slug
 */
export default function Home({ mainMenuAndFooterData, homePageDocument, preview }: Props) {
	const { data: previewData } = usePreviewSubscription(homePageGroq, {
		initialData: homePageDocument,
		enabled: preview,
	});

	const currentPage = filterDataToSingleItem<LandingPageBase>(
		Array.isArray(previewData) ? previewData : [previewData],
		preview
	);

	return (
		<Layout mainMenuAndFooterData={mainMenuAndFooterData}>
			<LandingPageComponent landingPageDocument={currentPage} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
	const previewEnabled: boolean = preview || false;
	// Get header and footer data
	const [mainMenuAndFooterData, homePageDocuments] = await Promise.all([
		getMainMenuAndFooterData(),
		getHomePageDocuments(previewEnabled),
	]);

	// Filter out based on preview
	const homePageDocument = filterDataToSingleItem<LandingPageBase>(homePageDocuments, previewEnabled);

	if (!homePageDocument) {
		return { notFound: true };
	}

	const props: Props = {
		mainMenuAndFooterData,
		homePageDocument,
		preview: previewEnabled,
	};

	return { props, revalidate: 60 * 5 };
};

import Layout from "@/lib/components/Layout";
import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";
import { getHomePageDocuments } from "common/src/content/sanity/homePage/";
import { MainMenuAndFooter } from "common/src/types/sanity/allPages";
import { LandingPageBase } from "common/src/types/sanity/landingPage";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import type { GetStaticProps } from "next";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	homePageDocument: LandingPageBase;
}

/**
 * The home page
 * This page is simply a landing page without a slug
 */
export default function Home({ mainMenuAndFooterData, homePageDocument }: Props) {
	return (
		<Layout mainMenuAndFooterData={mainMenuAndFooterData}>
			<LandingPageComponent landingPageDocument={homePageDocument} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
	const previewEnabled: boolean = preview || false;
	// Get header and footer data
	const [mainMenuAndFooterData, homePageDocuments] = await Promise.all([
		getMainMenuAndFooterData(sanityConfig),
		getHomePageDocuments(sanityConfig, previewEnabled),
	]);

	// Filter out based on preview
	const homePageDocument = filterDataToSingleItem<LandingPageBase>(homePageDocuments, previewEnabled);

	if (!homePageDocument) {
		return { notFound: true };
	}

	const props: Props = {
		mainMenuAndFooterData,
		homePageDocument,
	};

	return { props, revalidate: 60 * 5 };
};

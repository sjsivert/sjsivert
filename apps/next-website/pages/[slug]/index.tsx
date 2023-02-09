import Layout from "@/lib/components/Layout";
import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";
import { getLandingPageDocumentsBySlug } from "common/src/content/sanity/landingPages";
import { MainMenuAndFooter } from "common/src/types/sanity/allPages";
import { LandingPage as LandingPageType } from "common/src/types/sanity/landingPage";
import { filterDataToSingleItem } from "common/src/utils/sanity";
import type { GetStaticPaths, GetStaticProps } from "next";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	landingPageDocument: LandingPageType;
}

type Params = { slug: string };

/**
 * Defines the render function for a landing page
 * This component runs both on the server side and on the client side
 * so you should avoid using server side code inside of this component.
 */
export default function LandingPage({ mainMenuAndFooterData, landingPageDocument }: Props) {
	return (
		<Layout mainMenuAndFooterData={mainMenuAndFooterData}>
			<LandingPageComponent landingPageDocument={landingPageDocument} />
		</Layout>
	);
}

/**
 * Pre-rendering has not been implemented
 */
export const getStaticPaths: GetStaticPaths<Params> = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ preview, params }) => {
	// Get the slug for the page
	const slug = (params as Params).slug;
	// preview
	const previewEnabled: boolean = preview || false;
	// Get header and footer data
	const [mainMenuAndFooterData, landingPageDocuments] = await Promise.all([
		getMainMenuAndFooterData(sanityConfig),
		getLandingPageDocumentsBySlug(sanityConfig, previewEnabled, slug),
	]);

	// Filter out based on preview
	const landingPageDocument = filterDataToSingleItem<LandingPageType>(landingPageDocuments, previewEnabled);

	if (!landingPageDocument) {
		return { notFound: true };
	}

	const props: Props = {
		mainMenuAndFooterData,
		landingPageDocument,
	};

	return { props, revalidate: 60 * 5 };
};

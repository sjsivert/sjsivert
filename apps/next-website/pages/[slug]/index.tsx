import type { GetStaticProps, GetStaticPaths } from "next";

import Layout from "@/lib/components/Layout";
import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";
import { getLandingPageDocumentsBySlug } from "common/src/content/sanity/landingPages";
import { landingPageGroq } from "common/src/content/sanity/landingPages/groq";
import { usePreviewSubscription } from "@/lib/hooks/useSanityPreviewSubscription";
import { MainMenuAndFooter } from "common/src/types/sanity/allPages";
import { LandingPage as LandingPageType } from "common/src/types/sanity/landingPage";
import { filterDataToSingleItem } from "common/src/utils/sanity";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	landingPageDocument: LandingPageType;
	preview: boolean;
}

type Params = { slug: string };

/**
 * Defines the render function for a landing page
 * This component runs both on the server side and on the client side
 * so you should avoid using server side code inside of this component.
 */
export default function LandingPage({ mainMenuAndFooterData, landingPageDocument, preview }: Props) {
	// This handles previewing data from Sanity
	// If preview is enabled, _draft data will be added (if it exists)
	// else only the initialData is used
	const { data: previewData } = usePreviewSubscription(landingPageGroq, {
		initialData: landingPageDocument,
		enabled: preview,
	});

	// Since previewData can contain both a published document
	// and a draft document, we need to filter out the document we don't need
	const currentPage = filterDataToSingleItem<LandingPageType>(
		Array.isArray(previewData) ? previewData : [previewData],
		preview
	);

	return (
		<Layout mainMenuAndFooterData={mainMenuAndFooterData}>
			<LandingPageComponent landingPageDocument={currentPage} />
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
		getMainMenuAndFooterData(),
		getLandingPageDocumentsBySlug(previewEnabled, slug),
	]);

	// Filter out based on preview
	const landingPageDocument = filterDataToSingleItem<LandingPageType>(landingPageDocuments, previewEnabled);

	if (!landingPageDocument) {
		return { notFound: true };
	}

	const props: Props = {
		mainMenuAndFooterData,
		landingPageDocument,
		preview: previewEnabled,
	};

	return { props, revalidate: 60 * 5 };
};

import type { GetStaticProps, GetStaticPaths } from "next";

import Layout from "@/lib/components/Layout";
import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { getMainMenuAndFooterData } from "@/lib/content/sanity/allPages";
import { getLandingPageDocumentsBySlug } from "@/lib/content/sanity/landingPages";
import { landingPageGroq } from "@/lib/content/sanity/landingPages/groq";
import { usePreviewSubscription } from "@/lib/hooks/useSanityPreviewSubscription";
import { MainMenuAndFooter } from "@/lib/types/sanity/allPages";
import { LandingPage as LandingPageType } from "@/lib/types/sanity/landingPage";
import { filterDataToSingleItem } from "@/lib/utils/sanity";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	landingPageDocument: LandingPageType;
	preview: boolean;
}

type Params = { slug: string };

export default function LandingPage({ mainMenuAndFooterData, landingPageDocument, preview }: Props) {
	const { data: previewData } = usePreviewSubscription(landingPageGroq, {
		initialData: landingPageDocument,
		enabled: preview,
	});

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

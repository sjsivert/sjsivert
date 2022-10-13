import type { GetStaticProps } from "next";
import Link from "next/link";

import Layout from "@/lib/components/Layout";
import { getMainMenuAndFooterData } from "@/lib/content/sanity/allPages";
import { getHomePageDocuments } from "@/lib/content/sanity/homePage/";
import { homePageGroq } from "@/lib/content/sanity/homePage/groq";
import { usePreviewSubscription } from "@/lib/hooks/useSanityPreviewSubscription";
import { MainMenuAndFooter } from "@/lib/types/sanity/allPages";
import { HomePage } from "@/lib/types/sanity/landingPage";
import { filterDataToSingleItem } from "@/lib/utils/sanity";

interface Props {
    mainMenuAndFooterData: MainMenuAndFooter;
    homePageDocument: HomePage;
    preview: boolean;
}

export default function Home({ mainMenuAndFooterData, homePageDocument, preview }: Props) {
    const { data: previewData } = usePreviewSubscription(homePageGroq, {
        initialData: homePageDocument,
        enabled: preview,
    });

    const currentPage = filterDataToSingleItem<HomePage>(
        Array.isArray(previewData) ? previewData : [previewData],
        preview
    );

    return (
        <Layout mainMenuAndFooterData={mainMenuAndFooterData}>
            <h1>Homepage {currentPage.title}</h1>
            <ul>
                <li>
                    <Link href="/it-s-a-landing-page">
                        <a>Demo landing page</a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles">
                        <a>List articles</a>
                    </Link>
                </li>
            </ul>
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
    const homePageDocument = filterDataToSingleItem<HomePage>(homePageDocuments, previewEnabled);

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

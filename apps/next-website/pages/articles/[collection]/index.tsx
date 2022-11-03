import type { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/lib/components/Layout";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";
import { getAllArticlesForCollection } from "common/src/content/sanity/articles";
import { MainMenuAndFooter } from "common/src/types/sanity/allPages";
import { Article as ArticlePageType } from "common/src/types/sanity/article";
import { sanityConfig } from "@/lib/config/envVariables";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	allArticlePageDocuments: Array<ArticlePageType>;
}

type Params = { collection: string };

export default function ArticleCollectionListPage({ mainMenuAndFooterData, allArticlePageDocuments }: Props) {
	const router = useRouter();

	return (
		<Layout mainMenuAndFooterData={mainMenuAndFooterData}>
			<h1>Article list for collection {allArticlePageDocuments[0].collection.name}</h1>
			<ul>
				{allArticlePageDocuments.map((article) => {
					return (
						<li key={article._id}>
							<Link href={`${article.slug}`}>
								<a>{article.title}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	// Get the collection path
	const collection = (params as Params).collection;

	// Get header and footer data
	const [mainMenuAndFooterData, allArticlePageDocuments] = await Promise.all([
		getMainMenuAndFooterData(sanityConfig),
		getAllArticlesForCollection(sanityConfig, collection),
	]);

	if (!Array.isArray(allArticlePageDocuments) || allArticlePageDocuments.length < 1) {
		return { notFound: true };
	}

	const props: Props = {
		mainMenuAndFooterData,
		allArticlePageDocuments,
	};

	return { props, revalidate: 60 * 5 };
};

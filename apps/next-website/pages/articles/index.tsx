import Layout from "@/lib/components/Layout";
import { sanityConfig } from "@/lib/config/envVariables";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";
import { getAllArticles } from "common/src/content/sanity/articles";
import { MainMenuAndFooter } from "common/src/types/sanity/allPages";
import { Article as ArticlePageType } from "common/src/types/sanity/article";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	allArticlePageDocuments: Array<ArticlePageType>;
}

export default function ArticleListPage({ mainMenuAndFooterData, allArticlePageDocuments }: Props) {
	const router = useRouter();

	return (
		<Layout mainMenuAndFooterData={mainMenuAndFooterData}>
			<h1>Article list</h1>
			<ul>
				{allArticlePageDocuments.map((article) => {
					return (
						<li key={article._id}>
							<Link href={`${router.asPath}/${article.collection.path.current}/${article.slug}`}>
								{article.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	// Get header and footer data
	const [mainMenuAndFooterData, allArticlePageDocuments] = await Promise.all([
		getMainMenuAndFooterData(sanityConfig),
		getAllArticles(sanityConfig),
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

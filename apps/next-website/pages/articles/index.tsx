import type { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/lib/components/Layout";
import { getMainMenuAndFooterData } from "@/lib/content/sanity/allPages";
import { getAllArticles } from "@/lib/content/sanity/articles";
import { MainMenuAndFooter } from "@/lib/types/sanity/allPages";
import { Article as ArticlePageType } from "@/lib/types/sanity/article";

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
								<a>{article.title}</a>
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
		getMainMenuAndFooterData(),
		getAllArticles(),
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

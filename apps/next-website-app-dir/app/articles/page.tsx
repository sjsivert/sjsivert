import { sanityConfig } from "@/lib/config/envVariables";
import { getSEOTitle } from "@/lib/config/seo";
import { getAllArticles } from "common/src/content/sanity/articles";
import Link from "next/link";

export const revalidate = 3600; // every hour

// SEO
export async function generateMetadata() {
	return {
		title: getSEOTitle("All articles"),
		description: `A list of all articles`,
	};
}

async function getData() {
	const allArticles = await getAllArticles(sanityConfig);
	return allArticles;
}

export default async function ArticleListPage() {
	const allArticlePageDocuments = await getData();

	return (
		<>
			<h1>Article list</h1>
			<ul>
				{allArticlePageDocuments.map((article) => {
					return (
						<li key={article._id}>
							<Link href={`articles/${article.collection.path.current}/${article.slug}`}>
								{article.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

import { sanityConfig } from "@/lib/config/envVariables";
import { getAllArticles } from "common/src/content/sanity/articles";
import Link from "next/link";

export const revalidate = 3600; // every hour

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
import { sanityConfig } from "@/lib/config/envVariables";
import { getAllArticlesForCollection } from "common/src/content/sanity/articles";
import Link from "next/link";

async function getData(collection: string) {
	const allArticles = await getAllArticlesForCollection(sanityConfig, collection);
	return allArticles;
}

interface Params {
	collection: string;
}

export default async function ArticleListPage({ params }: { params: Params }) {
	const allArticlePageDocuments = await getData(params.collection);

	return (
		<>
			<h1>Article list for collection {allArticlePageDocuments[0].collection.name}</h1>
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

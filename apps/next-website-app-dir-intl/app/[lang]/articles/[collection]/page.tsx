import { sanityConfig } from "@/lib/config/envVariables";
import { BaseParams } from "@/lib/types/pages";
import { getAllArticlesForCollection } from "common/src/content/sanity-intl/articles";
import Link from "next/link";

interface Params extends BaseParams {
	collection: string;
}

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const allArticlePageDocuments = await getData(params.collection, params.lang);
	if (allArticlePageDocuments.length < 1) {
		return null;
	}
	// Grab the collection object (all collections are the same for
	// Note: All documents since we are filtering on the collection slug)
	const collectionObj = allArticlePageDocuments[0].collection;
	return {
		title: `A list of articles in the «${collectionObj.name}» collection`,
		description: `A list of all articles in the «${collectionObj.name}» collection`,
	};
}

async function getData(collection: string, lang: string) {
	const allArticles = await getAllArticlesForCollection(sanityConfig, collection, lang);
	return allArticles;
}

export default async function ArticleCollectionListPage({ params }: { params: Params }) {
	const allArticlePageDocuments = await getData(params.collection, params.lang);

	if (allArticlePageDocuments.length < 1) {
		return <h1>No articles found</h1>;
	}

	return (
		<>
			<h1>{allArticlePageDocuments[0].collection.name}</h1>
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

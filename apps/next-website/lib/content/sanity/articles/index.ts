import { getSanityClient } from "@/lib/clients/sanityClient";
import { Article } from "@/lib/types/sanity/article";

import { allArticlesGroq, articleGroq, allArticlesForCollectionGroq } from "./groq";

/**
 * Returns all articles (no drafts) for listing
 * @returns
 */
export async function getAllArticles(): Promise<Array<Article>> {
	const articles = await getSanityClient().fetch<Array<Article>>(allArticlesGroq);
	return articles;
}

/**
 * Returns all articles in a collection (no drafts)
 * @param collection
 * @returns
 */
export async function getAllArticlesForCollection(collection: string): Promise<Array<Article>> {
	const articles = await getSanityClient().fetch<Array<Article>>(allArticlesForCollectionGroq, { collection });
	return articles;
}

/**
 * Returns one or two articles (draft included) based on the passed slug
 * @param preview
 * @param slug
 * @returns
 */
export async function getArticlesBySlug(preview: boolean, collection: string, slug: string): Promise<Array<Article>> {
	const articles = await getSanityClient(preview).fetch<Array<Article>>(articleGroq, { slug, collection });
	return articles;
}

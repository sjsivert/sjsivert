import type { SanityConfig } from "@/clients/config";
import { getSanityClient } from "@/clients/sanityClient";

import { Article } from "@/types/sanity/article";

import { allArticlesForCollectionGroq, allArticlesGroq, articleGroq } from "./groq";

/**
 * Returns all articles (no drafts) for listing
 * @returns
 */
export async function getAllArticles(config: SanityConfig): Promise<Array<Article>> {
	const articles = await getSanityClient(config).fetch<Array<Article>>(allArticlesGroq);
	return articles;
}

/**
 * Returns all articles in a collection (no drafts)
 * @param collection
 * @returns
 */
export async function getAllArticlesForCollection(config: SanityConfig, collection: string): Promise<Array<Article>> {
	const articles = await getSanityClient(config).fetch<Array<Article>>(allArticlesForCollectionGroq, {
		collection,
	});
	return articles;
}

/**
 * Returns one or two articles (draft included) based on the passed slug
 * @param preview
 * @param slug
 * @returns
 */
export async function getArticlesBySlug(
	config: SanityConfig,
	preview: boolean,
	collection: string,
	slug: string
): Promise<Array<Article>> {
	const articles = await getSanityClient(config, preview).fetch<Array<Article>>(articleGroq, { slug, collection });
	return articles;
}

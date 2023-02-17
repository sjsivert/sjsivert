import type { SanityConfig } from "@/clients/config";
import { getSanityClient } from "@/clients/sanityClient";

import { Article, ArticleSanityData } from "@/types/sanity/article";

import { getDefaultLanguage, getLocalizedStringForLocaleObject } from "../../../locales/languages";
import { handleLocalizationForAccessibleImage } from "../utils/accessibleImage";

const fields = `
...,
"slug": slug.current,
category->,
collection->
`;

/**
 * Returns all articles (no drafts) for listing
 * @returns
 */
export async function getAllArticles(config: SanityConfig, lang: string): Promise<Array<Article>> {
	const allArticlesGroq = `*[_type == "pageArticle" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
		${fields}
	}`;
	const articles = await getSanityClient(config).fetch<Array<ArticleSanityData>>(allArticlesGroq);
	return articles.map((article) => {
		return handleLocalizedArticle(article, lang);
	});
}

/**
 * Returns all articles in a collection (no drafts)
 * @param collection
 * @returns
 */
export async function getAllArticlesForCollection(
	config: SanityConfig,
	collection: string,
	lang: string
): Promise<Array<Article>> {
	const allArticlesForCollectionGroq = `*[_type == "pageArticle" && collection->.path.current == $collection && !(_id in path("drafts.**"))] {
		${fields}
	}`;
	const articles = await getSanityClient(config).fetch<Array<ArticleSanityData>>(allArticlesForCollectionGroq, {
		collection,
	});

	return articles.map((article) => {
		return handleLocalizedArticle(article, lang);
	});
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
	slug: string,
	lang: string
): Promise<Array<Article>> {
	const articleGroq = `*[_type == "pageArticle" && collection->.path.current == $collection && slug.current == $slug]{
		${fields}
	}`;
	const articles = await getSanityClient(config, preview).fetch<Array<ArticleSanityData>>(articleGroq, {
		slug,
		collection,
	});

	return articles.map((article) => {
		return handleLocalizedArticle(article, lang);
	});
}

function handleLocalizedArticle(article: ArticleSanityData, lang: string): Article {
	return {
		...article,
		title: getLocalizedStringForLocaleObject(article.title, lang),
		description: getLocalizedStringForLocaleObject(article.description, lang),
		summary: getLocalizedStringForLocaleObject(article.summary, lang),
		articlePreviewImage: handleLocalizationForAccessibleImage(article.articlePreviewImage, lang),
		blocks: article.blocks[lang] || article.blocks[getDefaultLanguage().id],
		collection: {
			...article.collection,
			name: getLocalizedStringForLocaleObject(article.collection.name, lang),
			description:
				article.collection.description &&
				getLocalizedStringForLocaleObject(article.collection.description, lang),
		},
		category: article.category && { ...article.category, name: "" },
	};
}

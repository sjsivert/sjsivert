import { sanityConfig } from "@/lib/config/envVariables";
import { getAllArticles } from "common/src/content/sanity/articles";
import { getAllLandingPagesForSitemap } from "common/src/content/sanity/landingPages";
import { GetServerSideProps } from "next";
import { ISitemapField, getServerSideSitemap } from "next-sitemap";

/**
 * returns the base url for the app
 * Note that the «VERCEL_URL» env var is a Vercel system variable
 */
function getBaseUrl() {
	if (typeof process.env.VERCEL_URL === "string") {
		const protocol = process.env.VERCEL_URL.includes("localhost:3000") ? "http" : "https";
		return `${protocol}://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
	}
	return "http://localhost:3000";
}

/**
 * Generates a sitemap for pages with dynamic segments that doesn't use pre-rendering (generateStaticParams)
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	// Grab all articles
	const allArticles = await getAllArticles(sanityConfig);
	// Get all landing pages
	const allLandingPages = await getAllLandingPagesForSitemap(sanityConfig);

	// Sitemap fields
	const fields: Array<ISitemapField> = [];

	// Add all articles
	for (const article of allArticles) {
		const collectionPath = article.collection.path.current;
		const slug = article.slug;
		const url = new URL(`/articles/${collectionPath}/${slug}`, getBaseUrl());
		fields.push({
			loc: url.toString(),
			lastmod: new Date().toISOString(),
			changefreq: "daily",
		});
	}

	// Add all landing pages
	for (const page of allLandingPages) {
		const url = new URL(page.slug, getBaseUrl());
		fields.push({
			loc: url.toString(),
			lastmod: new Date().toISOString(),
			changefreq: "daily",
		});
	}

	return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}

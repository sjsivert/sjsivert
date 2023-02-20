import { sanityConfig } from "@/lib/config/envVariables";
import { getAllArticles } from "common/src/content/sanity/articles";
import { getAllLandingPagesForSitemap } from "common/src/content/sanity/landingPages";
import { supportedLanguages } from "common/src/locales/languages";
import { getBaseUrl } from "common/src/utils/url";

interface SitemapField {
	loc: string;
	lastmod: string;
	changefreq: "daily";
}
export async function GET(request: Request) {
	// Grab all articles
	const allArticles = await getAllArticles(sanityConfig);
	// Get all landing pages
	const allLandingPages = await getAllLandingPagesForSitemap(sanityConfig);

	// Sitemap fields
	const fields: Array<SitemapField> = [];

	// Add all non-dynamic pages
	for (const lang of supportedLanguages) {
		const url = new URL(`/${lang.id}`, getBaseUrl());
		fields.push({
			loc: url.toString(),
			changefreq: "daily",
			lastmod: new Date().toISOString(),
		});
	}

	// TODO: Add all list pages (collection, root articles, ...)

	// Add all articles
	for (const article of allArticles) {
		const collectionPath = article.collection.path.current;
		const slug = article.slug;
		for (const lang of supportedLanguages) {
			const url = new URL(`/${lang.id}/articles/${collectionPath}/${slug}`, getBaseUrl());
			fields.push({
				loc: url.toString(),
				lastmod: new Date().toISOString(),
				changefreq: "daily",
			});
		}
	}

	// Add all landing pages
	for (const page of allLandingPages) {
		for (const lang of supportedLanguages) {
			const url = new URL(`/${lang.id}/${page.slug}`, getBaseUrl());
			fields.push({
				loc: url.toString(),
				lastmod: new Date().toISOString(),
				changefreq: "daily",
			});
		}
	}

	const urlArray = fields.map((field) => {
		return `<url>
		<loc>${field.loc}</loc>
        <changefreq>${field.changefreq}</changefreq>
		<lastmod>${field.lastmod}</lastmod>
        <priority>0.7</priority>
		</url>`;
	});

	const body = `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset
	  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	  xmlns:xhtml="https://www.w3.org/1999/xhtml"
	  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
	  ${urlArray.join("")}
	</urlset>`;

	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml",
	};

	return new Response(body, { headers });
}

import type { SanityConfig } from "@/clients/config";
import { getSanityClient } from "@/clients/sanityClient";

import { LandingPage } from "@/types/sanity/landingPage";

import { landingPageForSitemapGroq, landingPageGroq } from "./groq";

/**
 * Fetches a landing page (including drafts) for a given slug
 * @param preview
 * @param slug
 * @returns
 */
export async function getLandingPageDocumentsBySlug(
	config: SanityConfig,
	preview: boolean,
	slug: string
): Promise<Array<LandingPage>> {
	const data = await getSanityClient(config, preview).fetch<Array<LandingPage>>(landingPageGroq, { slug });
	return data;
}

/**
 * Returns only the slug for all landing pages
 * Used to generate a sitemap or for generateStaticParams
 * @param config
 * @returns
 */
export async function getAllLandingPagesForSitemap(config: SanityConfig): Promise<Array<{ slug: string }>> {
	const data = await getSanityClient(config).fetch<Array<{ slug: string }>>(landingPageForSitemapGroq);
	return data;
}

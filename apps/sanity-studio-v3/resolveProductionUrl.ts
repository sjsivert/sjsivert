/* eslint-disable no-process-env */
import { StructureResolverContext } from "sanity/desk";

interface PreviewDocument {
	_type: string;
	_id: string;
	collection: { _ref: any };
	slug: { current: string };
}

// Env vars
const previewSecret = import.meta.env.SANITY_STUDIO_PREVIEW_TOKEN || "";
const remoteWebsiteUrl = import.meta.env.SANITY_STUDIO_NEXT_SITE_URL || "";
// const localUrl = `http://localhost:3000`; // Next site
const localUrl = "http://localhost:5173"; // SvelteKit site

function sanitizeId(id: string): string {
	return id.replace("drafts.", "");
}

export function getBaseUrl(_type: string): string {
	if (window.location.hostname === "localhost") {
		return localUrl;
	}

	return remoteWebsiteUrl;
}

/**
 * This method is called by the structure builder to resolve the website api url for the preview
 * @param doc The Sanity document to create a preview for
 * @returns
 */
export default async function resolveProductionUrl(doc: PreviewDocument, context: StructureResolverContext) {
	const baseUrl = getBaseUrl(doc._type);
	const previewUrl = new URL(baseUrl);
	previewUrl.pathname = `/api/preview`;

	// Add static query params
	previewUrl.searchParams.append(`secret`, previewSecret);
	previewUrl.searchParams.append("_type", doc._type);

	if (doc?._id) {
		// Append the document id if it exists
		previewUrl.searchParams.append(`_id`, sanitizeId(doc._id));
	}

	if (doc?.collection && doc.collection._ref) {
		// If this is a generic page the collection is needed
		// We need to fetch it from the reference
		const collection = await context
			.getClient({ apiVersion: "2021-06-07" })
			.fetch(`*[_id == "${doc.collection._ref}"][0]`);
		previewUrl.searchParams.append("collection", collection.path.current);
	}
	if (doc?.slug && doc.slug.current) {
		// Append the slug as a query param if it exits
		previewUrl.searchParams.append("slug", doc.slug.current);
	}

	return previewUrl.toString();
}

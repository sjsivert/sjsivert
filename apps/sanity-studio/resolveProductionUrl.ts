/* eslint-disable no-process-env */
import SchemaType from "common/src/sanity/SchemaType";
import sanityClient from "part:@sanity/base/client";

// Setup client
const client = sanityClient.withConfig({ apiVersion: "2021-06-07" });

const previewSecret = process.env.SANITY_STUDIO_PREVIEW_TOKEN;
const remoteWebsiteUrl = process.env.SANITY_STUDIO_NEXT_SITE_URL;
const localUrl = `http://localhost:3000`;

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
export default async function resolveProductionUrl(doc: {
	_type: string;
	_id: string;
	collection: { _ref: any };
	slug: { current: string };
}) {
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
		const collection = await client.fetch(`*[_id == "${doc.collection._ref}"][0]`);
		previewUrl.searchParams.append("collection", collection.path.current);
	}
	if (doc?.slug && doc.slug.current) {
		// Append the slug as a query param if it exits
		previewUrl.searchParams.append("slug", doc.slug.current);
	}

	return previewUrl.toString();
}

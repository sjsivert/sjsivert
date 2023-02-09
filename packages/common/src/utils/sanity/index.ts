/**
 * Return one item from an array of drafts and published content.
 * Used to make Sanity preview mode work
 */
export function filterDataToSingleItem<T>(data: Array<T>, preview: boolean): T | null {
	if (!Array.isArray(data)) {
		if (documentIsDraft(data) && !preview) return null;
		return data;
	}

	if (data.length === 1) {
		// If the only document is a draft and preview is false
		// there are no documents to return
		if (documentIsDraft(data[0]) && !preview) return null;
		// Return the document
		return data[0];
	}

	return getDocumentBasedOnPreviewState<T>(data, preview);
}

function getDocumentBasedOnPreviewState<T>(documents: Array<T>, preview: boolean): T | null {
	// Try to find a draft
	const foundDraft = documents.find((item) => documentIsDraft(item));
	// If preview is active and a draft was found
	if (preview && foundDraft) {
		// return the draft
		return foundDraft;
	}
	// Return a published document (not draft) or null if not found
	return documents.find((item) => !documentIsDraft(item)) || null;
}

function documentIsDraft(doc: any): boolean {
	return doc._id.startsWith(`drafts.`);
}

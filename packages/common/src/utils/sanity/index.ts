/**
 * Return one item from an array of drafts and published content.
 * Used to make Sanity preview mode work
 */
export function filterDataToSingleItem<T>(data: Array<T>, preview: boolean): T {
	if (!Array.isArray(data)) {
		return data;
	}

	if (data.length === 1) {
		return data[0];
	}

	if (preview) {
		return data.find((item) => (item as any)._id.startsWith(`drafts.`)) || data[0];
	}

	return data[0];
}

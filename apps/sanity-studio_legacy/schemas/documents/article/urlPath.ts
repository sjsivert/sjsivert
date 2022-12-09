import SchemaType from "common/src/sanity/SchemaType";

export default {
	name: SchemaType.ARTICLE_COLLECTION_URL_PATH,
	title: "Group / Path",
	type: "document",
	fieldsets: [
		{
			name: "optionalSidebar",
			title: "Sidebar",
			description: "(Optional) Add a single link-card to the collection sidebar",
			options: { collapsible: true, collapsed: true },
		},
	],
	fields: [
		{
			name: "name",
			title: "Collection name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},

		{
			name: "path",
			title: "Collection",
			type: "slug",
			description:
				"Define the name for the collection. Since this slug will be a part of the url (/articles/[collection-name]/..), it must be a valid url path.",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) =>
				Rule.required().custom((slug) => {
					const errorMessage =
						"The path can only contain lowercase letters (a-z), numbers (0-9), and underscores (_) or hyphens (-)";
					if (!slug || !slug.current) return errorMessage;
					if ((slug.current as string).match(/^[a-z0-9_-]+$/)) {
						return true;
					}
					return errorMessage;
				}),
		},
		{
			name: "description",
			title: "Meta description (SEO)",
			type: "text",
			description:
				"This field will be used for the meta description (SEO). It should describe the content of the page and must be between 55 and 160 characters",
			validation: (Rule) => Rule.required().min(55).max(160),
		},
	],
	preview: {
		select: {
			title: "name",
		},
	},
};

import SchemaType from "common/src/sanity/SchemaType";

export default {
	name: SchemaType.PAGE_HOME,
	title: "Home",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Page title",
			type: "string",
			description: "(required) The title of the page. This is used for search engines.",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "description",
			title: "Meta description",
			type: "text",
			description:
				"(required) This field will be used for the meta description (SEO). It should describe the content of the page and must be between 55 and 160 characters",
			validation: (Rule) => Rule.required().min(56).max(160),
		},
		{
			name: "pageItems",
			title: "Page components",
			description: "Add, remove and edit page components.",
			type: "array",
			of: [
				{ type: SchemaType.LANDING_PAGE_ITEM_HERO },
				{ type: SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR },
			],
			validation: (Rule: { required: () => any }) =>
				Rule.required().min(1).error("Min 1 component must be added to the page"),
		},
	],
};

import SchemaType from "common/sanity/SchemaType";

export default {
	name: SchemaType.ARTICLE_CATEGORY,
	title: "Category",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "name",
		},
	},
};

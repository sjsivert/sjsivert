import SchemaType from "common/src/sanity/SchemaType";
import { RiLayoutGridFill } from "react-icons/ri";

export default {
	type: "object",
	title: "Landing Page: Articles Section",
	name: SchemaType.LANDING_PAGE_ITEM_ARTICLE_SECTION,
	icon: RiLayoutGridFill,
	fieldsets: [
		{
			name: "header",
			title: "Article Section: Header",
			description: "",
			options: { collapsible: true, collapsed: false },
		},
	],
	fields: [
		{
			name: "hideHeader",
			title: "Hide article section header",
			type: "boolean",
			fieldset: "header",
			description: "Hide article section header with title and description from website users",
		},
		{
			name: "title",
			title: "Title",
			type: "string",
			fieldset: "header",
			description: "The article section title",
			validation: (Rule: { required: () => any }) =>
				Rule.required().error("Article section: The title is required"),
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			description: "This is the articles section description",
			fieldset: "header",
			validation: (Rule: { required: () => any }) =>
				Rule.required().error("Article section: The description is required"),
		},
		{
			name: "articleReferences",
			title: "Article reference",
			description: "Select a max number of 3 articles to reference",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: SchemaType.PAGE_ARTICLE }],
				},
			],
			validation: (Rule: { required: () => any }) =>
				Rule.required().max(3).error("Article section: A maximum of 3 references can be added"),
		},
		{
			name: "backgroundColor",
			title: "Background Color",
			description: "Choose between white or light grey background color",
			type: "string",
			options: {
				list: [
					{ title: "White", value: "white" },
					{ title: "Grey", value: "grey" },
				],
			},
			validation: (Rule: { required: () => any }) =>
				Rule.required().error("Article section: Please select a «background color»"),
		},
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection: { title: string }) {
			const { title } = selection;
			return {
				title: title,
				subtitle: " Articles Section component",
			};
		},
	},
};

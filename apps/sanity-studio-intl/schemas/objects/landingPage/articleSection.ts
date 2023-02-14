import { localeStringValidator, localeTextValidator } from "../locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { RiLayoutGridFill } from "react-icons/ri";
import { ArrayRule, ReferenceRule, StringRule, defineField, defineType } from "sanity";

export default defineType({
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
		defineField({
			name: "hideHeader",
			title: "Hide article section header",
			type: "boolean",
			fieldset: "header",
			description: "Hide article section header with title and description from website users",
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "localeString",
			fieldset: "header",
			description: "The article section title",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "localeText",
			description: "This is the articles section description",
			fieldset: "header",
			validation: (Rule) =>
				Rule.custom(localeTextValidator).error("Article section: The description is required"),
		}),
		defineField({
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
			validation: (Rule: ArrayRule<ReferenceRule>) =>
				Rule.required().max(3).error("Article section: A maximum of 3 references can be added"),
		}),
		defineField({
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
			validation: (Rule: StringRule) =>
				Rule.required().error("Article section: Please select a «background color»"),
		}),
	],
	preview: {
		select: {
			title: "title.en",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title,
				subtitle: " Articles Section component",
			};
		},
	},
});

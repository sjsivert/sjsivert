import { landingPageSlugValidator } from "./blackList";
import SchemaType from "common/src/sanity/SchemaType";
import { CgWebsite } from "react-icons/cg";
import { CgComponents } from "react-icons/cg";
import { ArrayRule, ReferenceRule, Rule, StringRule, TextRule, defineField, defineType } from "sanity";

/**
 * Defines a landing page / home page
 * This is used for the home page and other landing pages
 */

export default defineType({
	name: SchemaType.PAGE_LANDING_PAGE,
	title: "Landing page",
	type: "document",
	icon: CgWebsite,
	fields: [
		defineField({
			name: "title",
			title: "Page title",
			description: "(required) The title of the page. This is used for search engines.",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Page slug (path)",
			type: "slug",
			description: "",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: landingPageSlugValidator,
		}),
		defineField({
			name: "description",
			title: "Meta description",
			type: "text",
			description:
				"(required) This field will be used for the meta description (SEO). It should describe the content of the page and must be between 55 and 160 characters",
			validation: (Rule: TextRule) => Rule.required().min(56).max(160),
		}),
		defineField({
			name: "pageItems",
			title: "Page components",
			description: "Add, remove and edit page components.",
			type: "array",
			of: [
				{ type: SchemaType.LANDING_PAGE_ITEM_HERO },
				{ type: SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR },
				{
					type: "reference",
					title: "Global component",
					icon: CgComponents,
					to: [{ type: SchemaType.GLOBAL_COMP_INFO_BOX }, { type: SchemaType.GLOBAL_COMP_ALERT }],
				},
			],
			validation: (Rule: ArrayRule<Rule | ReferenceRule>) =>
				Rule.required().min(1).error("Min 1 component must be added to the page"),
		}),
	],
	preview: {
		select: {
			title: "title",
		},
	},
});

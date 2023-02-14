import { localeStringValidator, localeTextValidator } from "../../objects/locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { CgComponents } from "react-icons/cg";
import { ArrayRule, Rule, defineField, defineType } from "sanity";

export default defineType({
	name: SchemaType.PAGE_HOME,
	title: "Home",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Page title",
			type: "localeString",
			description: "(required) The title of the page. This is used for search engines.",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "description",
			title: "Meta description",
			type: "localeText",
			description:
				"(required) This field will be used for the meta description (SEO). It should describe the content of the page and must be between 55 and 160 characters",
			validation: (Rule) => Rule.custom(localeTextValidator),
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
			validation: (Rule: ArrayRule<Rule>) =>
				Rule.required().min(1).error("Min 1 component must be added to the page"),
		}),
	],
});

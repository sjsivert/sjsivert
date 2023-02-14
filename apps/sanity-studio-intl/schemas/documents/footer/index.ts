import { localeStringValidator } from "../../objects/locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { BiFile } from "react-icons/bi";
import { defineField, defineType } from "sanity";

/**
 * Footer document, links and text in footer of website
 */
export default defineType({
	name: SchemaType.SITE_FOOTER,
	title: "Footer",
	type: "document",
	icon: BiFile,
	fields: [
		defineField({
			name: "footerText",
			description: "(required) Text that appears on bottom right of the page",
			title: "Footer text",
			type: "localeString",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "footerLinks",
			title: "Footer Links",
			description: "(optional) Links that appear on the bottom of the page",
			type: "array",
			of: [{ type: SchemaType.LINK_OBJECT }],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Footer",
			};
		},
	},
});

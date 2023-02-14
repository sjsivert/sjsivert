import { localeStringValidator } from "../locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { AiOutlineLink } from "react-icons/ai";
import { UrlRule, defineField, defineType } from "sanity";

/**
 * Main menu item with link (url)
 */
export default defineType({
	type: "object",
	title: "Link item",
	description: "This creates a menu item with a link to a relative or absolute url",
	name: SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT,
	icon: AiOutlineLink,
	fields: [
		defineField({
			name: "label",
			title: "Label",
			type: "localeString",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "icon",
			title: "Icon",
			description: "Select an icon",
			type: "string",
			options: {
				list: [
					{ title: "Home", value: "home" },
					{ title: "Document", value: "document" },
					{ title: "Newspaper", value: "newspaper" },
				],
			},
		}),
		defineField({
			name: "url",
			title: "Url",
			type: "url",
			validation: (Rule: UrlRule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				}).required(),
		}),
	],
	preview: {
		select: {
			title: "label.en",
		},
	},
});

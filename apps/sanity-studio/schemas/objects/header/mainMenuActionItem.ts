import SchemaType from "common/sanity/SchemaType";
import { AiOutlineLink } from "react-icons/ai";

/**
 * Main menu item with link (url)
 */
export default {
	type: "object",
	title: "Link item",
	description: "This creates a menu item with a link to a relative or absolute url",
	name: SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT,
	icon: AiOutlineLink,
	fields: [
		{
			name: "label",
			title: "Label",
			type: "string",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "icon",
			title: "Icon",
			description: "Select an icon",
			type: "string",
			options: {
				list: [
					{ title: "Home", value: "home" },
					{ title: "Document", value: "document" },
					{ title: "Presentation Chart Bar", value: "presentation-chart-bar" },
					{ title: "Newspaper", value: "newspaper" },
				],
			},
			//validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "url",
			title: "Url",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				}).required(),
		},
	],
	preview: {
		select: {
			title: "label",
		},
	},
};

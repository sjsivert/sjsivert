import SchemaType from "common/sanity/SchemaType";
import { BsFillMenuButtonFill } from "react-icons/bs";

/**
 * Main menu item with submenu
 */
export default {
	type: "object",
	title: "Sub-menu item",
	name: SchemaType.MAIN_MENU_ITEM_OBJECT,
	description: "This creates a menu item with a sub-menu of links",
	icon: BsFillMenuButtonFill,
	fields: [
		{
			name: "label",
			title: "Label",
			type: "string",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "subItems",
			title: "Action items",
			type: "array",
			of: [{ type: SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT }],
			validation: (Rule: { required: () => any }) => Rule.required().min(1),
		},
	],
	preview: {
		select: {
			title: "label",
		},
	},
};

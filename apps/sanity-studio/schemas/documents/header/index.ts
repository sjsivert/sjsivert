import SchemaType from "common/sanity/SchemaType";
import { BiFile } from "react-icons/bi";

/**
 * Main menu
 */
export default {
	name: SchemaType.MAIN_MENU,
	title: "Main menu",
	type: "document",
	icon: BiFile,
	fields: [
		{
			name: "menuItems",
			title: "Menu items",
			description: "Add, remove and edit menu items.",
			type: "array",
			of: [
				{ type: SchemaType.MAIN_MENU_ITEM_OBJECT },
				{ type: SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT },
			],
			validation: (Rule: { required: () => any }) =>
				Rule.required().min(1).error("At least 1 component must be added"),
		},
	],
	preview: {
		prepare() {
			return {
				title: "Main menu",
			};
		},
	},
};

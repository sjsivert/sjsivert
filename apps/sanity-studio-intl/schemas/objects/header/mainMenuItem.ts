import { localeStringValidator } from "../locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { ArrayRule, Rule, defineField, defineType } from "sanity";

/**
 * Main menu item with submenu
 */
export default defineType({
	type: "object",
	title: "Sub-menu item",
	name: SchemaType.MAIN_MENU_ITEM_OBJECT,
	description: "This creates a menu item with a sub-menu of links",
	icon: BsFillMenuButtonFill,
	fields: [
		defineField({
			name: "label",
			title: "Label",
			type: "localeString",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "subItems",
			title: "Action items",
			type: "array",
			of: [{ type: SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT }],
			validation: (Rule: ArrayRule<Rule>) => Rule.required().min(1),
		}),
	],
	preview: {
		select: {
			title: "label.en",
		},
	},
});

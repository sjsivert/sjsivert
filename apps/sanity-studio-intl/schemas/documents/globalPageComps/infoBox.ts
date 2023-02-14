import { localeStringValidator, localeTextValidator } from "../../objects/locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { defineField, defineType } from "sanity";

export default defineType({
	name: SchemaType.GLOBAL_COMP_INFO_BOX,
	title: "Global: Info Box",
	type: "document",
	icon: AiOutlineInfoCircle,
	fields: [
		defineField({
			name: "title",
			description: "The title of the component, used in the list",
			title: "Title",
			type: "localeString",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "infoText",
			title: "Info text",
			description: "The text to display in the info box",
			type: "localeText",
			validation: (Rule) => Rule.custom(localeTextValidator),
		}),
	],
	preview: {
		select: {
			title: "title.en",
		},
		prepare(selection) {
			return {
				title: selection.title,
				subtitle: "Global component",
			};
		},
	},
});

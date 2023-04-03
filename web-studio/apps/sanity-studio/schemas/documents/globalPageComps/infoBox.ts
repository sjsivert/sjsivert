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
			type: "string",
			validation: (Rule: { required: () => any }) => Rule.required(),
		}),
		defineField({
			name: "infoText",
			title: "Infor text",
			description: "The text to display in the info box",
			type: "text",
			validation: (Rule: { required: () => any }) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection) {
			return {
				title: selection.title,
				subtitle: "Global component",
			};
		},
	},
});

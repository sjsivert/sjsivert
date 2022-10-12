import SchemaType from "common/sanity/SchemaType";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default {
	name: SchemaType.GLOBAL_COMP_INFO_BOX,
	title: "Global: Info Box",
	type: "document",
	icon: AiOutlineInfoCircle,
	fields: [
		{
			name: "title",
			description: "The title of the component, used in the list",
			title: "Title",
			type: "string",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "infoText",
			title: "Infor text",
			description: "The text to display in the info box",
			type: "text",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection: { title: string }) {
			return {
				title: selection.title,
				subtitle: "Global component",
			};
		},
	},
};

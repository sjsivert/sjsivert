import SchemaType from "common/sanity/SchemaType";
import { FiAlertTriangle } from "react-icons/fi";

export default {
	name: SchemaType.GLOBAL_COMP_ALERT,
	title: "Global: Alert",
	type: "document",
	icon: FiAlertTriangle,
	fields: [
		{
			name: "title",
			description: "The title of the component, used in the list",
			title: "Title",
			type: "string",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "alertText",
			title: "Alert text",
			description: "The text to display in the alert box",
			type: "text",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "alertType",
			title: "Alert type",
			description: "Select the alert type",
			type: "string",
			options: {
				list: [
					{ title: "Info", value: "info" },
					{ title: "Warning", value: "warn" },
					{ title: "Error", value: "error" },
				],
			},
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

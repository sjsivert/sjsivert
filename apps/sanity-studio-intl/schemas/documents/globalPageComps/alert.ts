import { localeStringValidator, localeTextValidator } from "../../objects/locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { FiAlertTriangle } from "react-icons/fi";
import { StringRule, defineField, defineType } from "sanity";

export default defineType({
	name: SchemaType.GLOBAL_COMP_ALERT,
	title: "Global: Alert",
	type: "document",
	icon: FiAlertTriangle,
	fields: [
		defineField({
			name: "title",
			description: "The title of the component, used in the list",
			title: "Title",
			type: "localeString",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "alertText",
			title: "Alert text",
			description: "The text to display in the alert box",
			type: "localeText",
			validation: (Rule) => Rule.custom(localeTextValidator),
		}),
		defineField({
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
			validation: (Rule: StringRule) => Rule.required(),
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

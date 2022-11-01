import SchemaType from "common/src/sanity/SchemaType";
import { FiExternalLink } from "react-icons/fi";

export default {
	type: "object",
	title: "Landing Page: Call-to-action Bar",
	name: SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR,
	icon: FiExternalLink,
	fields: [
		{
			name: "title",
			title: "Title",
			description: "Only used to show a title in Sanity.",
			type: "string",
		},
		{
			name: "bodyText",
			title: "Body Text",
			description: "This is the Call-to-action text",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "callToActionLabel",
			title: "Call to action: Label",
			description: "The label for the call to action",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "callToActionUrl",
			title: "Call to action: URL",
			description: "The url for the call to action",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				})
					.required()
					.error(
						"Call to action bar: A relative or absolute url is required for the «call to action url»"
					),
		},
		{
			name: "backgroundColor",
			title: "Background Color",
			description: "Choose between white or light grey background color",
			type: "string",
			options: {
				list: [
					{ title: "White", value: "white" },
					{ title: "Grey", value: "grey" },
				],
			},
			validation: (Rule: { required: () => any }) =>
				Rule.required().error("Call to action bar: Please select a «Background color»"),
		},
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection: { title: string }) {
			const { title } = selection;
			return {
				title: title,
				subtitle: "Call-to-action Bar component",
			};
		},
	},
};

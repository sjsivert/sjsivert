/**
 * This is the schema for the Call to action portable text component
 * This is available in all documents where the blockContainer is in use
 */
import { FiExternalLink } from "react-icons/fi";

export default {
	type: "object",
	title: "Call to action",
	name: "callToAction",
	icon: FiExternalLink,
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			title: "Body Text",
			description: "This is the body text for the call to action component",
			name: "bodyBlock",
			validation: (Rule: { required: () => any }) => Rule.required(),
			type: "array",
			of: [
				{
					type: "callToActionBlock",
				},
			],
		},
		{
			name: "callToActionButton",
			type: "callToActionButton",
		},
	],
	preview: {
		select: {
			title: "title",
		},
	},
};

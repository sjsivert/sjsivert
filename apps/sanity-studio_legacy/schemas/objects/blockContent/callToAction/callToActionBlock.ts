import { AiOutlineLink } from "react-icons/ai";

/**
 * Block content (portable text) for the «callToAction» schema
 */
export default {
	title: "Block Container",
	name: "callToActionBlock",
	type: "block",
	styles: [],
	lists: [],
	marks: {
		decorators: [],
		annotations: [
			{
				title: "Inline link",
				name: "link",
				type: "object",
				icon: AiOutlineLink,
				fields: [
					{
						title: "Link",
						name: "href",
						type: "url",
						validation: (Rule) =>
							Rule.uri({
								allowRelative: true,
								scheme: ["https", "http", "mailto", "tel"],
							}).required(),
					},
				],
			},
		],
	},
};

import SchemaType from "common/src/sanity/SchemaType";
import { BiLink, BiLinkExternal, BiNews } from "react-icons/bi";

import { accessibleImageValidator } from "../accessibleImage";

/**
 * This is block content with the option of inserting objects/components
 * This is primarily used for the Generic Page type
 */
export default {
	title: "Block Container",
	name: "blockContainer",
	type: "object",
	icon: BiNews,
	fields: [
		{
			name: "body",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					// Styles let you set what your user can mark up blocks with. These
					// correspond with HTML tags, but you can set any title or value
					// you want and decide how you want to deal with it where you want to
					// use your content.
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
						{ title: "Quote", value: "blockquote" },
					],
					lists: [{ title: "Bullet", value: "bullet" }],
					// Marks let you mark up inline text in the block editor.
					marks: {
						// Decorators usually describe a single property – e.g. a typographic
						// preference or highlighting by editors.
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
						],
						// Annotations can be any object structure – e.g. a link or a footnote.
						annotations: [
							{
								title: "External link",
								name: "link",
								type: "object",
								icon: BiLinkExternal,
								fields: [
									{
										title: "External link",
										name: "href",
										type: "url",
										validation: (Rule) =>
											Rule.uri({
												allowRelative: true,
												scheme: ["https", "http", "mailto", "tel"],
											}).required(),
									},
									{
										title: "Should open link in new tab/window",
										name: "blank",
										type: "boolean",
									},
								],
							},
						],
					},
				},
				{
					type: "accessibleImage",
					title: "Image",
					validation: accessibleImageValidator,
				},
				{
					type: "youtube",
				},
				{ type: "callToAction" },
			],
		},
	],
};

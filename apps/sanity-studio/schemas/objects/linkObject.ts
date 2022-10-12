import SchemaType from "common/sanity/SchemaType";

export default {
	title: "Link",
	name: SchemaType.LINK_OBJECT,
	type: "object",
	fields: [
		{
			name: "footerLinkTitle",
			type: "string",
			title: "Footer link title",
		},
		{
			name: "footerLink",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				}).required(),
		},
	],
	preview: {
		select: {
			title: "footerLinkTitle",
		},
	},
};

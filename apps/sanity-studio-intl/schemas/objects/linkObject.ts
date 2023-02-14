import { localeStringValidator } from "./locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { UrlRule, defineField, defineType } from "sanity";

export default defineType({
	title: "Link",
	name: SchemaType.LINK_OBJECT,
	type: "object",
	fields: [
		defineField({
			name: "footerLinkTitle",
			type: "localeString",
			title: "Footer link title",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "footerLink",
			type: "url",
			validation: (Rule: UrlRule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				}).required(),
		}),
	],
	preview: {
		select: {
			title: "footerLinkTitle.en",
		},
	},
});

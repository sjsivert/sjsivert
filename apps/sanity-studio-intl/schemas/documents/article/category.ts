import { localeStringValidator } from "../../objects/locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { SlugRule, defineField, defineType } from "sanity";

export default defineType({
	name: SchemaType.ARTICLE_CATEGORY,
	title: "Category",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "localeString",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name.en",
				maxLength: 96,
			},
			validation: (Rule: SlugRule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "name.en",
		},
	},
});

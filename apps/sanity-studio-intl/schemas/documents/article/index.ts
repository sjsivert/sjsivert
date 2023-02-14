import { accessibleImageValidator } from "../../objects/landingPage/accessibleImage";
import { localeStringValidator, localeTextValidator } from "../../objects/locale/validators";
import SchemaType from "common/src/sanity/SchemaType";
import { RiArticleLine } from "react-icons/ri";
import { ReferenceRule, Rule, SlugRule, defineField, defineType } from "sanity";

export default defineType({
	name: SchemaType.PAGE_ARTICLE,
	title: "Article",
	type: "document",
	icon: RiArticleLine,
	groups: [
		{ name: "content", title: "Content" },
		{ name: "configuration", title: "Configuration" },
		{ name: "seo", title: "SEO" },
	],
	fields: [
		defineField({
			name: "collection",
			title: "Collection",
			description: "(required) Select the collection this page belongs to",
			group: "configuration",
			type: "reference",
			to: [{ type: SchemaType.ARTICLE_COLLECTION_URL_PATH }],
			validation: (Rule: ReferenceRule) => Rule.required(),
		}),
		defineField({
			name: "title",
			title: "Page title",
			group: "content",
			type: "localeString",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			description:
				"(required) The slug is the name of this page in the url. This can be custom, or you can use the generate button to create a url from the title (this will use the US English title). Note that the slug must be unique for all pages.",
			group: "configuration",
			type: "slug",
			options: {
				source: "title.en",
				maxLength: 96,
			},
			validation: (Rule: SlugRule) => Rule.required(),
		}),
		defineField({
			name: "category",
			title: "Category",
			description: "(optional) Add a category to this page to enable filtering for the listings page",
			group: "configuration",
			type: "reference",
			to: { type: SchemaType.ARTICLE_CATEGORY },
		}),
		defineField({
			type: SchemaType.LANDING_PAGE_ITEM_ACCESSIBLE_IMAGE,
			name: "articlePreviewImage",
			description: "This is the image used to generate previews for this article",
			title: "Preview Image",
			group: "content",
			validation: accessibleImageValidator,
		}),
		defineField({
			name: "description",
			title: "Meta description",
			type: "localeString",
			group: "seo",
			description:
				"This field will be used for the meta description (SEO). It should describe the content of the page and must be between 55 and 160 characters",
			validation: (Rule) => Rule.custom(localeStringValidator),
		}),
		defineField({
			name: "summary",
			title: "Summary",
			group: "content",
			type: "localeText",
			description: "(public) This is the summary of this post",
			validation: (Rule) => Rule.custom(localeTextValidator),
		}),
		defineField({
			name: "blocks",
			title: "Page content",
			description:
				"This is where you create the public main content for the page. Note that there is one block content field for each language.",
			group: "content",
			type: "localeBlockContainer",
			validation: (Rule: Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "title.en",
			path: "collection.path",
			slug: "slug",
		},
		prepare(selection) {
			const { title, path, slug } = selection;
			return {
				title: title,
				subtitle: `/articles/${path?.current || "..."}/${slug?.current || "..."}`,
			};
		},
	},
});

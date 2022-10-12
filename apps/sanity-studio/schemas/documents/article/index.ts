import SchemaType from "common/sanity/SchemaType";
import { RiArticleLine } from "react-icons/ri";

import { accessibleImageValidator } from "../../objects/accessibleImage";

export default {
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
		{
			name: "collection",
			title: "Collection",
			description: "(required) Select the collection this page belongs to",
			group: "configuration",
			type: "reference",
			to: [{ type: SchemaType.ARTICLE_COLLECTION_URL_PATH }],
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "title",
			title: "Page title",
			group: "content",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			description:
				"(required) The slug is the name of this page in the url. This can be custom, or you can use the generate button to create a url from the title (this will use the US English title). Note that the slug must be unique for all pages.",
			group: "configuration",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			name: "category",
			title: "Category",
			description: "(optional) Add a category to this page to enable filtering for the listings page",
			group: "configuration",
			type: "reference",
			to: { type: SchemaType.ARTICLE_CATEGORY },

			// validation: (Rule: { required: () => any }) => Rule.required(),
		},
		{
			type: "accessibleImage",
			name: "articlePreviewImage",
			description: "This is the image used to generate previews for this article",
			title: "Preview Image",
			group: "content",
			validation: accessibleImageValidator,
		},
		{
			name: "description",
			title: "Meta description",
			type: "string",
			group: "seo",
			description:
				"This field will be used for the meta description (SEO). It should describe the content of the page and must be between 55 and 160 characters",
			validation: (Rule) => Rule.required().min(55).max(160),
		},
		{
			name: "summary",
			title: "Summary",
			group: "content",
			type: "text",
			description: "(public) This is the summary of this post",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "blocks",
			title: "Page content",
			description:
				"This is where you create the public main content for the page. Note that there is one block content field for each language.",
			group: "content",
			type: "blockContainer",
			validation: (Rule: { required: () => any }) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "title",
			path: "collection.path",
			slug: "slug",
		},
		prepare(selection: { title: string; path: { current: string }; slug: { current: string } }) {
			const { title, path, slug } = selection;
			return {
				title: title,
				subtitle: `/articles/${path?.current || "..."}/${slug?.current || "..."}`,
			};
		},
	},
};

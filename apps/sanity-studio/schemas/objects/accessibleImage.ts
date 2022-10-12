import SchemaType from "common/sanity/SchemaType";
import { BiImage } from "react-icons/bi";

interface AccessibleImage {
	alt: string;
	caption?: string;
	asset?: {
		_ref: string;
		_type: string;
	};
}

interface Context {
	type: {
		title: string;
	};
}

/**
 * Validator function for AccessibleImage
 */
export function accessibleImageValidator(Rule) {
	return Rule.custom((fields: AccessibleImage, context: Context) => {
		if (fields && fields.asset && fields.asset._ref && typeof fields.alt === "string") {
			return true;
		}
		return `${context.type.title}: The image and an alt text is required`;
	});
}

export default {
	type: "image",
	title: "Image with caption",
	name: SchemaType.ACCESSIBLE_IMAGE,
	options: { hotspot: true },
	icon: BiImage,
	fields: [
		{
			name: "alt",
			title: "Alternative text",
			type: "string",
			options: {
				isHighlighted: true,
			},
		},
		{
			name: "caption",
			title: "Caption",
			type: "string",
			description: "(optional) A description which will be shown under the image",
			options: {
				isHighlighted: true,
			},
		},
	],
	preview: {
		select: {
			title: "alt",
		},
		prepare(selection: { title: string }) {
			const { title } = selection;
			return {
				title: `Image - ${title}`,
			};
		},
	},
};

import AccessibleImageComp from "@/lib/components/AccessibleImage";
import CallToActionComp from "@/lib/components/portableText/callToActionComp";
import YouTubeComp from "@/lib/components/portableText/youtube";
import { PortableTextComponents } from "@portabletext/react";
import { AccessibleImage } from "common/src/types/sanity/accessibleImage";
import { YouTube } from "common/src/types/sanity/youtube";
import Link from "next/link";

/**
 * This is the main serializer for portable text components used in the article template in Sanity
 */
export const portableTextArticleComponents: PortableTextComponents = {
	// Handles custom types/components
	types: {
		accessibleImage: (props) => {
			const value = props.value as AccessibleImage;
			return (
				<figure className="my-4">
					<AccessibleImageComp image={value} alt={value.alt || ""} layout="responsive" objectFit="contain" />
					<figcaption className="mt-4 text-center text-sm">{value.caption || ""}</figcaption>
				</figure>
			);
		},
		youtube: (props) => {
			const value = props.value as YouTube;
			return <YouTubeComp url={value.url} />;
		},
		callToAction: (props) => {
			return <CallToActionComp fields={props.value} />;
		},
	},

	// Handles lists (<ul>, <ol>)
	// PS: Does not add any styling, only here for demoing
	list: {
		bullet: ({ children }) => <ul>{children}</ul>,
		number: ({ children }) => <ol>{children}</ol>,
	},

	// handles list items (<li>)
	// PS: Does not add any styling, only here for demoing
	listItem: {
		bullet: ({ children }) => <li>{children}</li>,
	},

	// handles text marks such as links
	marks: {
		link: ({ value, children }) => {
			return (
				<Link className="underline" href={value?.href}>
					{children}
				</Link>
			);
		},
	},
};

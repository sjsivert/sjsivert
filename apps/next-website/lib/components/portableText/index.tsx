import { PortableTextComponents } from "@portabletext/react";
import Link from "next/link";

import AccessibleImageComp from "@/lib/components/AccessibleImage";
import CallToActionComp from "@/lib/components/portableText/callToActionComp";
import YouTubeComp from "@/lib/components/portableText/youtube";
import { AccessibleImage } from "@/lib/types/sanity/accessibleImage";
import { YouTube } from "@/lib/types/sanity/youtube";

export const portableTextArticleComponents: PortableTextComponents = {
    types: {
        accessibleImage: (props) => {
            const value = props.value as AccessibleImage;
            return (
                <figure className="my-4">
                    <AccessibleImageComp image={value} alt={value.alt} layout="responsive" objectFit="contain" />
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
    marks: {
        link: ({ value, children }) => {
            return (
                <Link href={value?.href}>
                    <a className="underline">{children}</a>
                </Link>
            );
        },
    },
};

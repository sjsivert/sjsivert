import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { CallToActionBlockComp } from "@/lib/types/sanity/callToAction";

import { callToActionSerializer } from "./internalSerializer";

interface Props {
    fields: CallToActionBlockComp;
}

/**
 * Handles the Call to Action (portable text) component from Sanity
 */
export default function CallToActionComp({ fields }: Props): JSX.Element {
    return (
        <div className="my-6 md:my-12">
            <p>{fields.title}</p>
            <div>
                <PortableText value={fields.bodyBlock} components={callToActionSerializer} />
            </div>
            <div>
                <Link href={fields.callToActionButton.url}>
                    <a>{fields.callToActionButton.label}</a>
                </Link>
            </div>
        </div>
    );
}

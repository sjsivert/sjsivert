import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { CallToActionBlockComp } from "common/src/types/sanity/callToAction";

import { callToActionSerializer } from "./internalSerializer";

interface Props {
	fields: CallToActionBlockComp;
}

/**
 * Handles the Call to Action (portable text) component from Sanity
 */
export default function CallToActionComp({ fields }: Props): JSX.Element {
	return (
		<div className="my-6 border border-slate-800 p-4 md:my-12">
			<p className="font-bold">{fields.title}</p>
			<div>
				<PortableText value={fields.bodyBlock} components={callToActionSerializer} />
			</div>
			<div className="my-4 bg-slate-500 px-4 py-2 text-center">
				<Link href={fields.callToActionButton.url}>
					<a className="text-white">{fields.callToActionButton.label}</a>
				</Link>
			</div>
		</div>
	);
}

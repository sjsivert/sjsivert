import Link from "next/link";

import { PageItemHero } from "@/lib/types/sanity/landingPage/pageItemHero";

interface Props {
	data: PageItemHero;
}

export default function LandingPageHero({ data }: Props) {
	const title = data.title;
	const bodyText = data.bodyText;
	const callToActionLabel = data.callToActionLabel;

	return (
		<div className="bg-blue-500 px-4 py-2 text-center">
			<h3>{title}</h3>
			<p>{bodyText}</p>
			<Link href={data.callToActionUrl}>
				<a>{callToActionLabel}</a>
			</Link>
		</div>
	);
}

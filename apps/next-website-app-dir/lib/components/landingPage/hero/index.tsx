import { PageItemHero } from "common/src/types/sanity/landingPage/pageItemHero";
import { LinkButton } from "ui";

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
			<LinkButton href={data.callToActionUrl}>{callToActionLabel}</LinkButton>
		</div>
	);
}

import { GlobalInfoBox } from "common/src/types/sanity/globalComponents/infoBox";

interface Props {
	infoBoxProps: GlobalInfoBox;
}

export default function GlobalCompInfoBox({ infoBoxProps }: Props) {
	const { title, infoText } = infoBoxProps;
	return (
		<div className="border border-gray-700 p-4">
			<div>
				<h3 className="mt-2">{title}</h3>
				<p className="">{infoText}</p>
			</div>
		</div>
	);
}

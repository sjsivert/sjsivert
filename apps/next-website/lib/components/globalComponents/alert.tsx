import { GlobalAlert } from "@/lib/types/sanity/globalComponents/alert";

interface Props {
	alertProps: GlobalAlert;
}

export default function GlobalCompAlert({ alertProps }: Props) {
	const { title, alertText, alertType } = alertProps;
	let bgColorClass = "bg-red-500";

	if (alertType === "info") {
		bgColorClass = "bg-blue-500";
	}
	if (alertType === "warn") {
		bgColorClass = "bg-yellow-500";
	}

	return (
		<div className={`${bgColorClass} px-4 py-2`}>
			<div>
				<h3 className="mt-2">{title}</h3>
				<p>{alertText}</p>
			</div>
		</div>
	);
}

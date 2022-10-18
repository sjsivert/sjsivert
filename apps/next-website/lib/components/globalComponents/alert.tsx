import { GlobalAlert } from "@/lib/types/sanity/globalComponents/alert";

import { Alert } from "ui";

interface Props {
	alertProps: GlobalAlert;
}

export default function GlobalCompAlert({ alertProps }: Props) {
	const { title, alertText, alertType } = alertProps;

	return (
		<Alert alertType="info" title={title}>
			{alertText}
		</Alert>
	);
}

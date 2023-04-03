import { ReactNode } from "react";
import cn from "classnames";

interface Props {
	/** Specify alert type */
	alertType?: "error" | "info" | "warn";
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
	/** Add alert title */
	title?: string;
}

const Alert = ({ alertType, children, className, title }: Props) => {
	const componentClass = cn(
		"w-full p-4 flex gap-3 rounded-md",
		{
			"bg-red-50 text-red-700": alertType === "error",
			"bg-sky-50 text-sky-700": alertType === "info",
			"bg-yellow-50 text-yellow-700": alertType === "warn",

			"items-center": !title,
		},
		className
	);

	return (
		<div className={componentClass}>
			<div className="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					className="h-5 w-5 flex-shrink-0 stroke-current"
					fill="none"
					aria-hidden="true"
				>
					{(() => {
						switch (alertType) {
							case "error":
								return (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								);
							case "info":
								return (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								);
							case "warn":
								return (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
									/>
								);
							default:
								return "error";
						}
					})()}
				</svg>
			</div>

			<div>
				{title && (
					<h3
						className={cn(`mb-2 text-lg font-bold leading-none`, {
							"text-red-800": alertType === "error",
							"text-sky-800": alertType === "info",
							"text-yellow-800": alertType === "warn",
						})}
					>
						{title}
					</h3>
				)}
				<span>{children}</span>
			</div>
		</div>
	);
};

Alert.displayName = "Alert";

Alert.defaultProps = {
	alertType: "error",
	children: null,
};

export default Alert;

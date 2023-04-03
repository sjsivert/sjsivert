import cn from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
	/** Specify link location */
	href: string;
}

const LinkButton = ({ children, className, href }: Props) => {
	const componentClass = cn(
		`px-7 py-4 text-white text-lg font-bold rounded-full bg-rose-600 transition-color duration-500 hover:bg-rose-700`,
		className
	);

	return (
		<Link className={componentClass} href={href}>
			{children}
		</Link>
	);
};

LinkButton.displayName = "LinkButton";

LinkButton.defaultProps = {
	children: null,
};

export default LinkButton;

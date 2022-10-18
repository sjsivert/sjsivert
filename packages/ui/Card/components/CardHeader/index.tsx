import { ReactNode } from "react";
import cn from "classnames";

export interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
}

const CardHeader = ({ children, className }: Props) => {
	const componentClass = cn(`text-lg font-bold`, className);

	return <h2 className={componentClass}>{children}</h2>;
};

CardHeader.displayName = "";

CardHeader.defaultProps = {
	children: null,
};

export default CardHeader;

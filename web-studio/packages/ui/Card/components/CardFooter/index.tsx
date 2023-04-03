import { ReactNode } from "react";
import cn from "classnames";

export interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
}

const CardFooter = ({ children, className }: Props) => {
	const componentClass = cn(``, className);

	return <h2 className={componentClass}>{children}</h2>;
};

CardFooter.displayName = "";

CardFooter.defaultProps = {
	children: null,
};

export default CardFooter;

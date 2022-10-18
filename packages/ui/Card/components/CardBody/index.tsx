import { ReactNode } from "react";
import cn from "classnames";

export interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
}

const CardBody = ({ children, className }: Props) => {
	const componentClass = cn(`py-4`, className);

	return <div className={componentClass}>{children}</div>;
};

CardBody.displayName = "";

CardBody.defaultProps = {
	children: null,
};

export default CardBody;

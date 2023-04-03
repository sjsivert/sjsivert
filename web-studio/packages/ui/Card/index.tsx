import { ReactNode } from "react";
import cn from "classnames";

import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";

export interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
}

const Card = ({ children, className }: Props) => {
	const componentClass = cn(`p-4 border border-slate-200 rounded-lg`, className);

	return <div className={componentClass}>{children}</div>;
};

Card.displayName = "Card";
CardHeader.displayName = "Card.Header";
CardBody.displayName = "Card.Body";
CardFooter.displayName = "Card.Footer";

Card.defaultProps = {
	children: null,
};

export default Object.assign(Card, {
	Header: CardHeader,
	Body: CardBody,
	Footer: CardFooter,
});

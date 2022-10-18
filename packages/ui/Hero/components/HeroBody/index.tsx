import { ReactNode } from "react";
import cn from "classnames";

export interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
}

const HeroBody = ({ children, className }: Props) => {
	const componentClass = cn(`flex flex-col items-center gap-12`, className);

	return <div className={componentClass}>{children}</div>;
};

HeroBody.displayName = "";

HeroBody.defaultProps = {
	children: null,
};

export default HeroBody;

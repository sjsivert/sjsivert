import { ReactNode } from "react";
import cn from "classnames";

export interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
}

const HeroHeader = ({ children, className }: Props) => {
	const componentClass = cn(`text-white text-8xl font-bold`, className);

	return <h1 className={componentClass}>{children}</h1>;
};

HeroHeader.displayName = "";

HeroHeader.defaultProps = {
	children: null,
};

export default HeroHeader;

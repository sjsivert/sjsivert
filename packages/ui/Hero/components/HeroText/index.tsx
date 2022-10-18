import { ReactNode } from "react";
import cn from "classnames";

export interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
}

const HeroText = ({ children, className }: Props) => {
	const componentClass = cn(`max-w-prose text-white text-xl text-center`, className);

	return <p className={componentClass}>{children}</p>;
};

HeroText.displayName = "";

HeroText.defaultProps = {
	children: null,
};

export default HeroText;

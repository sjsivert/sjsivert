import { ReactNode } from "react";
import cn from "classnames";

import HeroHeader from "./components/HeroHeader";
import HeroBody from "./components/HeroBody";
import HeroText from "./components/HeroText";

interface Props {
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
}

const Hero = ({ children, className }: Props) => {
	const componentClass = cn(
		`w-full h-96 flex flex-col gap-12 items-center justify-center bg-slate-900`,
		className
	);

	return <div className={componentClass}>{children}</div>;
};

Hero.displayName = "Hero";
HeroHeader.displayName = "Hero.Header";
HeroBody.displayName = "Hero.Body";
HeroText.displayName = "Hero.Text";

Hero.defaultProps = {
	children: null,
};

export default Object.assign(Hero, {
	Header: HeroHeader,
	Body: HeroBody,
	Text: HeroText,
});

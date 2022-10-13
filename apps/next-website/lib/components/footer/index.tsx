import SchemaType from "common/sanity/SchemaType";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";

import { Footer } from "@/lib/types/sanity/allPages/footer";

interface Props {
    footerData: Footer;
}

export default function FooterComp({ footerData }: Props): JSX.Element {
    return (
        <footer className="bg-slate-500 px-2 text-white p-4 fixed bottom-0 w-full">
            <p>{footerData.footerText}</p>
        </footer>
    );
}

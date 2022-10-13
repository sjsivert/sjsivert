import Link from "next/link";
import { ReactNode } from "react";

import { MainMenuAndFooter } from "@/lib/types/sanity/allPages";

interface Props {
    mainMenuAndFooterData: MainMenuAndFooter;
    previewActive?: boolean;
    children?: ReactNode | ReactNode[];
}

export default function Layout({ mainMenuAndFooterData, previewActive, children }: Props): JSX.Element {
    return (
        <div className="prose container mx-auto">
            <header className="bg-slate-500 px-2 text-center">
                <h2>
                    <Link href="/">
                        <a>Header</a>
                    </Link>
                </h2>
            </header>
            <main className="px-4">{children}</main>
            <footer className="bg-slate-500 px-2 text-center">
                <h2>Footer</h2>
            </footer>
        </div>
    );
}

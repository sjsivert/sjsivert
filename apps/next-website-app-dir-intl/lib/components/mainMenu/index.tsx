import { supportedLanguages } from "common/src/locales/languages";
import SchemaType from "common/src/sanity/SchemaType";
import type { MainMenu } from "common/src/types/sanity/allPages/mainMenu";
import Link from "next/link";
import Alert from "ui/Alert";

interface Props {
	mainMenuData: MainMenu;
	previewActive?: boolean;
}

export default function MainMenuComp({ mainMenuData, previewActive }: Props): JSX.Element {
	const items = mainMenuData.menuItems.map((item) => {
		if (item._type === SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT) {
			return (
				<li key={item._key}>
					<Link href={item.url}>{item.label}</Link>
				</li>
			);
		} else {
			return (
				<li key={item._key} tabIndex={0}>
					<a>
						{item.label}
						<svg
							className="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
						</svg>
					</a>
					<ul className="bg-base-200 p-2">
						{item.subItems.map((subItem) => {
							if (subItem.url.startsWith("http")) {
								return (
									<li key={subItem._key}>
										<a href={subItem.url} target="_blank" rel="noreferrer">
											{subItem.label}
										</a>
									</li>
								);
							}
							return (
								<li key={subItem._key}>
									<a href={subItem.url}>{subItem.label}</a>
								</li>
							);
						})}
					</ul>
				</li>
			);
		}
	});

	// Add locales
	items.push(
		<li key="locales" tabIndex={0}>
			<a>
				Locale
				<svg
					className="fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
				>
					<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
				</svg>
			</a>
			<ul className="bg-base-200 p-2">
				{supportedLanguages.map((lang) => {
					return (
						<li key={lang.id}>
							{/* Don't use Next Link for swapping locales, it will not work since it prefetches */}
							<a href={`/${lang.id}`}>{lang.title}</a>
						</li>
					);
				})}
			</ul>
		</li>
	);

	return (
		<header className="bg-slate-500">
			{previewActive && (
				<Alert alertType="warn">
					Preview is active {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
					<a href="/api/exit-preview" className="text-blue-400 underline">
						Disable preview mode
					</a>
				</Alert>
			)}
			<nav className="navbar bg-base-200">
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">{items}</ul>
				</div>
			</nav>
		</header>
	);
}

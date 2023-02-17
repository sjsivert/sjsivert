import { sanityConfig } from "@/lib/config/envVariables";
import { BaseParams } from "@/lib/types/pages";
import { getAllArticles } from "common/src/content/sanity-intl/articles";
import { getDefaultLanguage } from "common/src/locales/languages";
import { Locale } from "common/src/types/sanity/common";
import Link from "next/link";

export const revalidate = 3600; // every hour

// SEO
export async function generateMetadata() {
	return {
		title: "All articles",
		description: `A list of all articles`,
	};
}

async function getData(lang: string) {
	const allArticles = await getAllArticles(sanityConfig, lang);
	return allArticles;
}

export default async function ArticleListPage({ params }: { params: BaseParams }) {
	const allArticlePageDocuments = await getData(params.lang);

	// An example of hardcoded strings to be used for locales
	// Stuff like this should probably be kept in a separate file
	// This is just for demo purposes
	const locTitle: Locale = {
		no: "Alle artikler",
		en: "All articles",
	};
	const title = locTitle[params.lang] || locTitle[getDefaultLanguage().id];

	return (
		<>
			<h1>{title}</h1>
			<ul>
				{allArticlePageDocuments.map((article) => {
					return (
						<li key={article._id}>
							<Link href={`articles/${article.collection.path.current}/${article.slug}`}>
								{article.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

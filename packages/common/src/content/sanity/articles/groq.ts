const fields = `
...,
"slug": slug.current,
category->,
collection->
`;

export const allArticlesGroq = `*[_type == "pageArticle" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
	${fields}
}`;

export const allArticlesForCollectionGroq = `*[_type == "pageArticle" && collection->.path.current == $collection && !(_id in path("drafts.**"))] {
	${fields}
}`;

export const articleGroq = `*[_type == "pageArticle" && collection->.path.current == $collection && slug.current == $slug]{
	${fields}
}`;

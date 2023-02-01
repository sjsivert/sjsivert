export const landingPageGroq = `*[_type == "pageLandingPage" && slug.current == $slug]{
	...,
	"slug": slug.current,
	pageItems[] {
		...,
		_type == "reference" => @->,
		_type == "landingPageItemArticleSection" => {
			articleReferences[]-> { 
				...,
				collection->,
				"path": collection->.path.current,
				  "slug": slug.current
			 },
		},
	},	
}`;

export const landingPageForSitemapGroq = `*[_type == "pageLandingPage" && !(_id in path("drafts.**"))] {
	"slug": slug.current,
}`;

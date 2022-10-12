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

export const homePageGroq = `*[_type == "pageHome"]{
	...,
	"slug": slug.current,
	pageItems[] {
		...,
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

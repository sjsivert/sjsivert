/**
 * All types for the entire project
 * These are types which need to be referred to in other documents and in the desk structure
 */
enum SchemaType {
	// Pages
	PAGE_HOME = "pageHome",
	PAGE_ARTICLE = "pageArticle",
	PAGE_LANDING_PAGE = "pageLandingPage",

	// Global page components
	GLOBAL_COMP_INFO_BOX = "globalCompInfoBox",
	GLOBAL_COMP_ALERT = "globalCompAlert",

	// Dynamic articles
	ARTICLE_COLLECTION_URL_PATH = "articleCollectionUrlPath",
	ARTICLE_CATEGORY = "articleCategory",
	ARTICLE_ACCESSIBLE_IMAGE = "articleAccessibleImage", // For localized Sanity Studio (sanity-studio-intl)

	// Landing page comps
	LANDING_PAGE_ITEM_HERO = "landingPageItemHero",
	LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR = "landingPageItemCallToActionBar",
	LANDING_PAGE_ITEM_ARTICLE_SECTION = "landingPageItemArticleSection",
	LANDING_PAGE_ITEM_ACCESSIBLE_IMAGE = "landingPageItemAccessibleImage", // For localized Sanity Studio (sanity-studio-intl)

	// Header/main menu
	MAIN_MENU = "mainMenu",
	MAIN_MENU_ITEM_OBJECT = "mainMenuItemObject",
	MAIN_MENU_ACTION_ITEM_OBJECT = "mainMenuActionItemObject",

	// Footer
	SITE_FOOTER = "siteFooter",
	ACCESSIBLE_IMAGE = "accessibleImage", // For non-localized Sanity Studio (sanity-studio)

	// Objects
	LINK_OBJECT = "linkObject",
}

export default SchemaType;

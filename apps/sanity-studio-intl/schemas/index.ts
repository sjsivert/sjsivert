import pageArticle from "./documents/article";
import pageArticleCategory from "./documents/article/category";
import pageArticleUrlPath from "./documents/article/urlPath";
import footer from "./documents/footer";
import globalCompAlertBox from "./documents/globalPageComps/alert";
import globalCompInfoBox from "./documents/globalPageComps/infoBox";
import mainMenu from "./documents/header";
import pageHomePage from "./documents/homePage";
import pageLandingPage from "./documents/landingPage";
import blockContentAccessibleImage from "./objects/accessibleImage";
import blockContainer from "./objects/blockContent/blockContainer";
import blockContentCallToActionContainer from "./objects/blockContent/callToAction";
import blockContentCallToActionBlock from "./objects/blockContent/callToAction/callToActionBlock";
import blockContentCallToActionButton from "./objects/blockContent/callToAction/callToActionButton";
import youtube from "./objects/blockContent/youtube";
import mainMenuActionItem from "./objects/header/mainMenuActionItem";
import mainMenuItem from "./objects/header/mainMenuItem";
import landingPageCompAccessibleImage from "./objects/landingPage/accessibleImage";
import landingPageCompArticleSection from "./objects/landingPage/articleSection";
import landingPageCompCallToAction from "./objects/landingPage/callToActionBar";
import landingPageCompHero from "./objects/landingPage/hero";
import linkObject from "./objects/linkObject";
import localeBlockContainer from "./objects/locale/localeBlockContainer";
import localeString from "./objects/locale/localeString";
import localeText from "./objects/locale/localeText";

export const schemaTypes = [
	pageArticle,
	pageArticleCategory,
	pageArticleUrlPath,
	footer,
	globalCompAlertBox,
	globalCompInfoBox,
	mainMenu,
	pageHomePage,
	pageLandingPage,
	blockContainer,
	localeBlockContainer,
	blockContentCallToActionContainer,
	blockContentCallToActionBlock,
	blockContentCallToActionButton,
	blockContentAccessibleImage,
	youtube,
	mainMenuActionItem,
	mainMenuItem,
	landingPageCompAccessibleImage,
	landingPageCompArticleSection,
	landingPageCompCallToAction,
	landingPageCompHero,
	linkObject,
	localeString,
	localeText,
];

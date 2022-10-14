/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.SITE_BASE_URL || "http://localhost:3000",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				disallow: "/",
			},
		],
	},
};

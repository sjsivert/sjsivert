/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	transpilePackages: ["ui", "common"],
	experimental: {
		appDir: true,
		//serverComponentsExternalPackages: ["node-fetch", "@portabletext/react"],
		serverComponentsExternalPackages: ["node-fetch"],
	},
};

module.exports = nextConfig;
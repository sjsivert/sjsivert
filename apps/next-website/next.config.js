/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	reactStrictMode: true,
	poweredByHeader: false,
	transpilePackages: ["ui", "common"],
	webpack: (config) => {
		// Debugging setup
		config.output = config.output || {};
		config.output.devtoolModuleFilenameTemplate = function (info) {
			return "file:///" + encodeURI(info.absoluteResourcePath);
		};
		return config;
	},
};

module.exports = nextConfig;

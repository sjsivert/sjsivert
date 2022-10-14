const withTM = require("next-transpile-modules")(["ui", "common"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	reactStrictMode: true,
	poweredByHeader: false,
	webpack: (config) => {
		// Debugging setup
		config.output = config.output || {};
		config.output.devtoolModuleFilenameTemplate = function (info) {
			return "file:///" + encodeURI(info.absoluteResourcePath);
		};
		return config;
	},
};

module.exports = withTM(nextConfig);

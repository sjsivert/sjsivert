module.exports = {
	printWidth: 110,
	semi: true,
	arrowParens: "always",
	singleQuote: false,
	trailingComma: "es5",
	bracketSpacing: true,
	useTabs: true,
	tabWidth: 4,
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	// This must be set for both import sort and tailwind sort to work
	pluginSearchDirs: false,
	plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
};

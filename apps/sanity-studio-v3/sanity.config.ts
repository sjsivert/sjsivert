import { structure } from "./deskStructure";
import { schemaTypes } from "./schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
	name: "default",
	title: "noa-template-studio",

	projectId: "0tejmv10",
	dataset: "development",

	plugins: [deskTool({ structure })],

	schema: {
		types: schemaTypes,
	},
});

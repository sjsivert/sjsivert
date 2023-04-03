import { structure } from "./deskStructure";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
	name: "default",
	title: "sindreJS",

	projectId: "63j90etf",
	dataset: "production",

	plugins: [deskTool({ structure }), visionTool()],

	schema: {
		types: schemaTypes,
	},
});

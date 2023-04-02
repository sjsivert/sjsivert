import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { LinkButton } from "ui";

export default {
	title: "Components/LinkButton",
	component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: "Link Button",
	href: "#",
};

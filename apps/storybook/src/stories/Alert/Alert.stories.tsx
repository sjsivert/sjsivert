import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Alert } from "ui";

export default {
    title: "Components/Alert",
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    alertType: "error",
    children: "Alert with error message",
    title: "Error title",
};

export const Error = Template.bind({});
Error.args = {
    ...Default.args,
};

export const Info = Template.bind({});
Info.args = {
    alertType: "info",
    children: "Alert with info message",
    title: "Info title",
};

export const Warn = Template.bind({});
Warn.args = {
    alertType: "warn",
    children: "Alert with warning message",
    title: "Warning title",
};

export const ErrorWithoutTitle = Template.bind({});
ErrorWithoutTitle.args = {
    alertType: "error",
    children: "Alert with error message",
};

export const InfoWithoutTitle = Template.bind({});
InfoWithoutTitle.args = {
    alertType: "info",
    children: "Alert with info message",
};

export const WarnWithoutTitle = Template.bind({});
WarnWithoutTitle.args = {
    alertType: "warn",
    children: "Alert with warning message",
};

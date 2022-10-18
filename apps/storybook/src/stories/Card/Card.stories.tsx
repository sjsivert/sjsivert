import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Card } from "ui";

export default {
    title: "Components/Card",
    component: Card,
    subcomponents: {
        "Hero.Header": Card.Header,
        "Hero.Body": Card.Body,
        "Hero.Footer": Card.Footer,
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <Card.Header>Card Title</Card.Header>
            <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Card.Body>
            <Card.Footer>Card Footer</Card.Footer>
        </>
    ),
};

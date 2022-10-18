import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Hero, LinkButton } from "ui";

export default {
    title: "Components/Hero",
    component: Hero,
    subcomponents: {
        "Hero.Header": Hero.Header,
        "Hero.Body": Hero.Body,
        "Hero.Text": Hero.Text,
    },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <Hero.Header>Hero Title</Hero.Header>
            <Hero.Body>
                <Hero.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industries standard dummy text ever since the 1500s
                </Hero.Text>
                <LinkButton href="#">Hero button</LinkButton>
            </Hero.Body>
        </>
    ),
};

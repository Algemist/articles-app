import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        {
            content: 'content1content1content1',
            value: 'value1',
        },
        {
            content: 'content1content1content2',
            value: 'value2',
        },
    ],
    value: 'value1',
};

export const topLeft = Template.bind({});
topLeft.args = {
    items: [
        {
            content: 'content1content1content1',
            value: 'value1',
        },
        {
            content: 'content1content1content2',
            value: 'value2',
        },
    ],
    value: 'value1',
    direction: 'top left',
};

export const topRight = Template.bind({});
topRight.args = {
    items: [
        {
            content: 'content1content1content1',
            value: 'value1',
        },
        {
            content: 'content1content1content2',
            value: 'value2',
        },
    ],
    value: 'value1',
    direction: 'top right',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    items: [
        {
            content: 'content1content1content1',
            value: 'value1',
        },
        {
            content: 'content1content1content2',
            value: 'value2',
        },
    ],
    value: 'value1',
    direction: 'bottom left',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    items: [
        {
            content: 'content1content1content1',
            value: 'value1',
        },
        {
            content: 'content1content1content2',
            value: 'value2',
        },
    ],
    value: 'value1',
    direction: 'bottom right',
};

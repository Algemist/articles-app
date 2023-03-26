import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarImage from 'shared/assets/test/michael_scott.jpg';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
Light.args = {
    comments: [
        {
            text: 'text comment',
            id: '1',
            user: {
                id: '1',
                username: 'Algemist',
                avatar: AvatarImage,
            },
        },
        {
            text: 'text comment 2',
            id: '2',
            user: {
                id: '2',
                username: 'Username 2',
                avatar: AvatarImage,
            },
        },
    ],
    isLoading: false,
};

export const Dark = Template.bind({});
Dark.args = {
    comments: [
        {
            text: 'text comment',
            id: '1',
            user: {
                id: '1',
                username: 'Algemist',
                avatar: AvatarImage,
            },
        },
        {
            text: 'text comment 2',
            id: '2',
            user: {
                id: '2',
                username: 'Username 2',
                avatar: AvatarImage,
            },
        },
    ],
    isLoading: false,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const NoComments = Template.bind({});
NoComments.args = {
    comments: undefined,
};
NoComments.decorators = [ThemeDecorator(Theme.DARK)];

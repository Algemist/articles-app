import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import AvatarImage from '@/shared/assets/test/michael_scott.jpg';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const data = {
    text: 'text comment',
    id: '1',
    user: {
        id: '1',
        username: 'Algemist',
        avatar: AvatarImage,
    },
};

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
    comment: data,
};

export const Dark = Template.bind({});
Dark.args = {
    comment: data,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingLight = Template.bind({});
LoadingLight.args = {
    isLoading: true,
};

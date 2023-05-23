import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

export default {
    title: '/ArticleListItemRedesigned',
    component: ArticleListItemRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItemRedesigned>;

const Template: ComponentStory<typeof ArticleListItemRedesigned> = (args) => (
    <ArticleListItemRedesigned {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned';

export default {
    title: '/ArticleViewSelectorRedesigned',
    component: ArticleViewSelectorRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelectorRedesigned>;

const Template: ComponentStory<typeof ArticleViewSelectorRedesigned> = (
    args,
) => <ArticleViewSelectorRedesigned {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

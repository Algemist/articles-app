import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemSkeletonRedesigned';

export default {
    title: '/ArticleListItemSkeletonRedesigned',
    component: ArticleListItemSkeletonRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItemSkeletonRedesigned>;

const Template: ComponentStory<typeof ArticleListItemSkeletonRedesigned> = (
    args,
) => <ArticleListItemSkeletonRedesigned {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

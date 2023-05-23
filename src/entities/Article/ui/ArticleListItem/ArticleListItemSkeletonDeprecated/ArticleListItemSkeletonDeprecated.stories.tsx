import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleListItemSkeletonDeprecated } from './ArticleListItemSkeletonDeprecated';

export default {
    title: '/ArticleListItemSkeletonDeprecated',
    component: ArticleListItemSkeletonDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItemSkeletonDeprecated>;

const Template: ComponentStory<typeof ArticleListItemSkeletonDeprecated> = (
    args,
) => <ArticleListItemSkeletonDeprecated {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

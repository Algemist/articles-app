import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

export default {
    title: '/ArticleListItemDeprecated',
    component: ArticleListItemDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItemDeprecated>;

const Template: ComponentStory<typeof ArticleListItemDeprecated> = (args) => (
    <ArticleListItemDeprecated {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

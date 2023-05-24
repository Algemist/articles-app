import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated';

export default {
    title: '/ArticleDetailsDeprecated',
    component: ArticleDetailsDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsDeprecated>;

const Template: ComponentStory<typeof ArticleDetailsDeprecated> = (args) => (
    <ArticleDetailsDeprecated {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

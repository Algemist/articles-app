import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated';

export default {
    title: '/ArticleViewSelectorDeprecated',
    component: ArticleViewSelectorDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelectorDeprecated>;

const Template: ComponentStory<typeof ArticleViewSelectorDeprecated> = (
    args,
) => <ArticleViewSelectorDeprecated {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

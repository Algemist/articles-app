import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned';

export default {
    title: '/ArticleDetailsRedesigned',
    component: ArticleDetailsRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsRedesigned>;

const Template: ComponentStory<typeof ArticleDetailsRedesigned> = (args) => (
    <ArticleDetailsRedesigned {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

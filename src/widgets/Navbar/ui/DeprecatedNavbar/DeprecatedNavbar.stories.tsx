import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { DeprecatedNavbar } from './DeprecatedNavbar';

export default {
    title: '/DeprecatedNavbar',
    component: DeprecatedNavbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DeprecatedNavbar>;

const Template: ComponentStory<typeof DeprecatedNavbar> = (args) => (
    <DeprecatedNavbar {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

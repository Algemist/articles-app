import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { SidebarDeprecated } from './SidebarDeprecated';

export default {
    title: '/SidebarDeprecated',
    component: SidebarDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarDeprecated>;

const Template: ComponentStory<typeof SidebarDeprecated> = (args) => (
    <SidebarDeprecated {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

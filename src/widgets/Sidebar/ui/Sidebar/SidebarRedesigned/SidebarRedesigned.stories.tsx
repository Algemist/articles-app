import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { SidebarRedesigned } from './SidebarRedesigned';

export default {
    title: '/SidebarRedesigned',
    component: SidebarRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarRedesigned>;

const Template: ComponentStory<typeof SidebarRedesigned> = (args) => (
    <SidebarRedesigned {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

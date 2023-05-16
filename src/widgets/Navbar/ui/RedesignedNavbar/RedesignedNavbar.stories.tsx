import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { RedesignedNavbar } from './RedesignedNavbar';

export default {
    title: '/RedesignedNavbar',
    component: RedesignedNavbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RedesignedNavbar>;

const Template: ComponentStory<typeof RedesignedNavbar> = (args) => (
    <RedesignedNavbar {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

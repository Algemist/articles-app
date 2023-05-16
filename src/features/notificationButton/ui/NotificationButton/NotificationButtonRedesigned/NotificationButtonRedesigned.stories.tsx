import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationButtonRedesigned } from './NotificationButtonRedesigned';

export default {
    title: '/NotificationButtonRedesigned',
    component: NotificationButtonRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationButtonRedesigned>;

const Template: ComponentStory<typeof NotificationButtonRedesigned> = (
    args,
) => <NotificationButtonRedesigned {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

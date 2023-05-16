import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationButtonDeprecated } from './NotificationButtonDeprecated';

export default {
    title: '/NotificationButtonDeprecated',
    component: NotificationButtonDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationButtonDeprecated>;

const Template: ComponentStory<typeof NotificationButtonDeprecated> = (
    args,
) => <NotificationButtonDeprecated {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

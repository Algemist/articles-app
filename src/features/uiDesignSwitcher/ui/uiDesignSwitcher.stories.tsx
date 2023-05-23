import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { uiDesignSwitcher } from './uiDesignSwitcher';

export default {
    title: '/uiDesignSwitcher',
    component: uiDesignSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof uiDesignSwitcher>;

const Template: ComponentStory<typeof uiDesignSwitcher> = (args) => (
    <uiDesignSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

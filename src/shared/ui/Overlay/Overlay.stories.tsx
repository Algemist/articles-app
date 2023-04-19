import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Overlay } from './Overlay';

export default {
    title: 'shared/Overlay',
    component: Overlay,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

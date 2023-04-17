import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi atque, dolores explicabo id nam officia omnis quaerat quia quibusdam quisquam quo ratione, reiciendis saepe vel veritatis, voluptates voluptatum?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi atque, dolores explicabo id nam officia omnis quaerat quia quibusdam quisquam quo ratione, reiciendis saepe vel veritatis, voluptates voluptatum?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

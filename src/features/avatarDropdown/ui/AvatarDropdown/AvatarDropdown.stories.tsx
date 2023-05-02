import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const WithAdminRights = Template.bind({});
WithAdminRights.args = {
    authData: {
        id: '1',
        username: 'admin',
        roles: [UserRole.ADMIN],
    },
};
WithAdminRights.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
                roles: [UserRole.ADMIN],
            },
        },
    }),
];

export const WithoutAdminRights = Template.bind({});
WithoutAdminRights.args = {
    authData: {
        id: '2',
        username: 'user',
        roles: [UserRole.USER],
    },
};
WithoutAdminRights.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {
                id: '2',
                username: 'user',
                roles: [UserRole.USER],
            },
            _inited: true,
        },
    }),
];

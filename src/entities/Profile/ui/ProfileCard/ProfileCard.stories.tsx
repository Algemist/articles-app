import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from 'shared/const/common';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;
const data = {
    first: 'Denis',
    age: '22',
    city: 'Moscow',
    avatar: 'http://avatar.png',
    country: Country.Russia,
    username: 'Algemist',
    currency: Currency.RUB,
    lastname: 'Davidov',
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    profile: {
        data,
    },
})];
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [StoreDecorator({
    profile: {
        data,
    },
}), ThemeDecorator(Theme.DARK)];

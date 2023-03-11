import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import AvatarImage from 'shared/assets/test/michael_scott.jpg';
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
    age: 22,
    city: 'Moscow',
    avatar: AvatarImage,
    country: Country.Russia,
    username: 'Algemist',
    currency: Currency.RUB,
    lastname: 'Davidov',
};

export const Primary = Template.bind({});
Primary.args = {
    data,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    data,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const WithError = Template.bind({});
WithError.args = {
    error: 'ERROR',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
    isLoading: true,
};

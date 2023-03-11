import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from '../../assets/test/michael_scott.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
};

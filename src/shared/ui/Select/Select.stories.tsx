import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значние',
    options: [
        { value: '123', content: 'Пункт 1' },
        { value: '321', content: 'Пункт 2' },
        { value: '3211', content: 'Пункт 3' },
    ],
};

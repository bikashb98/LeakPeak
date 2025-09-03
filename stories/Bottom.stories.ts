import type {Meta, StoryObj} from '@storybook/react';
import {Bottom} from "@/components/Bottom";



const meta = {
    title: 'components/Bottom',
    component: Bottom,
}satisfies Meta<typeof Bottom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        breach: [],
        hasSearched: false
    }
};
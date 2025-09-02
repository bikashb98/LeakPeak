import type { Meta, StoryObj } from '@storybook/react';
import { MidContent } from '@/components/MidContent';

const meta = {
    title: 'Components/MidContent',
    component: MidContent,
}satisfies Meta<typeof MidContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
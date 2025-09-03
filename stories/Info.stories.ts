import type {Meta, StoryObj} from '@storybook/react';
import { Info } from '@/components/Info';



const meta = {
    title: 'components/Info',
    component: Info,
}satisfies Meta<typeof Info>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { }
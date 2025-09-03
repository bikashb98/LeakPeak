import type {Meta, StoryObj} from '@storybook/react';
import { Info } from '@/components/Info';



const meta = {
    title: 'components/Info',
    component: Info,
}satisfies Meta<typeof Info>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        breach: {
            breach: "Example Company",
            logo: "/placeholder-logo.png",
            details: "In January 2020, Example Company suffered a data breach that exposed sensitive user information. The breach was discovered when unauthorized access to their database was detected.",
            xposed_data: "Email addresses; Passwords; User names; Phone numbers; Personal information",
            xposed_date: "2020-01-15"
        }
    }
}
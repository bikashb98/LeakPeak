import type { Meta, StoryObj } from "@storybook/react"
import { DateLine } from "@/components/DateLine";

const meta = {
    title: "Components/DateLine",
    component: DateLine,
    tags: ["autodocs"],
} satisfies Meta<typeof DateLine>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        date: '2025'
    }
}
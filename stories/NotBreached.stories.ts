import type { Meta, StoryObj } from "@storybook/react"
import { NotBreached } from "@/components/NotBreached";

const meta = {
    title: "Components/NotBreached",
    component: NotBreached,
    tags: ["autodocs"],
} satisfies Meta<typeof NotBreached>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
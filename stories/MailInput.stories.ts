import type { Meta, StoryObj } from "@storybook/react"
import { MailInput } from "@/components/MailInput";

const meta = {
    title: "Components/MailInput",
    component: MailInput,
    tags: ["autodocs"],
} satisfies Meta<typeof MailInput>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
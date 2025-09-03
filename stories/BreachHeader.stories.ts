import type { Meta, StoryObj } from "@storybook/react"
import {BreachHeader} from "@/components/BreachHeader";

const meta = {
    title: "Components/BreachHeader",
    component: BreachHeader,
    tags: ["autodocs"],
} satisfies Meta<typeof BreachHeader>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        total:9
    }
};
import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
    // Location
    title: 'Components/Text',
    // Component
    component: Text,
    // Properties
    args: {
        children: 'Lorem ipsum.',
        size: 'md'
    }
} as Meta<TextProps>; // Get types

// Variations
export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
    args: {
        size: "sm"
    }
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: "lg"
    }
};
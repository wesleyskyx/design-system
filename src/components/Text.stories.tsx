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
    },
    // Properties controls
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
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

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testing</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};
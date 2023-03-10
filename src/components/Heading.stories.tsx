import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
    // Location
    title: 'Components/Heading',
    // Component
    component: Heading,
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
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<HeadingProps>; // Get types

// Variations
export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: "sm"
    }
};

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: "lg"
    }
};

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
};
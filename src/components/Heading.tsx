import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

// Types
export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg'; // ? is optional
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    // clsx = if size is 'sm', apply classname 'text-xs' and so on. Default classes on beginning
    return (
        <Comp
            className={clsx(
                'text-gray-100 font-bold',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                },
                className
            )}
        >
            { children }
        </Comp>
    )
}
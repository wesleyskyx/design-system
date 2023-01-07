import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

// Types
export interface TextProps {
    size?: 'sm' | 'md' | 'lg'; // ? is optional
    children: ReactNode;
    asChild?: boolean;
}

export function Text({ size = 'md', children, asChild }: TextProps) {
    const Comp = asChild ? Slot : 'span';

    // clsx = if size is 'sm', apply classname 'text-xs' and so on. Default classes on beginning
    return (
        <Comp
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}>
            { children }
        </Comp>
    )
}
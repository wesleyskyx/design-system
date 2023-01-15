import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

// Types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            // Tailwind is in rem py-4 = 16px
            className={clsx(
                'py-4 px-3 bg-cyan-500 text-black rounded font-semibold text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
                className
            )}
            {...props}
        >
            { children }
        </Comp>
    )
}
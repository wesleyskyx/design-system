import { clsx } from 'clsx';

// Types
export interface TextProps {
    size?: 'sm' | 'md' | 'lg'; // ? is optional
    children: string;
}

export function Text({ size = 'md', children }: TextProps) {
    // clsx = if size is 'sm', apply classname 'text-xs' and so on. Default classes on beginning
    return (
        <span
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}>
            { children }
        </span>
    )
}
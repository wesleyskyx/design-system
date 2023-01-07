import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
            {props.children}
        </div>
    )
}

//function TextInputIcon {}

// extends Input html allows this component to receive all the properties an input has
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}

export function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
            {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    
}
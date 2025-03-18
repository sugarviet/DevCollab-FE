import React, { InputHTMLAttributes, FC } from 'react'
import clsx from 'clsx';

type InputProps = {
    variant: 'default' | 'error' | 'success'
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = (props) => {
    const { variant = 'default', className, ...rest } = props;
    const baseStyles = 'rounded-xl px-4 py-2 border transition-all outline-none';
    const variantStyles = {
        default: 'border-gray-300 focus:border-black',
        error: 'border-red-500 focus:border-red-600',
        success: 'border-green-500 focus:border-green-600',
    };
    return (
        <input className={clsx(baseStyles, variantStyles[variant], className)} {...rest} />
    )
}

export default Input
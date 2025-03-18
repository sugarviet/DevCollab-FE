import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, variant = 'primary', className, ...rest }) => {
    const baseStyles = 'rounded-xl px-4 py-2 font-medium transition-all';
    const variantStyles = {
        primary: 'bg-black text-white hover:bg-gray-800',
        secondary: 'bg-gray-200 text-black hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return (
        <button className={clsx(baseStyles, variantStyles[variant], className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;

'use client'

import React, { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type InputProps = {
  variant?: "default" | "error" | "success";
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "default", className, ...rest }, ref) => {
    const baseStyles =
      "rounded-xl px-4 py-2 border transition-all outline-none text-gray-600 w-full";
    const variantStyles = {
      default: "border-gray-300 focus:border-black",
      error: "border-red-500 focus:border-red-600",
      success: "border-green-500 focus:border-green-600",
    };

    return (
      <input
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], className)}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;

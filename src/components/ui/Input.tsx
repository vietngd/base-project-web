"use client";

import React from "react";
import { InputProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      error = false,
      leftIcon,
      rightIcon,
      label,
      helperText,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = {
      outline:
        "border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500",
      filled:
        "border-transparent bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:ring-blue-500",
      unstyled:
        "border-transparent bg-transparent text-gray-900 placeholder-gray-500 focus:ring-blue-500",
    };

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-4 py-2 text-sm rounded-md",
      lg: "px-4 py-3 text-base rounded-lg",
      xl: "px-6 py-4 text-lg rounded-lg",
    };

    const errorClasses = error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "";
    const widthClasses = fullWidth ? "w-full" : "";
    const iconClasses = leftIcon ? "pl-10" : rightIcon ? "pr-10" : "";

    const inputClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      errorClasses,
      widthClasses,
      iconClasses,
      className
    );

    const wrapperClasses = cn("relative", fullWidth ? "w-full" : "");

    return (
      <div className={wrapperClasses}>
        {label && <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>}
        <div className='relative'>
          {leftIcon && (
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className='text-gray-400'>{leftIcon}</span>
            </div>
          )}
          <input ref={ref} className={inputClasses} {...props} />
          {rightIcon && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <span className='text-gray-400'>{rightIcon}</span>
            </div>
          )}
        </div>
        {helperText && (
          <p className={cn("mt-1 text-sm", error ? "text-red-600" : "text-gray-500")}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

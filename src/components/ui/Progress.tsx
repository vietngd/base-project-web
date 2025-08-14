"use client";

import React from "react";
import { ProgressProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value,
      max = 100,
      size = "md",
      variant = "line",
      color = "primary",
      showValue = false,
      children,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const baseClasses = "bg-gray-200 rounded-full overflow-hidden";

    const sizeClasses = {
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
    };

    const colorClasses = {
      primary: "bg-blue-600",
      success: "bg-green-600",
      warning: "bg-yellow-600",
      error: "bg-red-600",
    };

    const classes = cn(baseClasses, sizeClasses[size], className);

    if (variant === "circle") {
      const radius = 50;
      const circumference = 2 * Math.PI * radius;
      const strokeDasharray = circumference;
      const strokeDashoffset = circumference - (percentage / 100) * circumference;

      return (
        <div ref={ref} className='relative inline-flex items-center justify-center' {...props}>
          <svg className='w-16 h-16 transform -rotate-90'>
            <circle
              cx='32'
              cy='32'
              r={radius}
              stroke='currentColor'
              strokeWidth='8'
              fill='transparent'
              className='text-gray-200'
            />
            <circle
              cx='32'
              cy='32'
              r={radius}
              stroke='currentColor'
              strokeWidth='8'
              fill='transparent'
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className={cn("transition-all duration-300", colorClasses[color])}
            />
          </svg>
          {showValue && (
            <div className='absolute text-sm font-medium text-gray-700'>
              {Math.round(percentage)}%
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={classes}
        role='progressbar'
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...props}
      >
        <div
          className={cn("h-full transition-all duration-300 ease-out", colorClasses[color])}
          style={{ width: `${percentage}%` }}
        />
        {showValue && (
          <div className='absolute inset-0 flex items-center justify-center text-xs font-medium text-white'>
            {Math.round(percentage)}%
          </div>
        )}
        {children}
      </div>
    );
  }
);

Progress.displayName = "Progress";

export default Progress;

"use client";

import React from "react";
import { SpinnerProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    { className, size = "md", color = "primary", thickness = 2, speed = 1, children, ...props },
    ref
  ) => {
    const baseClasses = "animate-spin rounded-full border-solid";

    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12",
    };

    const colorClasses = {
      primary: "border-blue-600",
      secondary: "border-gray-600",
      white: "border-white",
    };

    const classes = cn(baseClasses, sizeClasses[size], colorClasses[color], className);

    const style = {
      borderWidth: `${thickness}px`,
      borderTopColor: "transparent",
      animationDuration: `${1 / speed}s`,
    };

    return (
      <div
        ref={ref}
        className={classes}
        style={style}
        role='status'
        aria-label='Loading'
        {...props}
      >
        {children}
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

export default Spinner;

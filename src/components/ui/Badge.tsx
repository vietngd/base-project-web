"use client";

import React from "react";
import { BadgeProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "primary", size = "md", rounded = false, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center font-medium";

    const variantClasses = {
      primary: "bg-blue-100 text-blue-800",
      secondary: "bg-gray-100 text-gray-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
      outline: "border border-gray-300 bg-transparent text-gray-700",
    };

    const sizeClasses = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-0.5 text-sm",
      lg: "px-3 py-1 text-sm",
    };

    const roundedClasses = rounded ? "rounded-full" : "rounded-md";

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      roundedClasses,
      className
    );

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

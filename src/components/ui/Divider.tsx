"use client";

import React from "react";
import { DividerProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    { className, orientation = "horizontal", variant = "solid", size = "md", children, ...props },
    ref
  ) => {
    const baseClasses = "border-gray-200";

    const orientationClasses = {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    };

    const variantClasses = {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    };

    const sizeClasses = {
      sm: "border-1",
      md: "border-2",
      lg: "border-4",
    };

    const classes = cn(
      baseClasses,
      orientationClasses[orientation],
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (children && orientation === "horizontal") {
      return (
        <div ref={ref} className='flex items-center w-full' {...props}>
          <div className={cn(classes, "flex-1")} />
          <span className='px-4 text-sm text-gray-500'>{children}</span>
          <div className={cn(classes, "flex-1")} />
        </div>
      );
    }

    return <div ref={ref} className={classes} {...props} />;
  }
);

Divider.displayName = "Divider";

export default Divider;

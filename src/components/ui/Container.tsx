"use client";

import React from "react";
import { ContainerProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = "lg", padding = "md", center = true, children, ...props }, ref) => {
    const maxWidthClasses = {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    };

    const paddingClasses = {
      none: "",
      sm: "px-4",
      md: "px-6",
      lg: "px-8",
      xl: "px-12",
    };

    const centerClasses = center ? "mx-auto" : "";

    const classes = cn(
      "w-full",
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      centerClasses,
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;

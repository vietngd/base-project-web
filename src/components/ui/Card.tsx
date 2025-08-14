"use client";

import React from "react";
import { CardProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, padding = "md", shadow = "md", border = false, hover = false, children, ...props },
    ref
  ) => {
    const baseClasses = "bg-white rounded-lg transition-all duration-200";

    const paddingClasses = {
      none: "",
      sm: "p-3",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    };

    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
    };

    const borderClasses = border ? "border border-gray-200" : "";
    const hoverClasses = hover ? "hover:shadow-lg hover:-translate-y-1" : "";

    const classes = cn(
      baseClasses,
      paddingClasses[padding],
      shadowClasses[shadow],
      borderClasses,
      hoverClasses,
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;

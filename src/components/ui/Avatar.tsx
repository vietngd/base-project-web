"use client";

import React from "react";
import { AvatarProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = "md", fallback, rounded = true, children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center bg-gray-300 text-gray-700 font-medium overflow-hidden";

    const sizeClasses = {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
      xl: "w-16 h-16 text-lg",
      "2xl": "w-20 h-20 text-xl",
    };

    const roundedClasses = rounded ? "rounded-full" : "rounded-lg";

    const classes = cn(baseClasses, sizeClasses[size], roundedClasses, className);

    const getInitials = (name: string) => {
      return name
        .split(" ")
        .map(word => word.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);
    };

    const renderContent = () => {
      if (src) {
        return <img src={src} alt={alt || "Avatar"} className='w-full h-full object-cover' />;
      }

      if (fallback) {
        return fallback;
      }

      if (alt) {
        return getInitials(alt);
      }

      return children || "?";
    };

    return (
      <div ref={ref} className={classes} {...props}>
        {renderContent()}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;

"use client";

import React from 'react';
import { FlexProps } from '@/interfaces/components';
import { cn } from '@/helpers/utils/cn';

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = 'row',
      justify = 'start',
      align = 'start',
      wrap = 'nowrap',
      gap = 'none',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'flex';
    
    const directionClasses = {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    };
    
    const justifyClasses = {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    };
    
    const alignClasses = {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    };
    
    const wrapClasses = {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    };
    
    const gapClasses = {
      none: '',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };
    
    const classes = cn(
      baseClasses,
      directionClasses[direction],
      justifyClasses[justify],
      alignClasses[align],
      wrapClasses[wrap],
      gapClasses[gap],
      className
    );

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

export default Flex;

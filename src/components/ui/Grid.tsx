"use client";

import React from 'react';
import { GridProps } from '@/interfaces/components';
import { cn } from '@/helpers/utils/cn';

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      cols = 1,
      gap = 'md',
      responsive = true,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'grid';
    
    const colsClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    };
    
    const responsiveClasses = responsive ? {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
      6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-6',
      7: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-7',
      8: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-8',
      9: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-9',
      10: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-10',
      11: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-11',
      12: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-12',
    } : colsClasses;
    
    const gapClasses = {
      none: '',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };
    
    const classes = cn(
      baseClasses,
      responsiveClasses[cols],
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

Grid.displayName = 'Grid';

export default Grid;

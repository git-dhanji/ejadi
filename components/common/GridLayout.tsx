import React from 'react';
import { cn } from '@/lib/utils';

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  variant?: 'grid' | 'masonry';
}

/**
 * GridLayout provides a flexible layout system.
 * Variant 'masonry' uses CSS columns for a Pinterest-style layout.
 * Variant 'grid' uses standard CSS grid.
 */
export const GridLayout = ({
  children,
  className,
  columns = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'gap-6',
  variant = 'masonry',
}: GridLayoutProps) => {
  if (variant === 'masonry') {
    return (
      <div
        className={cn(
          'w-full',
          // Column counts
          'columns-1',
          columns.sm && `sm:columns-${columns.sm}`,
          columns.md && `md:columns-${columns.md}`,
          columns.lg && `lg:columns-${columns.lg}`,
          columns.xl && `xl:columns-${columns.xl}`,
          gap,
          '[&>*]:break-inside-avoid [&>*]:mb-6', // Essential for masonry items
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid w-full',
        'grid-cols-1',
        columns.sm && `sm:grid-cols-${columns.sm}`,
        columns.md && `md:grid-cols-${columns.md}`,
        columns.lg && `lg:grid-cols-${columns.lg}`,
        columns.xl && `xl:grid-cols-${columns.xl}`,
        gap,
        className
      )}
    >
      {children}
    </div>
  );
};

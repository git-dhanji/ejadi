import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  variant?: 'serif' | 'sans';
}

const sizeMap = {
  xs: 'text-lg md:text-xl',
  sm: 'text-xl md:text-2xl',
  base: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-4xl lg:text-5xl',
  xl: 'text-4xl md:text-5xl lg:text-6xl',
  '2xl': 'text-5xl md:text-6xl lg:text-7xl',
  '3xl': 'text-6xl md:text-7xl lg:text-8xl',
};

/**
 * Reusable Heading component with support for both luxury Serif 
 * and modern Sans-Serif typography.
 */
export const Heading = ({
  children,
  as: Component = 'h2',
  size = 'base',
  variant = 'serif',
  className,
}: HeadingProps) => {
  return (
    <Component
      className={cn(
        'font-medium tracking-tight',
        variant === 'serif' ? 'font-serif' : 'font-sans uppercase tracking-widest',
        sizeMap[size],
        className
      )}
    >
      {children}
    </Component>
  );
};

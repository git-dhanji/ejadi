import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Container component to provide consistent max-width and horizontal alignment.
 * Luxury layouts often benefit from generous horizontal padding.
 */
export const Container = ({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
};

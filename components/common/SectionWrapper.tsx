import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  withContainer?: boolean;
}

/**
 * SectionWrapper provides consistent vertical spacing (margin/padding) 
 * for sections across the entire portfolio.
 */
export const SectionWrapper = ({
  children,
  className,
  id,
  withContainer = true,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32', // Generous whitespace for premium feel
        className
      )}
    >
      {withContainer ? (
        <Container>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
};

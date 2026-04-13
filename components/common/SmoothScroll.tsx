'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

/**
 * SmoothScroll provider using Lenis for high-performance momentum scrolling.
 * Essential for the "Luxury/Awwwards" feel.
 */
export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Smoothness level (0-1)
        duration: 1.5, // Scroll duration
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
};

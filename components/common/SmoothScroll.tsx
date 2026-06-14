'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTopOnRouteChange Component
 * Handles scroll-to-top when route changes, working with Lenis
 */
function ScrollToTopOnRouteChange() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Scroll to top using Lenis if available, otherwise fallback to window
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    // Also ensure document.documentElement is at top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, lenis]);

  return null;
}

/**
 * SmoothScroll provider using Lenis for high-performance momentum scrolling.
 * Essential for the "Luxury/Awwwards" feel.
 * Now with automatic scroll-to-top on route changes.
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
      <ScrollToTopOnRouteChange />
      {children}
    </ReactLenis>
  );
};

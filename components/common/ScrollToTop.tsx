'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTop Component
 * Automatically scrolls to the top of the page when the route changes.
 * This ensures all page navigations start from the top, not from the previous scroll position.
 */
export const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top immediately when route changes
        window.scrollTo(0, 0);

        // Also try to scroll the Lenis instance if it exists
        const lenisInstance = (window as any).lenisInstance;
        if (lenisInstance && typeof lenisInstance.scrollTo === 'function') {
            lenisInstance.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return null;
};

'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * CustomCursor for premium interaction feel.
 * Follows the mouse with spring physics and changes state on hover.
 */
export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check for touch device
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(touchDevice);
    if (touchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check for project card/interactive hover
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('[data-cursor="view"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isVisible, isTouch]);

  if (isTouch) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            'pointer-events-none fixed left-0 top-0 z-100 flex items-center justify-center rounded-full mix-blend-difference',
            isHovering ? 'h-24 w-24 bg-white text-black' : 'h-4 w-4 bg-white'
          )}
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {isHovering && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold uppercase tracking-widest"
            >
              View
            </motion.span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

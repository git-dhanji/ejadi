'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Logo } from './Logo';

import { SITE, NAV_LINKS } from '@/constants/site';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Certain pages have dark hero sections at the top where we need white text.
  const isDarkHeroPage = ['/', '/about'].includes(pathname) || (pathname.startsWith('/projects/') && pathname !== '/projects');
  const isDarkTheme = isDarkHeroPage && !isScrolled;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Scrolled state
    setIsScrolled(latest > 50);

    // Visibility state (Hide on scroll down, show on scroll up)
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        isScrolled 
          ? 'glass-premium py-4' // Glass Premium effect on scroll
          : 'bg-transparent py-8'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Branding (Left) */}
        <Logo isDarkTheme={isDarkTheme} />
        
        {/* Navigation Group (Right / Centered) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Grouped Link Box */}
          <div className="flex items-center bg-background/90 backdrop-blur-lg border border-border px-2 py-2 rounded-full shadow-sm">
            {NAV_LINKS.filter(link => link.href !== '/contact').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-serif font-semibold px-6 py-2 rounded-full transition-all',
                  pathname === link.href 
                    ? 'bg-primary text-primary-foreground shadow-md' // Active state in a pill
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Contact Highlight (Separate) */}
          <Link
            href="/contact"
            className={cn(
              'relative text-sm font-serif font-semibold px-8 py-4 rounded-full transition-all bg-primary text-primary-foreground hover:scale-105 active:scale-95 shadow-xl'
            )}
          >
            CONTACT
          </Link>
        </div>





        {/* Mobile Toggle */}
        <button className={cn(
          'md:hidden p-2 transition-colors',
          isDarkTheme ? 'text-white' : 'text-foreground'
        )} aria-label="Toggle Menu">
          <div className="w-6 h-[2px] bg-current mb-1.5" />
          <div className="w-4 h-[2px] bg-current ml-auto" />
        </button>
      </Container>
    </motion.nav>
  );
};


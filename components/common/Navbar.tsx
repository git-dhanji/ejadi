'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

import { NAV_LINKS } from '@/constants/site';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const isDarkHeroPage = ['/', '/about'].includes(pathname) || (pathname.startsWith('/projects/') && pathname !== '/projects');
  const isDarkTheme = isDarkHeroPage && !isScrolled;

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 50);
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-500',
          isScrolled ? 'glass-premium py-4' : 'bg-transparent py-8'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Branding */}
          <Logo isDarkTheme={isDarkTheme} />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center bg-background/90 backdrop-blur-lg border border-border px-2 py-2 rounded-full shadow-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-sm font-serif font-semibold px-6 py-2 rounded-full transition-all',
                    pathname === link.href
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-[6px] rounded-full border-2 border-foreground/20 hover:border-foreground/50 hover:bg-muted transition-all"
              aria-label="Open menu"
            >
              <span className="block w-5 h-[2px] bg-foreground rounded-full" />
              <span className="block w-3 h-[2px] bg-foreground rounded-full" />
            </button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-70 h-full w-[80vw] max-w-sm bg-background flex flex-col shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex items-center justify-between px-8 py-8 border-b border-border">
                <Logo />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-foreground/20 hover:border-foreground/50 hover:bg-muted transition-all"
                  aria-label="Close menu"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-8 py-10 gap-1 flex-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'flex items-center justify-between py-5 border-b border-border group',
                        pathname === link.href ? 'text-accent' : 'text-foreground hover:text-accent'
                      )}
                    >
                      <span className="text-3xl font-serif tracking-tighter transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer of panel */}
              <div className="px-8 py-8 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Ezadi Interior Studio</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

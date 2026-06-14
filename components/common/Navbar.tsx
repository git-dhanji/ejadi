'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Logo } from './Logo';

import { NAV_LINKS, CONTACT } from '@/constants/site';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

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
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex items-center bg-background/90 backdrop-blur-lg border border-border py-2 px-2 rounded-full shadow-sm">
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
              <div className="w-px h-6 bg-border mx-2" />
              <div className="flex items-center gap-1">
                {/* <ThemeToggle /> */}
                <a
                  href={`https://wa.me/${CONTACT.phone.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-foreground group"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            {/* <ThemeToggle /> */}
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
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Ejadi Interior Designer</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

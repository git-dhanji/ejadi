'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Container } from './Container';
import { Heading } from './Heading';
import { Logo } from './Logo';

import { SITE, CONTACT, SOCIALS } from '@/constants/site';

// Map social names to pro minimal SVGs (Lucide removed brand tags)
const getSocialIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'instagram': return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    );
    case 'linkedin': return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    );
    case 'pinterest': return <span className="font-serif italic text-sm">Pi</span>;
    case 'behance': return <span className="font-serif italic tracking-tighter font-bold text-sm">Bē</span>;
    default: return <span className="text-xs uppercase">{name.slice(0, 2)}</span>;
  }
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background text-foreground pt-24 md:pt-40 pb-12 overflow-hidden selection:bg-accent selection:text-white border-t border-border">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-10 border-b border-border pb-20">
          
          {/* Brand & Narrative */}
          <div className="lg:w-1/3 space-y-10">
            <Logo />
            <p className="max-w-xs text-lg font-light text-muted-foreground leading-relaxed">
               {SITE.description}
            </p>
            <div className="space-y-2 pt-4">
               <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-4">Direct Inquiry</p>
               <a href={`mailto:${CONTACT.email}`} className="block text-xl font-serif hover:text-accent transition-colors duration-300">
                  {CONTACT.email}
               </a>
               <p className="text-muted-foreground font-light">{CONTACT.phone}</p>
            </div>
          </div>

          {/* Massive Navigational Links (Using Font-Serif as requested) */}
          <div className="lg:w-2/3 flex flex-col items-start lg:items-end space-y-4">
             {['Projects', 'About', 'Services', 'Contact'].map((link) => (
                <Link 
                  key={link} 
                  href={`/${link.toLowerCase()}`}
                  className="group relative"
                >
                  <span className="text-[12vw] lg:text-[6rem] leading-[0.9] font-serif tracking-tighter text-muted-foreground/50 hover:text-foreground transition-all duration-500">
                    {link}
                  </span>
                  <span className="absolute left-0 bottom-2 w-0 h-1 bg-accent transition-all duration-500 group-hover:w-full" />
                </Link>
             ))}
          </div>

        </div>

        {/* Bottom Socials & Copyright */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Icons */}
          <ul className="flex items-center gap-4">
            {Object.entries(SOCIALS).map(([name, url]) => (
              <li key={name}>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={name}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500"
                >
                  {getSocialIcon(name)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
              &copy; {currentYear} {SITE.name}
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
          
        </div>
      </Container>
    </footer>
  );
};

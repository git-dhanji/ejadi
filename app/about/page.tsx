'use client';

import React, { useEffect } from 'react';
import { AboutHero } from '@/features/about/components/AboutHero';
import { Narrative } from '@/features/about/components/Narrative';
import { Philosophy } from '@/features/about/components/Philosophy';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ABOUT_DATA } from '@/constants/about';
import Link from 'next/link';

export default function AboutPage() {
  // Force scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* 
        Hero: Clear intro with portrait 
      */}
      <AboutHero />

      {/* 
        Narrative: Long-form storytelling section 
      */}
      <Narrative />

      {/* 
        Philosophy: Our values and impact stats 
      */}
      <Philosophy />

      {/* 
        Bottom CTA (Final push)
      */}
      <SectionWrapper className="bg-background border-t border-border">
        <div className="max-w-2xl mx-auto py-24 md:py-32 text-center space-y-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent/60">{ABOUT_DATA.cta.label}</p>
          <p className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight">
            {ABOUT_DATA.cta.heading}
          </p>
          <div className="pt-2">
            <Link
              href={ABOUT_DATA.cta.buttonLink}
              className="inline-block px-10 py-4 border border-foreground text-xs uppercase tracking-[0.25em] text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              {ABOUT_DATA.cta.buttonText}
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

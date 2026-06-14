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
      <SectionWrapper className="bg-muted text-center">
        <div className="space-y-8 max-w-2xl mx-auto py-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent/60">{ABOUT_DATA.cta.label}</h2>
          <p className="text-3xl md:text-5xl font-light font-serif leading-tight whitespace-pre-wrap">
            {ABOUT_DATA.cta.heading}
          </p>
          <div className="pt-8">
            <Link href={ABOUT_DATA.cta.buttonLink} className="inline-block px-12 py-5 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-primary-foreground transition-colors shadow-lg hover:shadow-xl">
              {ABOUT_DATA.cta.buttonText}
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

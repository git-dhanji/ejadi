'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { HOME_CONTENT } from '@/constants/site';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';

export const HomeHero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax movements for different layers
  const textX = useTransform(springX, [0, 800], [0, 20]);
  const textY = useTransform(springY, [0, 800], [0, 20]);
  const imgX = useTransform(springX, [0, 800], [0, -20]);
  const imgY = useTransform(springY, [0, 800], [0, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-background pt-64 pb-32 flex items-start lg:items-center">
      {/* 1. Large Background Typography (Watermark) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden text-center">
        <motion.h1 
          style={{ x: textX, y: textY }}
          className="text-[40vw] font-serif italic whitespace-nowrap leading-none"
        >
          EJADI
        </motion.h1>
      </div>

      <SectionWrapper withContainer className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* 2. Text Content (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-accent" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-accent font-bold">
                  {HOME_CONTENT.hero.subtitle}
                </p>
              </div>

              <Heading as="h1" size="2xl" className="leading-[0.85] tracking-tighter! font-light! text-foreground lg:text-7xl">
                Sculpting <br />
                <span className="italic font-serif opacity-90 text-transparent" style={{ WebkitTextStroke: '1px var(--foreground)' }}>Emotional</span> <br />
                Architecture
              </Heading>

              <p className="max-w-md text-foreground/70 font-light text-lg leading-relaxed">
                We design spaces that don't just look beautiful, but feel deeply resonant with the human experience.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Link 
                  href="/projects" 
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    "group relative h-16 px-10 rounded-none bg-foreground text-background overflow-hidden border-none"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-widest font-bold">
                    {HOME_CONTENT.hero.exploreBtn} 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                
                <Link 
                  href="/contact" 
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    "group h-16 px-10 rounded-none border-border hover:bg-transparent hover:border-accent transition-colors"
                  )}
                >
                  <span className="text-xs uppercase tracking-widest font-bold group-hover:text-accent transition-colors">
                    {HOME_CONTENT.hero.contactBtn}
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* 3. Hero Visual (Right) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ x: imgX, y: imgY }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-4/5 lg:aspect-3.5/5 w-full max-w-[340px] ml-auto"
            >
              {/* Architectural Frame Decoration */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-accent opacity-20 hidden lg:block" />
              
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
                  alt="Ezadi Interior Design" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
                  className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                  priority
                />
              </div>

              {/* Floating Metadata Badge */}
              <div className="absolute -bottom-10 -left-10 bg-background border border-border p-6 shadow-xl hidden lg:flex flex-col gap-2 min-w-[180px]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Indore, India</span>
                </div>
                <div className="h-px w-full bg-border" />
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest">Est. 2014</span>
                  <span className="text-[9px] text-accent font-bold uppercase tracking-widest">Arch Studio</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </SectionWrapper>

      {/* 4. Side Indicators */}
      <div className="absolute left-10 bottom-20 hidden lg:flex flex-col gap-10 items-center opacity-30 h-32">
         <span className="rotate-90 text-[10px] uppercase tracking-[0.5em] origin-left">Discovery</span>
         <div className="w-px flex-1 bg-linear-to-b from-foreground to-transparent" />
      </div>

    </section>
  );
};


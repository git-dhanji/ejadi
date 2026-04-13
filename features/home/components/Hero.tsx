'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { HOME_CONTENT } from '@/constants/site';
import { ArrowRight } from 'lucide-react';

export const HomeHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' as any },
    },
  };

  const slowZoom = {
    scale: [1, 1.05],
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as any,
    },
  };

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-primary">
      {/* Cinematic Background */}
      <motion.div 
        animate={slowZoom}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center bg-no-wrap opacity-80" 
      />
      
      <div className="absolute inset-0 opacity-20">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Dramatic Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />
      
      <div className="relative z-20 flex h-full items-center justify-center text-center text-white">
        <SectionWrapper withContainer className="py-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.p 
              variants={itemVariants}
              className="text-[10px] md:text-sm font-light uppercase tracking-[0.5em] opacity-80"
            >
              {HOME_CONTENT.hero.subtitle}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Heading as="h1" size="3xl" className="max-w-5xl mx-auto leading-[0.9] font-light!">
                Creating Timeless <br /> 
                <span className="italic font-serif opacity-90">Narratives</span> of Space
              </Heading>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                href="/projects" 
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  "w-full sm:w-auto group relative rounded-full bg-primary-foreground px-8 py-8 text-sm font-serif font-bold tracking-widest text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-primary-foreground overflow-hidden"
                )}
              >
                <span className="relative z-10 font-serif overflow-hidden h-6 inline-flex flex-col pointer-events-none">
                  <span className="inline-flex items-center gap-2 transition-transform duration-500 ease-out group-hover:-translate-y-full">{HOME_CONTENT.hero.exploreBtn} <ArrowRight className="w-3 h-3" /></span>
                  <span className="inline-flex items-center gap-2 transition-transform duration-500 ease-out group-hover:-translate-y-full">{HOME_CONTENT.hero.exploreBtn} <ArrowRight className="w-3 h-3" /></span>
                </span>
              </Link>
              
              <Link 
                href="/contact" 
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  "w-full sm:w-auto group relative rounded-full border border-primary-foreground/20 bg-transparent px-12 py-8 text-sm font-serif font-bold tracking-widest text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary-foreground hover:text-primary cursor-pointer overflow-hidden"
                )}
              >
                <span className="relative z-10 font-serif overflow-hidden h-6 inline-flex flex-col pointer-events-none">
                  <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">{HOME_CONTENT.hero.contactBtn}</span>
                  <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">{HOME_CONTENT.hero.contactBtn}</span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </SectionWrapper>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Scroll</span>
          <div className="h-16 w-px bg-linear-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>

    </section>
  );
};


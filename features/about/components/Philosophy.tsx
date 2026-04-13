'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Heading } from '@/components/common/Heading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ABOUT_DATA } from '@/constants/about';

export const Philosophy = () => {
  const { philosophy, stats } = ABOUT_DATA;

  return (
    <SectionWrapper className="bg-muted py-32 md:py-48 overflow-hidden relative">

      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 md:mb-48">
           <Heading as="h2" size="2xl" className="uppercase tracking-tighter mb-12 lg:mb-0">
             The <br/><span className="text-muted-foreground/30 italic font-serif">Philosophy</span>
           </Heading>
           <p className="text-xl md:text-2xl font-light text-secondary max-w-lg lg:text-right mt-6">
             We do not merely decorate spaces; we reveal their inherent architectural truth.
           </p>
        </div>

        {/* Huge Staggered Philosophy Cards */}
        <div className="flex flex-col space-y-16 md:space-y-0 relative">
          {philosophy.map((item, index) => {
            
            const alignClass = index % 2 === 0 ? "ml-0" : "ml-auto";
            const marginTop = index === 0 ? "" : "md:-mt-24";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                 className={`w-full md:w-[65%] lg:w-[45%] bg-background p-10 md:p-16 border border-border rounded-sm shadow-2xl relative z-10 ${alignClass} ${marginTop} group hover:-translate-y-4 transition-transform duration-700`}
              >
                <div className="flex items-center justify-between mb-16">
                  <span className="text-sm font-bold text-accent uppercase tracking-widest">0{index + 1}</span>
                  <div className="w-12 h-[2px] bg-accent group-hover:w-24 transition-all duration-700" />
                </div>

                <Heading as="h4" size="lg" className="tracking-tighter mb-8 group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </Heading>
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section with Massive Typography */}
        <div className="pt-40 md:pt-64 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="text-center md:text-left space-y-4 border-t border-border pt-8"
              >
                <p className="text-5xl md:text-7xl lg:text-[7rem] font-light font-serif tracking-tighter leading-none hover:text-accent transition-colors cursor-default">{stat.value}</p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground font-bold">{stat.label}</p>
              </motion.div>
            ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

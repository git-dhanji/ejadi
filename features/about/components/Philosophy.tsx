'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ABOUT_DATA } from '@/constants/about';

export const Philosophy = () => {
  const { philosophy, stats } = ABOUT_DATA;

  return (
    <SectionWrapper className="bg-muted border-t border-border py-28 md:py-40">
      <Container>

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-4">Our Approach</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground leading-tight">
              How we work
            </h2>
          </div>
          <p className="text-base md:text-lg font-light text-muted-foreground max-w-xs md:text-right">
            Three principles that shape every project we take on.
          </p>
        </div>

        {/* Philosophy items — numbered list style */}
        <div className="divide-y divide-border mb-24">
          {philosophy.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 hover:pl-2 transition-all duration-500"
            >
              <span className="text-xs font-bold text-accent/50 uppercase tracking-widest w-6 shrink-0">
                0{index + 1}
              </span>
              <h4 className="text-2xl md:text-3xl font-serif font-light text-foreground group-hover:text-accent transition-colors duration-500 w-full md:w-48 shrink-0">
                {item.title}
              </h4>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 border-t border-border pt-14">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              className="space-y-2"
            >
              <p className="text-5xl md:text-6xl font-serif font-light text-foreground leading-none">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </Container>
    </SectionWrapper>
  );
};

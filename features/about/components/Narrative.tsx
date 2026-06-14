'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { ABOUT_DATA } from '@/constants/about';

export const Narrative = () => {
  const { narrative } = ABOUT_DATA;

  return (
    <section className="py-28 md:py-40 bg-background border-b border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Left label — sticky side tag */}
          <div className="lg:col-span-3 lg:pt-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.5em] text-accent writing-mode-vertical hidden lg:block rotate-0"
            >
              The Story
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.5em] text-accent lg:hidden mb-6"
            >
              The Story
            </motion.p>
          </div>

          {/* Right: paragraphs + quote */}
          <div className="lg:col-span-9 space-y-12">
            {narrative.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="text-2xl md:text-3xl font-light text-foreground leading-[1.6]"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Pull quote — stylish but short */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="pt-8 border-t border-border flex items-start gap-5"
            >
              <span className="text-5xl font-serif text-accent leading-none mt-1">"</span>
              <p className="text-2xl md:text-3xl font-serif italic text-foreground/70 leading-snug">
                {narrative.quote}
              </p>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

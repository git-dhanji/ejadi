'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Heading } from '@/components/common/Heading';
import { ABOUT_DATA } from '@/constants/about';

export const Narrative = () => {
  const { narrative } = ABOUT_DATA;

  return (
    <section className="py-32 md:py-48 bg-background relative overflow-hidden">
      
      {/* Huge background watermark */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 text-[15vw] font-serif italic text-muted opacity-40 whitespace-nowrap pointer-events-none select-none">
        The Story
      </div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col space-y-24 md:space-y-40 w-full max-w-6xl mx-auto">
          
          {narrative.bio.map((paragraph, index) => {
             // Architectural stair-step alignment
             const alignClass = 
               index % 3 === 0 ? "mr-auto pl-4 md:pl-0" : 
               index % 3 === 1 ? "ml-auto text-right pr-4 md:pr-0" : 
               "mx-auto text-center px-4 md:px-0";

             return (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                 className={`max-w-2xl w-full ${alignClass}`}
               >
                 {index === 0 && (
                   <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">
                     01 / Origins
                   </span>
                 )}
                 <p className="text-2xl md:text-4xl font-light text-foreground leading-[1.6] tracking-tight">
                   {paragraph}
                 </p>
               </motion.div>
             );
          })}

        </div>

        {/* Massive Pull Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-40 md:mt-64 relative w-full pt-20"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 text-[10rem] md:text-[20rem] font-serif italic text-muted leading-none select-none">
            "
          </div>
          <h4 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight text-foreground max-w-5xl mx-auto text-center relative z-10">
            {narrative.quote}
          </h4>
        </motion.div>
      </Container>
    </section>
  );
};

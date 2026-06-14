"use client";

import React from "react";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { Container } from "@/components/common/Container";
import { ABOUT_DATA } from "@/constants/about";

/**
 * Cinematic Fullscreen AboutHero.
 * Features:
 * - Fullscreen background portrait.
 * - Bold overlay typography.
 * - Smooth entrance animations.
 */
export const AboutHero = () => {
  const { hero } = ABOUT_DATA;

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-40 pb-20 border-b border-border">
      {/* Abstract background gradient map */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-linear-to-b from-muted to-transparent opacity-50 pointer-events-none" />

      <Container className="relative z-10 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 lg:gap-8">
          {/* Left: Huge Typographic Content */}
          <div className="w-full lg:w-[55%] space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20"
            >
              <h1 className="text-[14vw] lg:text-[7.5rem] leading-[0.85] font-serif tracking-tighter text-foreground uppercase">
                Defining <br />
                <span
                  className="italic block ml-[10%] text-transparent"
                  style={{
                    WebkitTextStroke: "2px var(--foreground)",
                    color: "transparent",
                  }}
                >
                  Modernity
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 lg:gap-12 pl-2 md:pl-10 relative z-20 max-w-xl"
            >
              <div className="w-12 h-[2px] bg-accent mt-3.5 shrink-0" />
              <p className="text-lg md:text-2xl font-light text-secondary leading-relaxed">
                {hero.description}
              </p>
            </motion.div>
          </div>

          {/* Right: Immersive Portrait & Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[45%] relative mt-10 lg:mt-0 px-2 lg:px-0"
          >
            {/* Architectural Offset Frame (Background) */}
            <div className="absolute top-4 -right-4 w-full h-full border border-accent/20 rounded-sm pointer-events-none hidden lg:block" />

            <div className="relative aspect-3/4 w-full max-w-[380px] ml-auto overflow-hidden bg-muted group rounded-sm shadow-2xl z-10 border border-white/10">
              <CldImage
                src={hero.portrait}
                alt={hero.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-2000 group-hover:scale-105"
                priority
              />

              {/* Glass Overlay Tag */}
              {/* Glass Overlay Tag - Moved lower to avoid cutting the face */}
              <div className="absolute bottom-1/4 -right-4 lg:-right-8 glass-premium px-5 py-2.5 rounded-full flex items-center gap-2.5 z-20 shadow-lg border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-foreground">
                  {hero.subtitle}
                </span>
              </div>
            </div>

            {/* Hanging Name Plate (Overlapping the image) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative mt-6 lg:absolute lg:-bottom-6 lg:right-6 lg:-left-6 bg-background py-3 px-5 lg:py-4 lg:px-6 border border-border shadow-xl z-30 transform hover:-translate-y-1 transition-transform duration-500"
            >
              <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-foreground whitespace-nowrap">
                {hero.name}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

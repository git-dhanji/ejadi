'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/constants/projects';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';
import { GridLayout } from '@/components/common/GridLayout';
import { ImageCard } from '@/components/common/ImageCard';
import { cn } from '@/lib/utils';

const categories = ['All', 'Residential', 'Commercial', 'Architecture', 'Hospitality'];

/**
 * Animated Gallery Page.
 * Features:
 * - Pinterest-style Masonry layout.
 * - Fluid category filtering.
 * - Staggered entrance animations.
 */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 min-h-screen bg-background">
      <SectionWrapper withContainer>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-medium uppercase tracking-[0.5em] text-accent"
            >
              Gallery
            </motion.p>
            <Heading as="h1" size="2xl">
              Curated <br /> Perspectives
            </Heading>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'text-[10px] uppercase tracking-widest transition-all duration-300 relative py-2',
                  activeCategory === cat ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 w-full h-px bg-foreground"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
          >
            <GridLayout variant="masonry" columns={{ default: 1, sm: 2, lg: 3 }} gap="gap-8">
              {filteredProjects.map((project) => (
                <ImageCard
                  key={project.id}
                  src={project.coverImage}
                  alt={project.title}
                  title={project.title}
                  subtitle={project.subtitle}
                  href={`/projects/${project.slug}`}
                  aspectRatio={project.featured ? 'portrait' : 'square'}
                />
              ))}
            </GridLayout>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Load More / Infinite Scroll Placeholder */}
        <div className="mt-32 text-center">
          <button className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground hover:text-primary transition-colors py-10">
            Discover More &darr;
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}

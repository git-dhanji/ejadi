'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Heading } from '@/components/common/Heading';
import { ImageCard } from '@/components/common/ImageCard';
import { PROJECTS } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { ProjectCategory } from '@/types/project';

const categories: (ProjectCategory | 'All')[] = [
  'All',
  'Residential',
  'Architecture',
  'Commercial',
  'Hospitality',
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  // Force scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen pt-40 pb-24 bg-background">
      {/* Editorial Header */}
      <Container className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-10">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-accent">
              Portfolio
            </p>
            <Heading as="h1" size="3xl" className="tracking-tighter">
              Selected <span className="italic font-serif opacity-90">Works</span>
            </Heading>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Total projects: {PROJECTS.length}
            </span>
            <p className="text-sm font-light text-muted-foreground max-w-xs md:text-right">
              A curated collection of residential and commercial spaces defined by technical precision.
            </p>
          </div>
        </div>

        {/* Categories / Filter Bar */}
        <div className="mt-12 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all',
                'border border-border',
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </Container>

      {/* Projects Grid */}
      <Container>
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-10 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => {
              // Exact layout per position:
              // 0 → full (10), 1 → 5, 2 → 5, 3 → 3, 4 → 7, 5 → full (10)
              const colMap: Record<number, string> = {
                0: 'sm:col-span-10',
                1: 'sm:col-span-5',
                2: 'sm:col-span-5',
                3: 'sm:col-span-3',
                4: 'sm:col-span-7',
                5: 'sm:col-span-10',
              };
              const colClass = colMap[index] ?? 'sm:col-span-5';
              const isFullWidth = index === 0 || index === filteredProjects.length - 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-5% 0px' }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.7,
                    delay: isFullWidth ? 0 : (index % 2) * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={colClass}
                >
                  <ImageCard
                    title={project.title}
                    src={project.coverImage}
                    alt={project.title}
                    location={project.location}
                    href={`/projects/${project.slug}`}
                    aspectRatio={isFullWidth ? 'landscape' : 'portrait'}
                    featured={isFullWidth}
                  />
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-40 border-t border-border mt-20">
            <p className="font-serif text-2xl text-muted-foreground opacity-30">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-6 text-xs font-bold uppercase tracking-widest text-accent hover:underline"
            >
              Show all works
            </button>
          </div>
        )}
      </Container>
    </main>
  );
}

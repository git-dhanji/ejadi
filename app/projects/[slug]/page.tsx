'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants/projects';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';
import { ImageCard } from '@/components/common/ImageCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

/**
 * Project Detail Page - Storytelling Mode.
 * High-end editorial layout with alternating modules and immersive typography.
 */
export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-muted pb-20">
      {/* 1. Immersive Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-primary">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover opacity-80"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/60" />
        
        <div className="absolute bottom-20 left-0 w-full">
          <SectionWrapper withContainer className="py-0">
            <Link href="/projects">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </motion.button>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-accent">
                {project.category}
              </p>
              <Heading as="h1" size="2xl" className="max-w-4xl tracking-tight text-white font-light! leading-none">
                {project.title}
              </Heading>
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. Project Metadata Bar */}
      <SectionWrapper className="bg-background border-b border-border py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Location</p>
            <p className="text-sm font-medium">{project.location}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Client</p>
            <p className="text-sm font-medium">{project.client}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Year</p>
            <p className="text-sm font-medium">{project.year}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Service</p>
            <p className="text-sm font-medium">{project.category}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Narrative Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8">
            <Heading as="h2" size="lg" variant="serif" className="italic text-3xl">
              The Design Intent
            </Heading>
            <p className="text-xl font-light leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Storytelling Modules (Alternating) */}
      <SectionWrapper className="space-y-32 md:space-y-64 pb-0">
        {project.images.map((img, idx) => (
          <div key={idx} className={idx % 2 === 0 ? 'container mx-auto px-6' : 'w-full'}>
            <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}>
              <div className={idx % 2 === 0 ? 'w-full md:w-[60%]' : 'w-full'}>
                <ImageCard
                  src={img}
                  alt={`Project image ${idx + 1}`}
                  aspectRatio={idx % 3 === 0 ? 'landscape' : 'portrait'}
                  className="w-full"
                />
              </div>
              {idx % 2 === 0 && (
                <div className="w-full md:w-[30%] space-y-6">
                  <span className="text-[10px] font-bold text-stone-300">0{idx + 1}</span>
                  <Heading as="h3" size="xs" variant="serif">Materiality & Form</Heading>
                  <p className="text-stone-500 font-light leading-relaxed">
                    A careful selection of textures and tones that speak to the architectural language of the space.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </SectionWrapper>

      {/* 5. Next Project Call to Action */}
      <SectionWrapper className="mt-32 pt-32 border-t border-border text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-8">Next Up</p>
        <Link href={`/projects/${PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].slug}`}>
          <Heading as="h4" size="xl" className="hover:italic hover:text-accent transition-all duration-500 cursor-pointer">
            {PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].title}
          </Heading>
        </Link>
      </SectionWrapper>
    </div>
  );
}

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';
import { GridLayout } from '@/components/common/GridLayout';
import { ImageCard } from '@/components/common/ImageCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PROJECTS } from '@/constants/projects';

export const HomeFeaturedProjects = () => {
  const featuredList = PROJECTS.filter(p => p.featured || PROJECTS.indexOf(p) < 4);

  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
        <div className="space-y-4">
          <p className="text-xs font-light uppercase tracking-[0.3em] text-accent">Selected Works</p>
          <Heading as="h2" size="2xl">Excellence in <br /> Every Detail</Heading>
        </div>
        <Link href="/projects">
          <Button variant="link" className="text-xs uppercase tracking-[0.2em] p-0 h-auto font-light hover:text-accent transition-all">
            View All Projects &rarr;
          </Button>
        </Link>
      </div>

      <GridLayout columns={{ default: 1, md: 2 }} variant="grid" gap="gap-12 md:gap-20">
        {featuredList.map((project) => (
          <ImageCard
            key={project.id}
            src={project.coverImage}
            alt={project.title}
            title={project.title}
            subtitle={project.subtitle}
            location={project.location}
            href={`/projects/${project.slug}`}
            aspectRatio={project.aspectRatio}
            featured={project.featured}
          />
        ))}
      </GridLayout>
    </SectionWrapper>
  );
};


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SafeImage } from '@/components/common/SafeImage';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, User } from 'lucide-react';
import { BLOG_POSTS } from '@/constants/blogs';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { cn } from '@/lib/utils';

const categories = ['All', 'Trends', 'Technical', 'Luxury', 'Lifestyle', 'Architecture'];

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <SectionWrapper>
        {/* Header */}
        <div className="mb-20 space-y-6">
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-accent">Journal</p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none">
            Tectonic <br />
            <span className="italic opacity-50">Resonance</span>
          </h1>
          <p className="max-w-xl text-muted-foreground text-lg font-light leading-relaxed">
            Ejadi Interior, the best architect in Indore, explores the intersection of monolithic form, material honesty, and the spatial choreography of the human experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-8 border-b border-border pb-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "relative text-[10px] uppercase tracking-widest font-bold transition-colors",
                activeCategory === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-[33px] left-0 right-0 h-px bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden mb-8">
                  <SafeImage
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute top-6 right-6 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                  </div>
                </Link>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-muted rounded-full text-foreground/70">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    <Calendar size={12} className="text-accent" />
                    {post.date}
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl md:text-4xl font-serif tracking-tight leading-tight hover:text-accent transition-colors mb-4">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground font-light leading-relaxed line-clamp-2 mb-6">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-auto text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/btn"
                >
                  Read Article 
                  <span className="w-10 h-px bg-border group-hover/btn:w-16 group-hover/btn:bg-accent transition-all duration-500" />
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </SectionWrapper>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { PROJECTS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/Container";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Architecture",
  "Hospitality",
];

interface GalleryItem {
  src: string;
  title: string;
  slug: string;
  category: string;
  location: string;
}

function buildGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = [];
  PROJECTS.forEach((project) => {
    items.push({
      src: project.coverImage,
      title: project.title,
      slug: project.slug,
      category: project.category,
      location: project.location,
    });
    project.images?.forEach((img) => {
      items.push({
        src: img,
        title: project.title,
        slug: project.slug,
        category: project.category,
        location: project.location,
      });
    });
  });
  return items;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const allItems = buildGalleryItems();

  const filtered =
    activeCategory === "All"
      ? allItems
      : allItems.filter((i) => i.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      {/* ── Header ── */}
      <Container className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-10">
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">
              Gallery
            </p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none">
              Curated <em className="not-italic opacity-50">Perspectives</em>
            </h1>
          </div>
          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={cn(
                  "text-[10px] uppercase tracking-widest font-bold transition-all duration-300 relative py-1",
                  activeCategory === cat
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="filterLine"
                    className="absolute bottom-0 left-0 w-full h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </Container>

      {/* ── Masonry Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="px-0"
        >
          <Container>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {filtered.map((item, index) => (
                <motion.div
                  key={`${item.slug}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 6) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative break-inside-avoid mb-4 overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full">
                      {/* Category badge */}
                      <span className="inline-block mb-2 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.3em] bg-accent text-white rounded-full">
                        {item.category}
                      </span>
                      {/* Title */}
                      <p className="text-white font-serif text-base leading-tight mb-2 drop-shadow-lg">
                        {item.title}
                      </p>
                      {/* Location badge */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm text-white/90 rounded-full border border-white/20">
                        <MapPin size={9} className="shrink-0" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-40">
              <p className="font-serif text-2xl text-muted-foreground opacity-30">
                No images found.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-6 text-xs font-bold uppercase tracking-widest text-accent hover:underline"
              >
                Show all
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-11 h-11 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/10 transition-all"
              aria-label="Close"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/40">
              {lightboxIndex + 1} / {filtered.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/10 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-5xl w-full mx-16 md:mx-24"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentItem.src}
                  alt={currentItem.title}
                  width={1400}
                  height={900}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  priority
                />
                {/* Caption */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent mb-1">
                      {currentItem.category}
                    </p>
                    <p className="text-white font-serif text-lg">
                      {currentItem.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/10 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { SafeImage } from "@/components/common/SafeImage";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/Container";
import type { CloudinaryResource } from "@/app/api/gallery/route";

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
  category: string;
}

function cloudinaryToGalleryItems(resources: CloudinaryResource[]): GalleryItem[] {
  return resources.map((r) => {
    // Try to infer category from folder structure
    const folderParts = r.public_id.split("/");
    const folderName = folderParts.length > 1 ? folderParts[0] : "";
    const matchedCategory = categories.find(
      (c) => c !== "All" && folderName.toLowerCase().includes(c.toLowerCase())
    );

    return {
      src: r.secure_url,
      title: folderParts[folderParts.length - 1].replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      category: matchedCategory ?? "Residential",
    };
  });
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [allItems, setAllItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data.resources) {
          setAllItems(cloudinaryToGalleryItems(data.resources as CloudinaryResource[]));
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
                className={cn(
                  "text-[10px] uppercase tracking-widest font-bold transition-all duration-300 relative py-1",
                  activeCategory === cat
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
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

      {/* ── Loading skeleton ── */}
      {loading && (
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-4 bg-muted animate-pulse rounded-sm"
                style={{ height: `${220 + (i % 3) * 80}px` }}
              />
            ))}
          </div>
        </Container>
      )}

      {/* ── Error state ── */}
      {!loading && error && (
        <div className="flex flex-col items-center justify-center py-40 text-center">
          <p className="font-serif text-2xl text-muted-foreground opacity-40">
            Could not load gallery.
          </p>
          <p className="text-xs text-muted-foreground mt-2 opacity-30">
            Check your Cloudinary credentials.
          </p>
        </div>
      )}

      {/* ── Masonry Grid ── */}
      {!loading && !error && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Container>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {filtered.map((item, index) => (
                  <motion.div
                    key={`${item.src}-${index}`}
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
                    <SafeImage
                      src={item.src}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Subtle dim on hover — no text */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>

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
            </Container>
          </motion.div>
        </AnimatePresence>
      )}

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
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-11 h-11 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/10 transition-all"
              aria-label="Close"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/40">
              {lightboxIndex + 1} / {filtered.length}
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/10 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

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
                <SafeImage
                  src={currentItem.src}
                  alt={currentItem.title}
                  width={1400}
                  height={900}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
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

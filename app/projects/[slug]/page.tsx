"use client";

import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { useParams, notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { Heading } from "@/components/common/Heading";
import { ImageCard } from "@/components/common/ImageCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/**
 * Project Detail Page - Storytelling Mode.
 * High-end editorial layout with alternating modules and immersive typography.
 */
export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = project?.images ?? [];

  // Scroll to top on every mount (before paint) — fixes random scroll position
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background pb-20">
      {/* 1. Immersive Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/60" />

        <div className="absolute bottom-20 left-0 w-full">
          <SectionWrapper withContainer className="py-0">
            <Link href="/projects">
              <button className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-[10px] uppercase tracking-widest text-white/80 hover:bg-black/60 hover:text-white transition-all">
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Projects
              </button>
            </Link>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-accent">
                {project.category}
              </p>
              <Heading
                as="h1"
                size="2xl"
                className="max-w-4xl tracking-tight text-white font-light! leading-none"
              >
                {project.title}
              </Heading>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. Project Metadata Bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { label: "Location", value: project.location, icon: "📍" },
              { label: "Client", value: project.client, icon: "🏢" },
              { label: "Year", value: project.year, icon: "📅" },
              { label: "Category", value: project.category, icon: "🏷️" },
            ].map((item) => (
              <div
                key={item.label}
                className="py-8 px-6 first:pl-0 last:pr-0 group hover:bg-muted/30 transition-colors duration-300"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent mb-3">
                  {item.label}
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Narrative Section */}
      <SectionWrapper className="border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left label column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent">
              01 — Brief
            </span>
            <h2 className="font-serif text-2xl italic text-foreground leading-snug">
              The Design Intent
            </h2>
            <div className="w-8 h-px bg-accent mt-2" />
          </div>
          {/* Right content column */}
          <div className="md:col-span-9 relative">
            {/* Big decorative quote mark */}
            <span className="absolute -top-6 -left-4 text-[120px] leading-none font-serif text-foreground/5 select-none pointer-events-none">
              "
            </span>
            <p className="relative text-lg md:text-xl font-light leading-relaxed text-foreground/80 pl-2">
              {project.description}
            </p>
            {/* Pull quote strip */}
            <div className="mt-10 pl-6 border-l-2 border-accent">
              <p className="text-sm font-medium text-muted-foreground italic">
                Crafted for{" "}
                <span className="text-foreground not-italic font-semibold">
                  {project.client}
                </span>{" "}
                — {project.location}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Gallery Grid */}
      {project.images && project.images.length > 0 && (
        <SectionWrapper>
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-8">
            Project Images
          </p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative break-inside-avoid mb-4 overflow-hidden group cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              >
                <Image
                  src={img}
                  alt={`${project.title} — image ${idx + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm text-white/90 rounded-full border border-white/20">
                      <MapPin size={9} />
                      {project.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* 5. Next Project Call to Action */}
      <SectionWrapper className="mt-32 pt-32 border-t border-border text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-8">
          Next Up
        </p>
        <Link
          href={`/projects/${PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].slug}`}
        >
          <Heading
            as="h4"
            size="xl"
            className="hover:italic hover:text-accent transition-all duration-500 cursor-pointer"
          >
            {PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].title}
          </Heading>
        </Link>
      </SectionWrapper>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 w-11 h-11 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/10 transition-all"
            >
              <X size={16} strokeWidth={1.5} />
            </button>
            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/40">
              {lightboxIndex + 1} / {images.length}
            </div>
            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/10 transition-all"
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
                  src={images[lightboxIndex]}
                  alt={`${project.title} — image ${lightboxIndex + 1}`}
                  width={1400}
                  height={900}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  priority
                />
                <div className="mt-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent mb-1">
                    {project.category}
                  </p>
                  <p className="text-white font-serif text-lg">
                    {project.title}
                  </p>
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
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

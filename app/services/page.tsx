'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { HOME_CONTENT, SITE } from '@/constants/site';

export default function ServicesPage() {
  // Force scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── Page Header ── */}
      <section className="pt-40 pb-20 border-b border-border">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-accent">
                {HOME_CONTENT.servicesSummary.label}
              </p>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none">
                Our <em className="not-italic opacity-60">Expertise</em>
              </h1>
            </div>
            <p className="max-w-sm text-muted-foreground font-light leading-relaxed md:text-right">
              A comprehensive suite of design and architecture services, blending technical mastery with artistic vision.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Services List ── */}
      <section className="py-4">
        {HOME_CONTENT.servicesSummary.items.map((service, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-border"
          >
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? '' : ''}`}>

                {/* Image */}
                <div className={`relative aspect-video lg:aspect-auto lg:min-h-[480px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* subtle dark overlay so image doesn't blow out in light mode */}
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center gap-8 py-16 px-0 lg:px-16 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                    0{index + 1} / 0{HOME_CONTENT.servicesSummary.items.length}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-serif tracking-tighter leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground font-light leading-relaxed text-base max-w-md">
                    {service.longDesc}
                  </p>

                  {/* Feature Pills */}
                  <ul className="flex flex-wrap gap-2">
                    {service.features?.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest border border-border rounded-full text-muted-foreground dark:border-border hover:border-accent hover:text-accent transition-colors duration-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 group w-fit"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] border-b border-foreground/30 pb-1 group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                      Request Consultation
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </Link>
                </div>

              </div>
            </Container>
          </motion.article>
        ))}
      </section>

      {/* ── CTA Banner ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="py-32 bg-muted border-t border-border"
      >
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter leading-tight max-w-lg">
              Ready to start your <em className="not-italic opacity-60">project?</em>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
              >
                Contact Our Team
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </motion.section>

    </main>
  );
}

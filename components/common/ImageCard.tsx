'use client';

import React from 'react';
import { SafeImage } from './SafeImage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  location?: string;
  href?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'video';
  className?: string;
  priority?: boolean;
  featured?: boolean;
}

const aspectMap = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[2/1]',
  video: 'aspect-video',
};

/**
 * Premium ImageCard.
 * Features:
 * - Depth System: Layered shadows and subtle scaling.
 * - Interaction: Custom cursor "VIEW" state.
 * - Motion: Entrance reveals and smooth zoom.
 */
export const ImageCard = ({
  src,
  alt,
  title,
  subtitle,
  location,
  href,
  aspectRatio = 'portrait',
  className,
  priority = false,
  featured = false,
}: ImageCardProps) => {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl p-0', // Removed bg-neutral-900 and padding for open feel
        'h-[550px] md:h-[650px]',
        featured && 'md:col-span-2 md:h-[700px]',
        className
      )}
      data-cursor="view"
    >
      {/* Bottom Badge Overlay — always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-linear-to-t from-black/70 via-black/30 to-transparent">
        <div className="translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          {/* Title */}
          <h3 className="text-white font-serif text-lg md:text-xl leading-tight drop-shadow-lg mb-2">
            {title}
          </h3>
          {/* Location badge */}
          {location && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm text-white/90 rounded-full border border-white/20">
              <MapPin size={9} className="shrink-0" />
              {location}
            </span>
          )}
        </div>
      </div>


      {/* Hover Overlay with Glow */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ring-1 ring-inset ring-accent/20 rounded-[2rem]" />
      </div>

      {/* Image Container with Radius */}
      <div className={cn(
        'relative w-full overflow-hidden bg-muted transition-all duration-700 ease-[0.2,1,0.3,1]',
        'shadow-sm group-hover:shadow-xl rounded-2xl grow'
      )}>
        <SafeImage
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
        
        {/* Editorial Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
        
        {/* Corner Detail (Subtle indicator) */}
        <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-accent/20 transition-all duration-700 group-hover:bg-accent" />
      </div>
    </motion.div>

  );

  if (href) {
    return (
      <Link href={href} className="block w-full h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};


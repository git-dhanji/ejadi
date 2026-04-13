'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE } from '@/constants/site';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  isDarkTheme?: boolean; 
}

export const Logo = ({ className, isDarkTheme = false }: LogoProps) => {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      {/* Animated Architectural Icon */}
      <motion.div 
        className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.svg 
          viewBox="0 0 100 100" 
          className={cn(
            "w-full h-full fill-none transition-colors duration-500",
            isDarkTheme ? "stroke-white" : "stroke-foreground"
          )}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Outer diamond/polygon */}
          <motion.polygon 
            points="50,10 90,50 50,90 10,50"
            variants={{
              rest: { rotate: 0, scale: 1 },
              hover: { rotate: 90, scale: 1.1 }
            }}
            className="transition-colors duration-500 group-hover:stroke-accent"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Inner architect measuring lines / structure */}
          <motion.path 
            d="M50 10 V90 M10 50 H90 M30 30 L70 70 M30 70 L70 30"
            variants={{
              rest: { opacity: 0.4, scale: 0.8 },
              hover: { opacity: 1, scale: 1.05, transition: { delay: 0.1, duration: 0.4 } }
            }}
            className="stroke-accent"
            strokeWidth="2"
          />
          {/* Center precision circle */}
          <motion.circle 
            cx="50" cy="50" r="12"
            variants={{
              rest: { scale: 0.5, opacity: 0, rotate: -90 },
              hover: { scale: 1, opacity: 1, rotate: 0, transition: { delay: 0.2, duration: 0.4 } }
            }}
            className={cn(
              "transition-colors duration-500",
              isDarkTheme ? "stroke-white" : "stroke-foreground"
            )}
            strokeWidth="3"
            strokeDasharray="10 4"
          />
        </motion.svg>
      </motion.div>

      {/* Text Branding */}
      <span className={cn(
        'font-serif text-xl md:text-2xl font-bold tracking-tighter transition-colors',
        isDarkTheme ? 'text-white' : 'text-foreground'
      )}>
        <span 
          className="text-transparent transition-colors duration-500"
          style={{ WebkitTextStroke: `0.75px ${isDarkTheme ? '#10b981' : '#064e3b'}` }}
        >
          {SITE.name.split(' ')[0]}
        </span>
        <span className="text-secondary underline decoration-1 underline-offset-4 decoration-secondary/50 group-hover:decoration-secondary transition-all ml-1 md:ml-1.5">
          {SITE.name.split(' ')[1]}
        </span>
      </span>
    </Link>
  );
};

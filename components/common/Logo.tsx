'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/constants/site';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
}

export const Logo = ({ className, isDarkTheme = false }: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo/ejadilogo.webp"
        alt={SITE.name}
        width={320}
        height={370}
        priority
        className="h-14 md:h-16 w-auto object-contain"
      />
      <div className="flex leading-tight">
        <span className="text-lg md:text-xl font-sans font-bold tracking-tight">
          <span className=''>Ejadi</span> Interior
        </span>
      </div>
    </Link>
  );
};

'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop';

/**
 * SafeImage component that provides a fallback image if the primary source fails to load.
 */
export const SafeImage = ({ src, fallbackSrc = DEFAULT_FALLBACK, alt, ...props }: SafeImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Reset state if src changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <Image
      {...props}
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
    />
  );
};

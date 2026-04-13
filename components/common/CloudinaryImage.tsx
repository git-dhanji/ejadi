'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import cloudinaryLoader from '@/lib/cloudinary';

type CloudinaryImageProps = Omit<ImageProps, 'loader'>;

/**
 * CloudinaryImage wrapper.
 * Enforces Cloudinary delivery, optimizing resources while separating configuration logic from UI components.
 */
export const CloudinaryImage = (props: CloudinaryImageProps) => {
  return (
    <Image
      loader={cloudinaryLoader}
      {...props}
    />
  );
};

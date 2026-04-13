/**
 * Custom Cloudinary Loader for Next.js Image component
 * Separates all Cloudinary URL generation logic from UI components.
 */
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Your Cloudinary cloud name (dv5rneisf)
  const cloudName = 'dv5rneisf';

  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  
  // Clean up the src (remove leading slashes if any)
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${normalizedSrc}`;
}

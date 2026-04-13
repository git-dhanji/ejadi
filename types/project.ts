export type ProjectCategory = 'Residential' | 'Commercial' | 'Architecture' | 'Hospitality';

export interface ProjectStats {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  client: string;
  location: string;
  year: string;
  coverImage: string;
  images: string[];
  stats?: ProjectStats[];
  
  // Editorial flags for the Visual Hierarchy System
  featured?: boolean; // col-span-2 row-span-2 every 6th project or explicit
  aspectRatio?: 'portrait' | 'square' | 'landscape';
}

export interface GalleryImageData {
  id: string;
  src: string;
  title: string;
  category: string;
  location: string;
}

const BASE_IMAGES = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e',
  'https://images.unsplash.com/photo-1600121848594-d8644e57abab',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
  'https://images.unsplash.com/photo-1600607686527-6fb886090705',
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87',
  'https://images.unsplash.com/photo-1600585152223-38444f0ceec9',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
  'https://images.unsplash.com/photo-1616137466211-f939a420be84',
  'https://images.unsplash.com/photo-1497366216548-37526070297c',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
  'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e',
  'https://images.unsplash.com/photo-1554995207-c18c20360a59',
  'https://images.unsplash.com/photo-1588854337236-6889d631faa8',
  'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
];

const LOCATIONS = [
  'Vijay Nagar, Indore',
  'Palasia, Indore',
  'AB Road, Indore',
  'South Tukoganj, Indore',
  'Scheme 54, Indore',
  'Rajwada, Indore',
  'Bhawarkua, Indore',
  'Saket, Indore',
];

const CATEGORIES = ['Residential', 'Commercial', 'Architecture', 'Hospitality'];

const TITLES = [
  'Minimalist Sanctuary',
  'Urban Loft Concept',
  'Brutalist Manor',
  'Contemporary Workspace',
  'Lumina Glass Pavilion',
  'The Stone Retreat',
  'Zen Garden House',
  'Monolith Exhibition',
  'Ethereal Lobby',
  'The Penthouse Suite',
];

export const GALLERY_COLLECTION: GalleryImageData[] = Array.from({ length: 100 }).map((_, i) => {
  const baseImg = BASE_IMAGES[i % BASE_IMAGES.length];
  // Using different sigs for variety in the same base images if possible, or just cycling
  // Actually Unsplash supports width/height/crop in URL
  const src = `${baseImg}?q=80&w=2000&auto=format&fit=crop&sig=${i}`;
  
  return {
    id: `gal-${i}`,
    src,
    title: `${TITLES[i % TITLES.length]} 0${Math.floor(i / TITLES.length) + 1}`,
    category: CATEGORIES[i % CATEGORIES.length],
    location: LOCATIONS[i % LOCATIONS.length],
  };
});

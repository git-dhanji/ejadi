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
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
  'https://images.unsplash.com/photo-1616137466211-f939a420be84',
  'https://images.unsplash.com/photo-1497366216548-37526070297c',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
  'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  'https://images.unsplash.com/photo-1560448204-603b3fc33ddc',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
  'https://images.unsplash.com/photo-1560185007-5f0bb1866cab',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858',
  'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1',
  'https://images.unsplash.com/photo-1565623006069-64638d97f682',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
  'https://images.unsplash.com/photo-1574643156929-51fa098b0394',
  'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457',
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
  'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4',
  'https://images.unsplash.com/photo-1565538810643-b5bdb714032a',
];

const LOCATIONS = [
  'Anand Bazar, Indore',
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

// Generate only 30 unique images instead of 100 to avoid duplicates
export const GALLERY_COLLECTION: GalleryImageData[] = BASE_IMAGES.map((baseImg, i) => {
  const src = `${baseImg}?q=80&w=2000&auto=format&fit=crop`;

  return {
    id: `gal-${i}`,
    src,
    title: `${TITLES[i % TITLES.length]} ${String(Math.floor(i / TITLES.length) + 1).padStart(2, '0')}`,
    category: CATEGORIES[i % CATEGORIES.length],
    location: LOCATIONS[i % LOCATIONS.length],
  };
});


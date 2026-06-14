import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'lumina-residence',
    title: 'Lumina Residence',
    subtitle: 'Indore, IN',
    description: 'Ejadi Interior, the best architect in Indore, presents Lumina Residence—a rigorous study in tectonic precision. Utilizing the raw materiality of exposed concrete and expansive glass, we orchestrated a seamless spatial choreography between the internal sanctuary and the urban garden in Vijay Nagar.',
    category: 'Residential',
    client: 'Private Owner',
    location: 'Vijay Nagar, Indore',
    year: '2023',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    images: [
      // Residential - Living Rooms
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop',
      // Residential - Bedrooms
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578898886076-85ef115b78b3?q=80&w=2070&auto=format&fit=crop',
      // Residential - Kitchen & Dining
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
      // Residential - Home Decor & Details
      'https://images.unsplash.com/photo-1609766975828-e7f7d92e2b1c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585128903994-03b9e4f4b02f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2070&auto=format&fit=crop',
    ],
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: '2',
    slug: 'monolith-gallery',
    title: 'Monolith Gallery',
    subtitle: 'Indore, IN',
    description: 'An exercise in the adaptive reuse of industrial antiquity. The Monolith Gallery preserves the rugged tectonic character of its past while introducing curated architectural interventions for refined modern art displays in Palasia, Indore.',
    category: 'Commercial',
    client: 'City Arts Collective',
    location: 'Palasia, Indore',
    year: '2022',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    images: [
      // Art Gallery - Exhibition Spaces
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576863847187-11e8f2e4e1bb?q=80&w=2070&auto=format&fit=crop',
      // Gallery - Art Display Areas
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558865869-c93f6f8482af?q=80&w=2070&auto=format&fit=crop',
      // Gallery - White Wall Spaces
      'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=2070&auto=format&fit=crop',
      // Gallery - Contemporary Art Spaces
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578926375605-eaf7559b2636?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580134144113-52d1dad1f814?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=2070&auto=format&fit=crop',
    ],
    aspectRatio: 'landscape',
  },
  {
    id: '3',
    slug: 'fjord-house',
    title: 'The Fjord House',
    subtitle: 'Indore, IN',
    description: 'Perched on the edge of a pristine landscape, this timber-clad retreat celebrates the warmth of natural materials and the precision of contemporary craft.',
    category: 'Architecture',
    client: 'Nordic Escapes',
    location: 'Scheme 54, Indore',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2035&auto=format&fit=crop',
    images: [
      // Residential - Living Spaces
      'https://images.unsplash.com/photo-1588854337221-4cf9fa96b81a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
      // Residential - Bedrooms
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop',
      // Residential - Kitchen & Dining
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
      // Residential - Home Details
      'https://images.unsplash.com/photo-1609766975828-e7f7d92e2b1c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585128903994-03b9e4f4b02f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop',
    ],
    aspectRatio: 'portrait',
  },
  {
    id: '4',
    slug: 'solis-penthouse',
    title: 'Solis Penthouse',
    subtitle: 'Indore, IN',
    description: 'A high-altitude residential masterpiece in South Tukoganj. Featuring a fluid spatial orchestration that prioritizes cinematic views and material honesty, the Solis Penthouse redefines the luxury skyline of Indore.',
    category: 'Residential',
    client: 'Private Equity',
    location: 'South Tukoganj, Indore',
    year: '2023',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop',
    images: [
      // Residential - Living & Entertainment
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop',
      // Residential - Bedrooms
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578898886076-85ef115b78b3?q=80&w=2070&auto=format&fit=crop',
      // Residential - Kitchen & Dining
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
      // Residential - Study & Details
      'https://images.unsplash.com/photo-1609766975828-e7f7d92e2b1c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585128903994-03b9e4f4b02f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2070&auto=format&fit=crop',
    ],
    aspectRatio: 'landscape',
  },
  {
    id: '5',
    slug: 'azure-retreat',
    title: 'Azure Boutique Resort',
    subtitle: 'Indore, IN',
    description: 'A riverside hospitality retreat that redefines luxury through white-washed stone, private water elements, and endless horizons.',
    category: 'Hospitality',
    client: 'Azure Hotels',
    location: 'Rajwada, Indore',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    images: [
      // Hotel/Resort - Guest Rooms
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop',
      // Hotel/Resort - Restaurant & Dining
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
      // Hotel/Resort - Lobby & Reception
      'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562437536-745d4b2e5c0f?q=80&w=2070&auto=format&fit=crop',
      // Hotel/Resort - Lounge & Common Areas
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    ],
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: '6',
    slug: 'ethos-headquarters',
    title: 'Ethos HQ',
    subtitle: 'Indore, IN',
    description: 'A forward-thinking workspace that optimizes focus and collaboration through biophilic design and ergonomic spatial planning.',
    category: 'Commercial',
    client: 'Ethos Tech',
    location: 'AB Road, Indore',
    year: '2023',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop',
    images: [
      // Office - Open Work Spaces
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
      // Office - Meeting & Conference Rooms
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop',
      // Office - Collaborative Spaces
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop',
      // Office - Reception & Lobby
      'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562437536-745d4b2e5c0f?q=80&w=2070&auto=format&fit=crop',
      // Office - Break Areas
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=2070&auto=format&fit=crop',
    ],
    aspectRatio: 'landscape',
  },
];

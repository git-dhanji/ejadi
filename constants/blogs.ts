export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string; // For SEO meta
  category: 'Trends' | 'Technical' | 'Luxury' | 'Lifestyle' | 'Architecture';
  date: string;
  author: string;
  coverImage: string;
  content: string;
  keywords: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'top-10-architects-indore-2024',
    title: 'Defining the Best Architect in Indore: Tectonic Precision and Spatial Choreography',
    excerpt: 'An exploration of how Ejadi Interior is redefining the architectural discourse in Madhya Pradesh through the synthesis of vernacular modernism and monolithic form.',
    description: 'Looking for the best architect in Indore? Explore how Ejadi Interior’s pursuit of spatial choreography and material honesty is transforming the luxury landscape of Central India.',
    category: 'Trends',
    date: 'April 10, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    keywords: ['Best Architect in Indore', 'Luxury Architects Indore', 'Vernacular Modernism Indore', 'Tectonic Interior Design'],
    content: `Indore’s architectural fabric is undergoing a profound ontological shift. The contemporary demand transcends mere shelter, pivoting instead toward the creation of atmospheric resonance and structural integrity. As the best architect in Indore, Ejadi Interior leads this movement, championing a philosophy of material honesty. From the urban density of Anand Bazar to the historic echoes of Rajwada, we are crafting monoliths that serve as permanent narratives of space.`
  },
  {
    id: '2',
    slug: 'interior-design-trends-vijay-nagar',
    title: 'The Phenomenology of Luxury Residential Design in Anand Bazar',
    excerpt: 'Analyzing the shift towards spatial orchestration and curated living in Indore’s most prestigious residential enclave.',
    description: 'Seeking luxury interior design in Anand Bazar, Indore? Discover how the best architect in Indore is redefining residential aesthetics through curated narratives.',
    category: 'Luxury',
    date: 'April 08, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    keywords: ['Luxury Interior Design Anand Bazar', 'Indore High-End Homes', 'Spatial Orchestration', 'Best Architect in Indore'],
    content: `Anand Bazar has evolved into a laboratory for high-end residential experimentation. The trend is moving away from superficial ornamentation toward a deep phenomenology of space. Homeowners are seeking environments that breathe—where light, shadow, and materiality perform a silent dance of elegance.`
  },
  {
    id: '3',
    slug: 'sustainable-engineering-indore-smart-city',
    title: 'Sustainable Engineering in Indore’s Smart City Projects',
    excerpt: 'How civil engineering and architecture are merging to create a greener Indore.',
    description: 'Explore the role of sustainable engineering in Indore’s Smart City mission. Learn about eco-friendly construction practices in Madhya Pradesh.',
    category: 'Technical',
    date: 'April 05, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    keywords: ['Sustainable Architecture Indore', 'Civil Engineer Indore', 'Indore Smart City', 'Green Building India'],
    content: `Sustainability is no longer a choice; it's a necessity. Indore’s commitment to cleanliness and green energy is now being reflected in its buildings...`
  },
  {
    id: '4',
    slug: 'choosing-right-architectural-firm-mp',
    title: 'Selecting a Paradigm: Finding the Best Architectural Firm in Madhya Pradesh',
    excerpt: 'Navigating the intricate landscape of structural engineering and design consultants in Indore.',
    description: 'A comprehensive guide to selecting the best architectural firm in Madhya Pradesh. Learn why Ejadi Interior is the top choice for complex engineering and design.',
    category: 'Technical',
    date: 'April 02, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop',
    keywords: ['Top Architectural Firm Indore', 'Best Architect in Indore', 'Engineering Consultants MP', 'Architectural Excellence'],
    content: `Hiring an architectural partner is an exercise in ontological trust. It requires a firm that possesses both the technical gravity of a civil engineer and the poetic vision of a true designer. In Madhya Pradesh, the distinction lies in the ability to harmonize local vernacular with global standards of structural integrity.`
  },
  {
    id: '5',
    slug: 'luxury-penthouses-south-tukoganj',
    title: 'The Rise of Luxury Penthouses in South Tukoganj',
    excerpt: 'Why high-altitude living is the new benchmark for success in Indore.',
    description: 'Explore the upscale penthouse market in South Tukoganj, Indore. Discover how luxury interior design is reshaping the city skyline.',
    category: 'Luxury',
    date: 'March 28, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    keywords: ['South Tukoganj Penthouses', 'Luxury Living Indore', 'Real Estate Indore', 'Interior Designer South Tukoganj'],
    content: `South Tukoganj remains the premier address in Indore. We explore how modern penthouses are maximizing spatial flow and cinematic views...`
  },
  {
    id: '6',
    slug: 'commercial-space-planning-ab-road',
    title: 'Optimizing Commercial Space Planning on AB Road',
    excerpt: 'Designing offices that boost productivity in Indore’s busiest commercial corridor.',
    description: 'Learn how to optimize commercial spaces on AB Road, Indore. Best practices for office interior design and architectural planning in Indore.',
    category: 'Technical',
    date: 'March 25, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
    keywords: ['Office Interior Indore', 'AB Road Commercial Space', 'Workplace Design Indore', 'Architecture AB Road'],
    content: `AB Road is the lifeline of Indore’s business. But designing for high-traffic corridors requires a unique blend of soundproofing and utility...`
  },
  {
    id: '7',
    slug: 'heritage-restoration-old-indore',
    title: 'Vernacular Integrity: The Art of Heritage Restoration in Old Indore',
    excerpt: 'Synthesizing historical narratives with contemporary structural paradigms in Rajwada’s architectural heart.',
    description: 'Expert heritage restoration in Old Indore. Learn how the best architect in Indore preserves historical integrity through modern engineering and design philosophy.',
    category: 'Architecture',
    date: 'March 20, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop',
    keywords: ['Heritage Restoration Indore', 'Rajwada Architecture', 'Best Architect in Indore', 'Historical Preservation India'],
    content: `Old Indore is a dense tapestry of Maratha and Colonial tectonic history. Restoring these structures requires more than renovation; it demands a deep ontological respect for the original intent, balanced with the structural honesty required for longevity in a modern urban center.`
  },
  {
    id: '8',
    slug: 'modern-kitchen-concepts-scheme-54',
    title: 'Modern Modular Kitchen Concepts in Scheme 54',
    excerpt: 'Why the modular kitchen is the heart of the modern Indori home.',
    description: 'Explore modular kitchen designs in Scheme 54, Indore. Best interior designers for kitchen renovation and planning in Indore.',
    category: 'Lifestyle',
    date: 'March 15, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15224bbafb0?q=80&w=2070&auto=format&fit=crop',
    keywords: ['Modular Kitchen Indore', 'Interior Designer Scheme 54', 'Home Renovation Indore', 'Modern Kitchen India'],
    content: `The kitchen has evolved. In Scheme 54, we are seeing a shift towards open-plan kitchens that serve as social hubs for the family...`
  },
  {
    id: '9',
    slug: 'landscape-architecture-indore-mansions',
    title: 'Incorporating Landscape Architecture in Indore Mansions',
    excerpt: 'Bringing nature indoors with biophilic design and urban gardens.',
    description: 'Learn how landscape architecture enhances luxury mansions in Indore. Discover biophilic design trends with Ejadi Interior.',
    category: 'Trends',
    date: 'March 10, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    keywords: ['Landscape Architect Indore', 'Garden Design Indore', 'Biophilic Architecture India', 'Luxury Estates Indore'],
    content: `Outdoor living is integral to Indore’s lifestyle. Whether it's a terrace garden or a curated backyard, we blend architecture with nature...`
  },
  {
    id: '10',
    slug: 'future-of-architecture-in-bhopal-vs-indore',
    title: 'The Future of Architecture: Bhopal vs Indore',
    excerpt: 'An analytical comparison of the design evolution in Madhya Pradesh’s two biggest cities.',
    description: 'Compare architectural trends between Bhopal and Indore. Discover the future of urban development in Madhya Pradesh with Ejadi Interior.',
    category: 'Trends',
    date: 'March 05, 2024',
    author: 'Mohammad Salman',
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop',
    keywords: ['Architecture Bhopal', 'Architecture Indore', 'Urban Planning MP', 'Modern Cities India'],
    content: `While Bhopal celebrates its lakes and greenery, Indore is embracing a faster, vertical growth path. Both cities offer unique challenges for architects...`
  }
];



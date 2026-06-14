/**
 * Centralized Site Constants for Ejadi Interior.
 * All site-wide configuration and content should be managed here.
 */

export const SITE = {
  name: 'Ejadi Interior',
  author: 'Mohammad Salman',
  tagline: 'Spatial Choreography & Tectonic Precision',
  description: 'Ejadi Interior is widely recognized as the best architect in Indore, curating luxury architectural experiences that balance monolithic form with the atmospheric resonance of raw materials.',
  url: 'https://ejadiinterior.com',
};

export const CONTACT = {
  email: 'ejadiinterior786@gmail.com',
  phone: '+919039176572',
  address: {
    line1: 'Anand Bazar',
    line2: 'Indore, Madhya Pradesh',
    full: 'Anand Bazar, Indore, Madhya Pradesh',
  },
  workingHours: 'Mon - Sat: 10:00 AM - 7:00 PM',
};

export const SOCIALS = {
  instagram: 'https://instagram.com/ejadiinterior',
};

export const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Journal' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const HOME_CONTENT = {
  hero: {
    subtitle: 'Bespoke Architectural Engineering',
    title: 'Sculpting Permanent Narratives of Space',
    exploreBtn: 'Explore Monoliths',
    contactBtn: 'Initiate Narrative',
  },
  aboutPreview: {
    label: 'Defining Modernity',
    heading: 'The best architect in Indore for visionary living.',
    text: 'Ejadi Interior represents the pinnacle of vernacular modernism. We synthesize structural integrity with ontological depth to craft environments that transcend mere utility, establishing benchmarks for luxury in Madhya Pradesh.',
    btnText: 'Experience Our Philosophy',
  },
  servicesSummary: {
    label: 'Services',
    heading: 'Tailored Solutions',
    items: [
      {
        title: 'Interior Design',
        desc: 'Complete residential and commercial interior solutions.',
        longDesc: 'Bespoke residential and commercial interior solutions tailored to your unique lifestyle. We focus on harmony between aesthetic beauty and daily functionality.',
        features: ['Custom Furniture Design', 'Color Consulting', 'Material Selection', 'Lighting Design'],
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
      },
      {
        title: 'Architectural Planning',
        desc: 'Structural design and master planning for modern living.',
        longDesc: 'From initial sketches to structural blueprints, we design buildings that stand the test of time and integrate seamlessly with their environment.',
        features: ['Structural Design', 'Site Analysis', 'Sustainable Planning', '3D Visualization'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
      },
      {
        title: 'Space Planning',
        desc: 'Optimizing flow and functionality for ergonomic excellence.',
        longDesc: 'Maximizing the utility of every square inch. We analyze flow and ergonomics to ensure your environment works as hard as you do.',
        features: ['Workflow Analysis', 'Ergonomic Review', 'Acoustic Treatment', 'Custom Cabinetry'],
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  },
  cta: {
    label: 'Join our journey',
    heading: 'Ready to transform your space?',
    exploreBtn: 'Explore Projects',
    contactBtn: 'Contact Us',
  }
};

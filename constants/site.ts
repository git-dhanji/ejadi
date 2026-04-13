/**
 * Centralized Site Constants for Ezadi Interior.
 * All site-wide configuration and content should be managed here.
 */

export const SITE = {
  name: 'Ejadi Interior',
  author: 'Salman Ansari',
  tagline: 'Creating Timeless Narratives of Space',
  description: 'Curating luxury architectural experiences that balance technical precision with the poetry of raw materials.',
  url: 'https://ezadi.com',
};

export const CONTACT = {
  email: 'hello@ezadi.com',
  phone: '+44 (0) 20 7946 0123',
  address: {
    line1: '123 Luxury Avenue, Suite 400',
    line2: 'Design District, London',
    full: '123 Luxury Avenue, Suite 400, Design District, London',
  },
  workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
};

export const SOCIALS = {
  instagram: 'https://instagram.com/ezadi_interior',
  pinterest: 'https://pinterest.com/ezadi_interior',
  linkedin: 'https://linkedin.com/company/ezadi-interior',
  behance: 'https://behance.net/ezadi_interior',
};

export const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const HOME_CONTENT = {
  hero: {
    subtitle: 'Architecture & Interior Design',
    title: 'Creating Timeless Narratives of Space',
    exploreBtn: 'Explore Projects',
    contactBtn: 'Get in Touch',
  },
  aboutPreview: {
    label: 'Our Story',
    heading: 'We create spaces that inspire life.',
    text: 'Founded on the belief that environment shapes emotion, Ezadi Interior brings together a multidisciplinary team of designers and architects to craft bespoke residences and commercial landmarks.',
    btnText: 'Learn More About Us',
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
        image: 'https://images.unsplash.com/photo-1511871893393-82e9c18b70e3?q=80&w=2000&auto=format&fit=crop'
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

export interface LeaderMember {
  id: string;
  name: string;
  role: string;
  title: string;
  quote: string;
  bio: string;
  image?: string;
  signature?: string;
  linkedin?: string;
  email?: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  eyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  contact: {
    inquiryEmail: string;
    conciergePhone: string;
    whatsappNumber: string;
    locationCity: string;
    operatingHours: string;
  };
  navigation: {
    label: string;
    href: string;
    pageId: 'home' | 'story' | 'venue' | 'celebrations' | 'gallery' | 'contact';
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
  leadership: LeaderMember[];
}

export const siteConfig: SiteConfig = {
  brandName: 'MAHOTSAVA GRANDEUR',
  tagline: 'Where Every Celebration Becomes Grandeur',
  eyebrow: 'A DESTINATION FOR EXTRAORDINARY CELEBRATIONS',
  heroHeadline: 'Where Every Celebration Becomes Grandeur',
  heroDescription:
    'Discover a setting where timeless Indian architectural grandeur, thoughtful bespoke hospitality, and unforgettable celebrations come together.',
  contact: {
    inquiryEmail: 'celebrations@mahotsavagrandeur.com',
    conciergePhone: '+91 (0) 80 4928 8800',
    whatsappNumber: '+91 98860 12345',
    locationCity: 'Bengaluru Heritage Enclave, India',
    operatingHours: 'Private Consultations: Tuesday – Sunday, 10:00 AM – 7:00 PM IST',
  },
  navigation: [
    { label: 'Home', href: '#home', pageId: 'home' },
    { label: 'Our Story', href: '#story', pageId: 'story' },
    { label: 'The Venue', href: '#venue', pageId: 'venue' },
    { label: 'Celebrations', href: '#celebrations', pageId: 'celebrations' },
    { label: 'Gallery', href: '#gallery', pageId: 'gallery' },
    { label: 'Contact', href: '#contact', pageId: 'contact' },
  ],
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com' },
    { platform: 'Vogue Weddings', url: 'https://vogue.in' },
    { platform: 'WedMeGood Luxury', url: 'https://wedmegood.com' },
    { platform: 'YouTube Heritage', url: 'https://youtube.com' },
  ],
  leadership: [
    {
      id: 'founder',
      name: 'Maheshgouda Patil',
      role: 'Founder & Chairman',
      title: 'Visionary & Cultural Custodian',
      quote:
        '“True grandeur lies not merely in scale, but in deep reverence for heritage, the sanctity of ritual, and heartfelt hospitality that unites generations.”',
      bio: 'Envisioned Mahotsava Grandeur as a sanctuary for monumentally sacred celebrations, uniting authentic Indian palace architecture with world-class contemporary luxury and personal stewardship.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com',
      email: 'founder@mahotsavagrandeur.com',
    },
    {
      id: 'managing-director',
      name: 'Priyanka Sharma',
      role: 'Managing Director',
      title: 'Head of Operations & Guest Experience',
      quote:
        '“Every monumental celebration is a master symphony of hundreds of dedicated artisans, sommeliers, and concierges moving in flawless synchrony.”',
      bio: 'Leading operational excellence, bespoke multi-day wedding logistics, royal culinary curation, and white-glove event production across all imperial palace venues.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com',
      email: 'md@mahotsavagrandeur.com',
    },
  ],
};


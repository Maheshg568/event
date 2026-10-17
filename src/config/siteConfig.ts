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
};

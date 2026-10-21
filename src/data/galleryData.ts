export type GalleryCategory =
  | 'all'
  | 'weddings'
  | 'engagements-receptions'
  | 'birthdays-private'
  | 'corporate-events'
  | 'cultural-mahotsavas'
  | 'concerts-entertainment'
  | 'decoration-stage';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  setting: string;
  description: string;
  palette: string;
  accent: string;
  aspectRatio: 'aspect-4/3' | 'aspect-16/9' | 'aspect-square';
  quote: string;
  gradientTheme: string;
  image: string;
  badge?: string;
}

export const PORTFOLIO_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Portfolio' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'engagements-receptions', label: 'Engagements & Receptions' },
  { id: 'birthdays-private', label: 'Birthdays & Private Parties' },
  { id: 'corporate-events', label: 'Corporate Events' },
  { id: 'cultural-mahotsavas', label: 'Cultural Events & Mahotsavas' },
  { id: 'concerts-entertainment', label: 'Concerts & Entertainment' },
  { id: 'decoration-stage', label: 'Decoration & Stage Design' },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // 1. Weddings
  {
    id: 'gal-wed-1',
    title: 'Imperial Vedic Mandap at Sunset',
    category: 'weddings',
    categoryLabel: 'Weddings',
    setting: 'Palace Courtyard & Open Lawn',
    description: 'Sculpted floral pillars with fresh tuberose, marigolds, and sacred havan kund architecture designed for auspicious ceremonies.',
    palette: 'Ivory White, Crimson & Temple Gold',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-4/3',
    quote: '“Sacred traditions elevated into timeless royal visual poetry.”',
    gradientTheme: 'from-[#350606] via-[#570D0D] to-[#210404]',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    badge: 'Curated Wedding Aesthetic',
  },
  {
    id: 'gal-wed-2',
    title: 'The Grand Durbar Wedding Stage',
    category: 'weddings',
    categoryLabel: 'Weddings',
    setting: 'Grand Ballroom & Heritage Stage',
    description: 'Carved sandstone arches illuminated by custom warm lighting and bohemian crystal chandeliers with royal velvet seating.',
    palette: 'Champagne Gold & Deep Burgundy',
    accent: '#C8A66A',
    aspectRatio: 'aspect-16/9',
    quote: '“Monumental proportions echoing timeless Indian royal heritage.”',
    gradientTheme: 'from-[#420B0B] via-[#2A0505] to-[#140202]',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    badge: 'Curated Wedding Aesthetic',
  },

  // 2. Engagements & Receptions
  {
    id: 'gal-eng-1',
    title: 'Sangeet Symphony & Glitz Stage',
    category: 'engagements-receptions',
    categoryLabel: 'Engagements & Receptions',
    setting: 'Outdoor Arena & Illuminated Amphitheatre',
    description: 'Dynamic stage scenography featuring brass lattices, moving head spotlights, and crystal chandeliers for live musical performances.',
    palette: 'Midnight Wine & Golden Glow',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-16/9',
    quote: '“Where celebration energy meets unhurried palatial grace.”',
    gradientTheme: 'from-[#2C0606] via-[#4A0D0D] to-[#1C0404]',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    badge: 'Celebration Scenography',
  },
  {
    id: 'gal-eng-2',
    title: 'Enchanted Floral Ring Ceremony',
    category: 'engagements-receptions',
    categoryLabel: 'Engagements & Receptions',
    setting: 'Boutique Terrace & Lawns',
    description: 'Bespoke circular botanical ring arch with pastel peonies, baby’s breath, and personalized monogram backdrop.',
    palette: 'Pastel Blush, Gold & Ivory',
    accent: '#C8A66A',
    aspectRatio: 'aspect-4/3',
    quote: '“Intimate vows framed by gentle candlelight and floral softness.”',
    gradientTheme: 'from-[#350606] via-[#2A0505] to-[#180303]',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    badge: 'Celebration Scenography',
  },

  // 3. Birthdays & Private Parties
  {
    id: 'gal-bday-1',
    title: 'Milestone Jubilee Banquet Soirée',
    category: 'birthdays-private',
    categoryLabel: 'Birthdays & Private Parties',
    setting: 'Private Estate Lawn & Rotunda',
    description: 'Handcrafted candlelit tables, artisanal place cards, and personalized culinary stations for 50th and silver jubilees.',
    palette: 'Warm Amber, Gold & Burgundy',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-4/3',
    quote: '“Honoring life’s proudest personal milestones with loved ones.”',
    gradientTheme: 'from-[#2A0505] via-[#350606] to-[#110202]',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Private Occasion Concept',
  },
  {
    id: 'gal-bday-2',
    title: 'Royal Children’s Thematic Wonderland',
    category: 'birthdays-private',
    categoryLabel: 'Birthdays & Private Parties',
    setting: 'Clubhouse Banquet Arena',
    description: 'Vibrant organic balloon installations, custom photo booths, interactive activity zones, and celebration cake tables.',
    palette: 'Coral, Ivory & Golden Sunshine',
    accent: '#C8A66A',
    aspectRatio: 'aspect-4/3',
    quote: '“Pure joy, boundless imagination, and unforgettable childhood memories.”',
    gradientTheme: 'from-[#350606] via-[#4F0F0F] to-[#1C0404]',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    badge: 'Private Occasion Concept',
  },

  // 4. Corporate Events
  {
    id: 'gal-corp-1',
    title: 'Leadership Conclave & Keynote Auditorium',
    category: 'corporate-events',
    categoryLabel: 'Corporate Events',
    setting: 'Convention Center Main Hall',
    description: 'P3 ultra-fine LED wall displays, multi-camera live broadcast, executive podiums, and punctual audiovisual synchronization.',
    palette: 'Executive Navy, Charcoal & Champagne',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-16/9',
    quote: '“Rigorous corporate precision delivered with refined dignity.”',
    gradientTheme: 'from-[#1C0404] via-[#2A0505] to-[#0E0202]',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    badge: 'Corporate Production',
  },
  {
    id: 'gal-corp-2',
    title: 'Annual Business Excellence Awards',
    category: 'corporate-events',
    categoryLabel: 'Corporate Events',
    setting: '5-Star Ballroom Arena',
    description: 'Glittering crystal awards stage with intelligent beam lighting, red carpet registration desks, and seated gala dinner.',
    palette: 'Gold, Onyx & Crimson',
    accent: '#C8A66A',
    aspectRatio: 'aspect-4/3',
    quote: '“Recognizing exceptional achievements on a grand corporate stage.”',
    gradientTheme: 'from-[#350606] via-[#4A0D0D] to-[#1A0303]',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    badge: 'Corporate Production',
  },

  // 5. Cultural Events & Mahotsavas
  {
    id: 'gal-cult-1',
    title: 'Karnataka Cultural Festival Mahotsava',
    category: 'cultural-mahotsavas',
    categoryLabel: 'Cultural Events & Mahotsavas',
    setting: 'Open Stadium Grounds',
    description: 'Traditional temple jaali entrance gates, ceremonial brass deepams, and monumental heritage stage for classical folk recitals.',
    palette: 'Marigold Yellow, Vermilion & Teak',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-16/9',
    quote: '“Celebrating the timeless heartbeat of Karnataka’s vibrant heritage.”',
    gradientTheme: 'from-[#3E0909] via-[#570D0D] to-[#210404]',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Cultural Mahotsava',
  },

  // 6. Concerts & Entertainment
  {
    id: 'gal-conc-1',
    title: 'Live Arena Music Concert & Star Stage',
    category: 'concerts-entertainment',
    categoryLabel: 'Concerts & Entertainment',
    setting: 'Live Arena & Stadium Stage',
    description: 'High-powered line-array sound system, laser illumination, heavy-duty trussing, and green room artist hospitality management.',
    palette: 'Electric Cyan, Amber & Velvet Noir',
    accent: '#C8A66A',
    aspectRatio: 'aspect-16/9',
    quote: '“Electrifying sound, radiant lighting, and pure musical ecstasy.”',
    gradientTheme: 'from-[#4F0F0F] via-[#350606] to-[#120202]',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    badge: 'Concert & Artist Management',
  },

  // 7. Decoration & Stage Design
  {
    id: 'gal-dec-1',
    title: 'Architectural Floral Tunnel Entrance',
    category: 'decoration-stage',
    categoryLabel: 'Decoration & Stage Design',
    setting: 'Grand Entryway Walkway',
    description: '150-foot cascading floral tunnel with micro fairy lights, fragrant jasmine garlands, and gold-leaf ceremonial urns.',
    palette: 'White Jasmine, Amber & Heritage Gold',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-4/3',
    quote: '“An ethereal passage that welcomes guests into unmatched grandeur.”',
    gradientTheme: 'from-[#350606] via-[#210404] to-[#100202]',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    badge: 'Stage & Production Design',
  },
  {
    id: 'gal-dec-2',
    title: 'The Starlit Fairy Canopy Courtyard',
    category: 'decoration-stage',
    categoryLabel: 'Decoration & Stage Design',
    setting: 'Open Sky Lawn',
    description: 'Overhead celestial mesh with 10,000 warm amber micro-lights illuminating evening wedding receptions and formal dinners.',
    palette: 'Warm Ivory & Midnight Velvet',
    accent: '#C8A66A',
    aspectRatio: 'aspect-16/9',
    quote: '“Dining beneath a starlit canopy that feels infinitely open and warm.”',
    gradientTheme: 'from-[#1E0404] via-[#350606] to-[#0E0202]',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80',
    badge: 'Stage & Production Design',
  },
];

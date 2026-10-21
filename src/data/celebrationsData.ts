export interface CelebrationType {
  id: string;
  categoryLetter: string;
  title: string;
  subtitle: string;
  description: string;
  idealSetting: string;
  subServices: string[];
  highlights: string[];
  duration: string;
  accent: string;
  themeGradient: string;
}

export const SERVICES_CUSTOMISATION_NOTE =
  "The exact services for each event can be customised according to the client's requirements and budget.";

export const CELEBRATION_TYPES: CelebrationType[] = [
  {
    id: 'wedding-planning',
    categoryLetter: 'A',
    title: 'Wedding Planning & Management',
    subtitle: 'From Sacred Vows to Magnificent Banquets',
    description:
      'Complete, end-to-end wedding management orchestrating traditional and destination celebrations across Karnataka with uncompromised grandeur, regal stage aesthetics, and warm hospitality.',
    idealSetting: 'Palace Lawns, Heritage Courtyards & Luxury Ballrooms',
    subServices: [
      'Complete wedding planning and coordination',
      'Traditional and destination weddings',
      'Wedding decoration and stage design',
      'Mandap and floral decoration',
      'Wedding ceremonies and rituals',
      'Guest management and hospitality',
      'Wedding entertainment and artist coordination',
      'Wedding logistics and vendor management',
    ],
    highlights: [
      'Bespoke wedding and ritual coordination',
      'Artisanal Vedic mandap & sculpted floral styling',
      'End-to-end guest reception and hospitality desks',
      'Seamless multi-vendor management & timeline control',
    ],
    duration: '1 to 4 Days Multi-Event Orchestration',
    accent: '#E9D3B0',
    themeGradient: 'from-[#420B0B] via-[#2A0505] to-[#1A0303]',
  },
  {
    id: 'engagements-pre-wedding',
    categoryLetter: 'B',
    title: 'Engagements & Pre-Wedding Celebrations',
    subtitle: 'Haldi, Mehendi, Sangeet & Sacred Ring Ceremonies',
    description:
      'Vibrant pre-wedding festivities curated with customized thematic decor, energetic Sangeet productions, cinematic couple entries, and memorable reception management.',
    idealSetting: 'Poolside Lawns, Banquet Halls & Boutique Resorts',
    subServices: [
      'Engagement ceremonies',
      'Ring ceremonies',
      'Haldi and Mehendi functions',
      'Sangeet nights',
      'Pre-wedding celebrations',
      'Reception planning and management',
      'Couple entry concepts and stage decoration',
    ],
    highlights: [
      'High-energy Sangeet stage scenography & AV systems',
      'Vibrant floral Haldi & artistic Mehendi setups',
      'Cinematic couple entry concepts with special effects',
      'Grand reception decor and guest flow management',
    ],
    duration: 'Half-Day or Multi-Day Celebrations',
    accent: '#C8A66A',
    themeGradient: 'from-[#350606] via-[#4A0D0D] to-[#1C0404]',
  },
  {
    id: 'birthday-parties-private',
    categoryLetter: 'C',
    title: 'Birthday Parties & Private Celebrations',
    subtitle: 'Milestones, Surprise Soirées & Family Gatherings',
    description:
      'Thoughtfully designed celebrations for personal milestones, children’s themed birthdays, surprise anniversaries, baby showers, and intimate family homecomings.',
    idealSetting: 'Boutique Lawns, Private Villas & Luxury Clubhouses',
    subServices: [
      'Birthday parties for all ages',
      'Kids’ birthday parties with custom themes',
      'Surprise celebrations',
      'Anniversary celebrations',
      'Baby showers and naming ceremonies',
      'Housewarming ceremonies (Griha Pravesha)',
      'Private parties and family gatherings',
      'Personal milestone celebrations',
    ],
    highlights: [
      'Creative thematic scenography & customized balloon/floral styling',
      'Interactive games, emcees, and family entertainment',
      'Surprise planning with discreet coordination',
      'Catering coordination and celebratory cake tables',
    ],
    duration: 'Evening Party or Half-Day Gathering',
    accent: '#E9D3B0',
    themeGradient: 'from-[#2A0505] via-[#350606] to-[#140202]',
  },
  {
    id: 'corporate-events',
    categoryLetter: 'D',
    title: 'Corporate Events & Conclaves',
    subtitle: 'Conferences, Product Launches & Executive Meets',
    description:
      'High-impact corporate summits, annual company celebrations, dealer meets, and brand activations delivered with meticulous organization and punctual professionalism.',
    idealSetting: 'Convention Auditoriums, Tech Amphitheatres & 5-Star Ballrooms',
    subServices: [
      'Corporate meetings and conferences',
      'Product launches and press meets',
      'Brand promotions and experiential activations',
      'Award ceremonies and gala dinners',
      'Annual days and company celebrations',
      'Networking events and business conclaves',
      'Dealer and employee meets',
      'Business inaugurations and opening ceremonies',
    ],
    highlights: [
      'High-definition LED backdrops, line-array audio & stage lighting',
      'Delegate badge registration desks and QR protocol',
      'Executive hospitality, catering, and VIP liaison',
      'Branded stage fabrications and trophy distribution flows',
    ],
    duration: 'Full-Day Summit, Multi-Day Conference or Gala Evening',
    accent: '#C8A66A',
    themeGradient: 'from-[#2C0606] via-[#570D0D] to-[#1C0404]',
  },
  {
    id: 'cultural-events-mahotsavas',
    categoryLetter: 'E',
    title: 'Cultural Events & Mahotsavas',
    subtitle: 'Festivals, Heritage Celebrations & Public Gatherings',
    description:
      'Spectacular regional cultural festivals, youth college celebrations, community mahotsavas, and traditional music/dance recitals honoring heritage with massive crowd control and artistic grace.',
    idealSetting: 'Public Stadiums, University Grounds & Cultural Amphitheatres',
    subServices: [
      'Cultural festivals and mahotsavas',
      'Traditional and regional celebrations',
      'College festivals and youth events',
      'Community gatherings and public festivals',
      'Cultural performances, dance & theatrical shows',
      'Public celebrations and themed events',
    ],
    highlights: [
      'Massive stage fabrication with traditional architectural motifs',
      'Artist coordination, ritual protocols & ceremonial timing',
      'Crowd flow engineering, barrier barricading & safety planning',
      'Traditional floral arches, brass lamps, and festive lighting',
    ],
    duration: 'Single Evening to Week-Long Mahotsava',
    accent: '#E9D3B0',
    themeGradient: 'from-[#3E0909] via-[#570D0D] to-[#210404]',
  },
  {
    id: 'concerts-artist-management',
    categoryLetter: 'F',
    title: 'Concerts & Artist Management',
    subtitle: 'Live Concerts, Celebrity Artists & Star Sound Production',
    description:
      'Turnkey management for musical concerts, celebrity appearances, renowned vocalists, popular DJs, and high-energy live entertainment shows.',
    idealSetting: 'Open-Air Arenas, Exhibition Grounds & Large Auditoriums',
    subServices: [
      'Live music concerts',
      'Celebrity and artist bookings',
      'Singer and performer management',
      'DJ nights and entertainment shows',
      'Stage, sound and lighting coordination',
      'Audience and backstage coordination',
    ],
    highlights: [
      'A-list celebrity, band, singer and dance troupe bookings',
      'Pro-grade sound engineering, line arrays & intelligent lighting',
      'Green room hospitality, rider management & artist security',
      'Barricaded crowd management, entry gates & backstage control',
    ],
    duration: 'Evening Concert or Music Festival',
    accent: '#C8A66A',
    themeGradient: 'from-[#4F0F0F] via-[#350606] to-[#1C0404]',
  },
  {
    id: 'hospitality-logistics',
    categoryLetter: 'G',
    title: 'Hospitality & Event Logistics',
    subtitle: 'Guest Reception, Transport & On-Ground Coordination',
    description:
      'Warm Atithi Devo Bhava hospitality, active reception desks, hotel accommodation management, airport/station transit fleets, and synchronized on-ground logistics.',
    idealSetting: 'Transit Hubs, Hotels & Event Venues Across Karnataka',
    subServices: [
      'Guest reception and hospitality desks',
      'Guest registration and coordination',
      'Accommodation and transport coordination',
      'Event scheduling and logistics',
      'Vendor coordination and supplier oversight',
      'On-ground event management and real-time operations',
      'Event staff and support coordination',
    ],
    highlights: [
      'Airport, train and private transit fleet dispatch & tracking',
      'Hotel block bookings, room key handover & welcome hampers',
      'Dedicated 24/7 hospitality desk and guest helpline',
      'Rigorous on-ground timeline execution and staff supervision',
    ],
    duration: '24/7 Dedicated Event Support',
    accent: '#E9D3B0',
    themeGradient: 'from-[#2A0505] via-[#3E0909] to-[#180303]',
  },
  {
    id: 'stage-decoration-production',
    categoryLetter: 'H',
    title: 'Stage, Decoration & Production',
    subtitle: 'Scenography, Floral Art, Intelligent Lighting & LED Walls',
    description:
      'Immersive stage design, custom carpentry fabrication, luxury floral installations, high-resolution LED screens, crystal chandeliers, and cinematic photo/video coverage.',
    idealSetting: 'Indoor Stages, Open-Air Lawns & Exhibition Spaces',
    subServices: [
      'Stage design and fabrication coordination',
      'Floral and theme decoration',
      'Lighting and sound arrangements',
      'LED screens and visual displays',
      'Entrance and backdrop design',
      'Themed event setups and custom props',
      'Photography and videography coordination',
    ],
    highlights: [
      '3D thematic stage blueprints and structural fabrication',
      'Fresh exotic flower sourcing & artistic mandap sculpting',
      'Intelligent moving heads, architectural uplighting & ambient glow',
      'Full HD LED displays, live cameras & drone video capture',
    ],
    duration: 'Customized Production Timelines',
    accent: '#C8A66A',
    themeGradient: 'from-[#350606] via-[#2A0505] to-[#110202]',
  },
  {
    id: 'inaugurations-special-occasions',
    categoryLetter: 'I',
    title: 'Inaugurations & Special Occasions',
    subtitle: 'Showroom Openings, Office Launches & Traditional Rites',
    description:
      'Dignified ceremonial openings for commercial showrooms, corporate headquarters, business branches, traditional religious pujas, and award felicitation galas.',
    idealSetting: 'Commercial Showrooms, Corporate Offices & Sacred Temples',
    subServices: [
      'Shop and showroom inaugurations',
      'Office openings and business launches',
      'Business launch events and ribbon-cutting ceremonies',
      'Religious and traditional functions (Puja, Homa, Satyanarayana)',
      'Award functions and felicitation ceremonies',
      'Special themed celebrations and commemorative milestones',
    ],
    highlights: [
      'Ribbon-cutting protocols, brass lamps & traditional welcomes',
      'VIP guest reception, priest coordination & auspicious puja items',
      'Floral gate framing, red carpet aisles & entrance decor',
      'Audio-visual systems for founder addresses and keynote speeches',
    ],
    duration: 'Morning Muhurat, Half-Day or Evening Gala',
    accent: '#E9D3B0',
    themeGradient: 'from-[#420B0B] via-[#350606] to-[#1B0303]',
  },
];

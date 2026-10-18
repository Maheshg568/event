export interface CelebrationType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealSetting: string;
  highlights: string[];
  duration: string;
  accent: string;
  themeGradient: string;
}

export const CELEBRATION_TYPES: CelebrationType[] = [
  {
    id: 'weddings-engagements',
    title: 'Weddings & Engagements',
    subtitle: 'From Sacred Vows to Magnificent Banquets',
    description:
      'Comprehensive wedding planning, engagement ceremonies, custom stage design, regal floral décor coordination, dedicated guest hospitality, and master vendor management across Karnataka.',
    idealSetting: 'Heritage Courtyards, Luxury Mandaps & Grand Ballrooms',
    highlights: [
      'Bespoke wedding and engagement ceremony planning',
      'Artisanal stage design & sculpted floral décor coordination',
      'End-to-end guest reception and hospitality desks',
      'Seamless multi-vendor coordination & ritual logistics',
    ],
    duration: '1 to 4 Days Multi-Event Orchestration',
    accent: '#E9D3B0',
    themeGradient: 'from-[#420B0B] via-[#2A0505] to-[#1A0303]',
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events & Conclaves',
    subtitle: 'High-Level Professional Gatherings & Summits',
    description:
      'Impeccable execution for corporate meetings, leadership conferences, high-profile product launches, annual award ceremonies, business gatherings, and experiential brand activations.',
    idealSetting: 'Convention Auditoriums, Executive Ballrooms & Tech Amphitheatres',
    highlights: [
      'High-definition AV, lighting, and keynote stage setups',
      'Corporate conference, summit & product launch management',
      'Prestige awards nights and brand activations',
      'Executive registration, protocol & delegate coordination',
    ],
    duration: 'Full-Day Summit, Multi-Day Conference or Evening Gala',
    accent: '#C8A66A',
    themeGradient: 'from-[#2C0606] via-[#4A0D0D] to-[#1C0404]',
  },
  {
    id: 'cultural-mahotsavas',
    title: 'Cultural Mahotsavas & Festivals',
    subtitle: 'Celebrating Rich Heritage, Music & Community',
    description:
      'Spectacular cultural festivals, traditional Indian celebrations, vibrant community gatherings, public cultural festivities, and monumental large-scale stage productions.',
    idealSetting: 'Palace Grounds, Public Arenas & Cultural Amphitheatres',
    highlights: [
      'Monumental stage architecture and traditional jaali motifs',
      'Cultural procession logistics & artist management',
      'Large-scale crowd flow, seating, and security arrangements',
      'Traditional heritage decor and ceremonial lighting displays',
    ],
    duration: 'Multi-Day Festival or Community Mahotsava',
    accent: '#E9D3B0',
    themeGradient: 'from-[#350606] via-[#570D0D] to-[#210404]',
  },
  {
    id: 'hospitality-logistics',
    title: 'Hospitality & Logistics Management',
    subtitle: 'Warm Welcomes & Flawless White-Glove Movement',
    description:
      'Specialized guest reception, premium hotel coordination, airport & railway station transfers, room hampers, customized accommodation coordination, active 24/7 hospitality desks, and event transport.',
    idealSetting: 'Dedicated Concierge Desks, Transit Fleets & Hotels',
    highlights: [
      'Airport, railway and private transit fleet dispatch',
      'Luxury hotel block management & guest check-in desks',
      'Personalized welcome hampers, itineraries & luggage handling',
      'Real-time transit tracking & liaison officers',
    ],
    duration: 'Continuous 24/7 Itinerary Support',
    accent: '#C8A66A',
    themeGradient: 'from-[#2A0505] via-[#3E0909] to-[#1A0303]',
  },
  {
    id: 'birthdays-celebrations',
    title: 'Birthdays & Private Celebrations',
    subtitle: 'Intimate Milestones & Curated Gatherings',
    description:
      'Milestone birthday celebrations, golden anniversaries, surprise luxury parties, bespoke themed events, family reunions, and beautifully curated intimate private gatherings.',
    idealSetting: 'Private Lawns, Boutique Resorts & Rooftop Terraces',
    highlights: [
      'Custom thematic scenography, photo zones & floral installations',
      'Curated gourmet catering and bespoke mocktail/beverage bars',
      'Surprise entrance planning, live musical serenades & MCs',
      'Customized commemorative keepsakes for distinguished guests',
    ],
    duration: 'Half-Day or Evening Soirée',
    accent: '#E9D3B0',
    themeGradient: 'from-[#350606] via-[#2A0505] to-[#140202]',
  },
  {
    id: 'concerts-artist-management',
    title: 'Concerts & Artist Management',
    subtitle: 'Live Performances, Electric Sound & Star Production',
    description:
      'Live music concerts, celebrity and classical artist bookings, entertainment coordination, cutting-edge stage production, backstage green-room arrangements, and turnkey crowd execution.',
    idealSetting: 'Open-Air Arenas, Concert Grounds & Stadiums',
    highlights: [
      'Celebrity singer, band, dance troupe and artist bookings',
      'Acoustic-engineered line-array sound systems & stage lighting',
      'VIP backstage hospitality, green room management & rider fulfilment',
      'Turnkey concert production, ticketing and gate security coordination',
    ],
    duration: 'Evening Concert or Music Festival',
    accent: '#C8A66A',
    themeGradient: 'from-[#4F0F0F] via-[#350606] to-[#1C0404]',
  },
];

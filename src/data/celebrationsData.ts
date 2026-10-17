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
    id: 'royal-weddings',
    title: 'Imperial Indian Weddings',
    subtitle: 'Sacred Rituals in Monumental Sanctity',
    description:
      'From regal baraat processions framed by royal bugles to sacred pheras around consecrated hawan altars, we craft weddings where timeless spiritual devotion meets breathtaking architectural splendor.',
    idealSetting: 'The Grand Durbar Hall & Celestial Courtyard',
    highlights: [
      'Monumental elephant & vintage car baraat pathway',
      'Artisanal Vedic floral mandap scenography',
      'Synchronized shehnai, sitar, and classical vocal ensembles',
      'Multi-regional royal culinary master feast',
    ],
    duration: '2 to 4 Days Multi-Event Itinerary',
    accent: '#E9D3B0',
    themeGradient: 'from-[#420B0B] via-[#2A0505] to-[#1A0303]',
  },
  {
    id: 'sangeet-extravaganza',
    title: 'Sangeet & Musical Galas',
    subtitle: 'Theatrical Brilliance, Joy & Rhythm',
    description:
      'An evening of electric celebration featuring high-caliber theatrical stage design, international acoustic systems, choreographic direction, and dazzling visual lighting orchestrations.',
    idealSetting: 'The Grand Durbar Arena',
    highlights: [
      'Concert-grade hydraulic performance stage',
      'Intelligent concert lighting & atmospheric haze choreography',
      'VIP lounge seating clusters with dedicated mixology bars',
      'Celebrity artist booking and staging logistics',
    ],
    duration: 'Evening 6:00 PM – Late',
    accent: '#C8A66A',
    themeGradient: 'from-[#350606] via-[#570D0D] to-[#210404]',
  },
  {
    id: 'sacred-engagements',
    title: 'Engagements & Ring Ceremonies',
    subtitle: 'The Harmonious Union of Two Legacies',
    description:
      'Intimate yet lavish gatherings honoring the sacred vows of betrothal. Elegant champagne receptions, family blessings, and personalized musical serenades.',
    idealSetting: 'The Royal Baithak & Courtyard Rotunda',
    highlights: [
      'Bespoke floral ring ceremony pedestals',
      'Curated silver thali presentation of ceremonial gifts',
      'Scented botanical backdrops of fresh tuberose and roses',
      'Fine champagne and bespoke mocktail degustation',
    ],
    duration: 'Half-Day or Evening Soirée',
    accent: '#E9D3B0',
    themeGradient: 'from-[#2A0505] via-[#3E0909] to-[#1A0303]',
  },
  {
    id: 'grand-receptions',
    title: 'Imperial Receptions',
    subtitle: 'A Regal Welcome to High Society',
    description:
      'An opulent formal evening welcoming esteemed guests, dignitaries, and extended families. Grand receiving lines, red-carpet entrances, and curated global gastronomy.',
    idealSetting: 'The Grand Durbar & Celestial Lawn',
    highlights: [
      'Stunning sculptural photo and reception backdrop',
      'Synchronized silver cloche dining banquet',
      'String symphony or harpist ambient accompaniment',
      'Seamless multi-gate VIP valet and guest coordination',
    ],
    duration: 'Evening 7:00 PM – Midnight',
    accent: '#C8A66A',
    themeGradient: 'from-[#4F0F0F] via-[#350606] to-[#1C0404]',
  },
  {
    id: 'milestone-jubilees',
    title: 'Milestone Jubilees & Soirées',
    subtitle: 'Honoring Generational Achievements',
    description:
      'Celebrating 50th anniversaries, royal birthdays, and family triumphs in an atmosphere of warmth, vintage hospitality, and heartfelt prestige.',
    idealSetting: 'The Royal Baithak & Private Terrace',
    highlights: [
      'Archival family legacy portrait galleries',
      'Rare single-malt and heritage wine pairings',
      'Private acoustic musical recitals',
      'Personalized commemorative keepsake presentations',
    ],
    duration: 'Day or Evening Gathering',
    accent: '#E9D3B0',
    themeGradient: 'from-[#350606] via-[#2A0505] to-[#140202]',
  },
  {
    id: 'corporate-conclaves',
    title: 'Sovereign Corporate Conclaves',
    subtitle: 'Where Visionary Leaders Convene',
    description:
      'A majestic backdrop for high-level summits, corporate anniversaries, and prestigious award nights with uncompromising protocol, discretion, and presentation.',
    idealSetting: 'The Grand Durbar Hall',
    highlights: [
      'High-definition widescreen broadcast technology',
      'Diplomatic protocol and VIP security management',
      'Executive boardroom breakout salons',
      'Synchronized five-course gala dinner banquet',
    ],
    duration: 'Full-Day Summit & Evening Gala',
    accent: '#C8A66A',
    themeGradient: 'from-[#2C0606] via-[#4A0D0D] to-[#1C0404]',
  },
];

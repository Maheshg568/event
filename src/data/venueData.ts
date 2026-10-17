export type SetupType = 'mandap' | 'sangeet' | 'reception' | 'banquet';

export interface VenueSpace {
  id: string;
  name: string;
  subtitle: string;
  type: 'indoor' | 'outdoor' | 'hybrid';
  areaSqFt: number;
  minCapacity: number;
  maxCapacity: number;
  description: string;
  architecturalHighlights: string[];
  setups: {
    [key in SetupType]: {
      name: string;
      description: string;
      recommendedGuestCount: string;
      features: string[];
    };
  };
  lightingOptions: {
    ambient: string;
    description: string;
  }[];
  palette: string;
  gradientTheme: string;
}

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: 'grand-durbar',
    name: 'The Grand Durbar Hall',
    subtitle: 'Monumental Indoor Palace Ballroom',
    type: 'indoor',
    areaSqFt: 18000,
    minCapacity: 400,
    maxCapacity: 1200,
    description:
      'A majestic double-height hall adorned with intricately carved Mughal sandstone arches, 18 bespoke crystal chandeliers, polished Italian marble floors, and state-of-the-art acoustic architecture.',
    architecturalHighlights: [
      '32-foot soaring hand-finished ceilings',
      '18 Handcrafted bohemian crystal chandeliers',
      'Dual sweeping imperial staircases for grand bride & groom entries',
      'Integrated acoustic baffle walls and discrete concert audio rigging',
    ],
    setups: {
      mandap: {
        name: 'Vedic Sanctum Mandap',
        description: 'A 360-degree tiered circular mandap crowned with cascading tuberose and jasmine garlands beneath the central chandelier.',
        recommendedGuestCount: '500 – 900 Guests',
        features: ['Elevated marble hawan altar', 'Amphitheater-style velvet seating', 'Dedicated floral acoustic canopy'],
      },
      sangeet: {
        name: 'Sangeet Theatrical Arena',
        description: 'Immersive festival staging with 40-foot LED backdrop, amphitheater VIP lounges, and dedicated sound engineering.',
        recommendedGuestCount: '600 – 1,100 Guests',
        features: ['60-foot hydraulic performance stage', 'VIP baithak sofa clusters', 'Concealed haze & intelligent lighting rigs'],
      },
      reception: {
        name: 'Imperial Gala Reception',
        description: 'Opulent formal receiving lines with gold-leaf thrones, velvet drape scenography, and candlelit cocktail rotundas.',
        recommendedGuestCount: '700 – 1,200 Guests',
        features: ['Grand floral archway entrance', 'Silver service receiving stages', 'Private lounge alcoves'],
      },
      banquet: {
        name: 'Royal Dastarkhwan Feasting',
        description: 'Long imperial tables adorned with antique silver candelabras, fine bone china, and dedicated master culinary service.',
        recommendedGuestCount: '400 – 800 Guests',
        features: ['Custom carved mahogany feasting tables', 'Sommelier champagne bars', 'White-glove synchronized service'],
      },
    },
    lightingOptions: [
      { ambient: 'Warm Golden Hour', description: 'Candlelit amber glow accentuating architectural stone arches.' },
      { ambient: 'Imperial Twilight', description: 'Deep royal burgundy uplighting with champagne gold accents.' },
      { ambient: 'Celebratory Festive', description: 'Dynamic warm white theatrical spotlights focused on ceremonial centerpieces.' },
    ],
    palette: 'Burgundy Velvet & Antique Gold',
    gradientTheme: 'from-[#350606] via-[#570D0D] to-[#210404]',
  },
  {
    id: 'celestial-courtyard',
    name: 'The Celestial Courtyard',
    subtitle: 'Starlit Open-Air Palace Amphitheater',
    type: 'outdoor',
    areaSqFt: 24000,
    minCapacity: 250,
    maxCapacity: 900,
    description:
      'An expansive marble courtyard framed by illuminated jaali stone screens, mirrored lotus fountains, and a canopy of 10,000 micro-fairy lights reflecting beneath the evening sky.',
    architecturalHighlights: [
      'Central reflecting water pavilion with floating oil lamps',
      'Surrounding carved jharokhas for traditional shehnai musicians',
      'Weather-controlled celestial tensile canopy options',
      'Lush scented perimeter gardens of mogra and night-blooming jasmine',
    ],
    setups: {
      mandap: {
        name: 'Floating Lotus Island Mandap',
        description: 'An ethereal ceremony platform erected over the central lotus pool, lit by 1,008 floating brass diyas.',
        recommendedGuestCount: '350 – 750 Guests',
        features: ['360° water reflection platform', 'Terraced lawn seating', 'Bespoke floral pergola'],
      },
      sangeet: {
        name: 'Starlit Musical Mehfil',
        description: 'Open-air musical arena with low bolster seating, brass fire brazier warmth, and an elevated dance platform.',
        recommendedGuestCount: '400 – 850 Guests',
        features: ['Under-the-stars illuminated dance floor', 'Outdoor cocktail gazebos', 'Live charcoal gastronomy grills'],
      },
      reception: {
        name: 'Palace Garden Soirée',
        description: 'Cocktail stations set amid illuminated water fountains, fairy-lit cypress trees, and champagne lounges.',
        recommendedGuestCount: '400 – 900 Guests',
        features: ['Reflecting pool lounge pods', 'Perimeter acoustic orchestration', 'Valet departure courtyard'],
      },
      banquet: {
        name: 'Alfresco Moonlight Banquet',
        description: 'Romantic open-air dining under glowing lanterns and floral canopies with royal Nawabi and Awadhi feasts.',
        recommendedGuestCount: '250 – 600 Guests',
        features: ['Festoon-canopied dining rows', 'Live tandoor and artisanal bread stations', 'Attentive butler service'],
      },
    },
    lightingOptions: [
      { ambient: 'Fairy Starlight', description: 'Thousands of micro-LEDs creating a warm starfield canopy.' },
      { ambient: 'Royal Candlelight', description: 'Traditional brass oil lamps and hurricane lanterns across stone balustrades.' },
    ],
    palette: 'Midnight Emerald & Warm Ivory',
    gradientTheme: 'from-[#211414] via-[#350606] to-[#120505]',
  },
  {
    id: 'royal-baithak',
    name: 'The Royal Baithak & Suites',
    subtitle: 'Intimate Ceremonial Chambers',
    type: 'hybrid',
    areaSqFt: 7500,
    minCapacity: 50,
    maxCapacity: 250,
    description:
      'A collection of intimate royal reception salons featuring hand-painted gold leaf frescoes, silk zardozi wall tapestries, and private veranda gardens for sacred familial rituals.',
    architecturalHighlights: [
      'Restored gold-leaf fresco ceilings',
      'Hand-woven antique Persian carpets',
      'Private bridal preparation suites with marble steam baths',
      'Secluded garden terrace for confidential family ceremonies',
    ],
    setups: {
      mandap: {
        name: 'Intimate Vedic Mandap',
        description: 'Sacred ceremonies for close family in a fragrant sanctuary of marigold and sandalwood.',
        recommendedGuestCount: '60 – 180 Guests',
        features: ['Pure silver ritual vessels', 'Traditional low gaddi seating', 'Custom incense diffuser choreography'],
      },
      sangeet: {
        name: 'Intimate Sangeet & Mehendi',
        description: 'Colorful mehendi cabanas, sitar and tabla alcoves, and private celebratory cocktails.',
        recommendedGuestCount: '80 – 200 Guests',
        features: ['Couture mehendi daybeds', 'Live bangle artisan pavilions', 'Bespoke herbal refreshment bar'],
      },
      reception: {
        name: 'Private Dignitary Salon',
        description: 'Executive family dining, private toasts, and bespoke celebrations away from the main gathering.',
        recommendedGuestCount: '50 – 150 Guests',
        features: ['Private sommelier service', 'Bespoke acoustic privacy', 'Dedicated security access'],
      },
      banquet: {
        name: 'Heritage Family Feast',
        description: 'Exclusive multi-course tasting menus prepared by visiting Michelin and royal culinary masters.',
        recommendedGuestCount: '50 – 120 Guests',
        features: ['Customized heirloom menus', 'Antique silver thali service', 'Rare single-estate tea pairing'],
      },
    },
    lightingOptions: [
      { ambient: 'Warm Sandalwood Glow', description: 'Diffused amber lanterns casting delicate shadows through jaali screens.' },
    ],
    palette: 'Burgundy Crimson & Warm Ivory',
    gradientTheme: 'from-[#420B0B] via-[#2A0505] to-[#1A0303]',
  },
];

export type GalleryCategory = 'all' | 'architecture' | 'mandap' | 'lighting' | 'gastronomy' | 'scenography';

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
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'The Golden Durbar Archway',
    category: 'architecture',
    categoryLabel: 'Architecture & Spaces',
    setting: 'The Grand Durbar Hall',
    description: 'Carved sandstone arches illuminated by custom warm halogen uplighting and 18 bohemian crystal chandeliers.',
    palette: 'Champagne Gold & Deep Burgundy',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-4/3',
    quote: '“Monumental proportions echoing timeless Indian royal heritage.”',
    gradientTheme: 'from-[#350606] via-[#570D0D] to-[#210404]',
  },
  {
    id: 'gal-2',
    title: 'The Celestial Lotus Island Mandap',
    category: 'mandap',
    categoryLabel: 'Sacred Mandaps',
    setting: 'The Celestial Courtyard Lotus Pool',
    description: 'An elevated marble sacred altar floating over reflecting water with 50,000 white rajnigandha and golden marigolds.',
    palette: 'Ivory White, Marigold & Emerald',
    accent: '#C8A66A',
    aspectRatio: 'aspect-16/9',
    quote: '“A sanctum for sacred vows suspended between water and starlight.”',
    gradientTheme: 'from-[#211414] via-[#420B0B] to-[#120505]',
  },
  {
    id: 'gal-3',
    title: 'Evening Jaali Screen Illumination',
    category: 'lighting',
    categoryLabel: 'Evening Illuminations',
    setting: 'Perimeter Palace Colonnade',
    description: 'Intricately hand-chiseled jaali screens casting geometric lace shadows across polished Italian marble pathways.',
    palette: 'Warm Amber & Shadowed Wine',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-4/3',
    quote: '“Soft warm shadows transforming architecture into living poetry.”',
    gradientTheme: 'from-[#4F0F0F] via-[#2A0505] to-[#180303]',
  },
  {
    id: 'gal-4',
    title: 'Royal Dastarkhwan Banquet Table',
    category: 'gastronomy',
    categoryLabel: 'Royal Gastronomy',
    setting: 'Private Imperial Dining Rotunda',
    description: 'Hand-hammered silver candelabras, customized gilded bone china, and heirloom Indian spice tastings.',
    palette: 'Antique Silver, Gold & Deep Maroon',
    accent: '#C8A66A',
    aspectRatio: 'aspect-4/3',
    quote: '“An unhurried sensory feast honoring traditional culinary masters.”',
    gradientTheme: 'from-[#350606] via-[#420B0B] to-[#200404]',
  },
  {
    id: 'gal-5',
    title: 'Sangeet Symphony Stage Scenography',
    category: 'scenography',
    categoryLabel: 'Bespoke Scenography',
    setting: 'The Grand Durbar Arena',
    description: 'Sculptural brass ribbons and acoustic sound baffles creating a breathtaking visual theater for live musical recitals.',
    palette: 'Champagne Gold & Midnight Burgundy',
    accent: '#E9D3B0',
    aspectRatio: 'aspect-16/9',
    quote: '“Where modern entertainment technology dissolves into palace grace.”',
    gradientTheme: 'from-[#2C0606] via-[#570D0D] to-[#1C0404]',
  },
  {
    id: 'gal-6',
    title: 'The Starlit Fairy Canopy Courtyard',
    category: 'lighting',
    categoryLabel: 'Evening Illuminations',
    setting: 'The Celestial Courtyard',
    description: 'Overhead celestial mesh with 10,000 warm amber micro-lights illuminating evening wedding receptions.',
    palette: 'Warm Ivory & Midnight Velvet',
    accent: '#C8A66A',
    aspectRatio: 'aspect-4/3',
    quote: '“Dining beneath a starlit canopy that feels infinitely open.”',
    gradientTheme: 'from-[#1E0404] via-[#350606] to-[#0E0202]',
  },
];

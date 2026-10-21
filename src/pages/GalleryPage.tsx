import React from 'react';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { Sparkles, Camera } from 'lucide-react';

interface GalleryPageProps {
  onOpenEnquiry: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-20 sm:pt-24 bg-burgundy-texture text-[#F7F0E6]">
      {/* Header */}
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2 sm:mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
          <span>PORTFOLIO &amp; EVENT GALLERY</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9] mb-3 sm:mb-4">
          Celebrations of <span className="gold-text-shimmer italic font-normal font-serif">Visual Grandeur</span>
        </h1>
        <p className="text-xs sm:text-base text-[#C9B8A5] font-light max-w-2xl mx-auto leading-relaxed px-2">
          Explore photography and stage aesthetics across weddings, engagements, private birthdays, corporate conclaves, cultural mahotsavas, and live concerts.
        </p>
      </div>

      <GalleryGrid onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
};

import React from 'react';
import { CelebrationsSection } from '../components/celebrations/CelebrationsSection';
import { CelebrationType } from '../data/celebrationsData';
import { Sparkles } from 'lucide-react';

interface CelebrationsPageProps {
  onSelectCelebration: (celebration: CelebrationType) => void;
}

export const CelebrationsPage: React.FC<CelebrationsPageProps> = ({ onSelectCelebration }) => {
  return (
    <div className="pt-20 sm:pt-24 bg-[#FFFDF9] text-[#211414]">
      {/* Header */}
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#741A18] font-bold mb-2 sm:mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
          <span>EVENTS & TRADITIONS</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.04em] text-[#350606] mb-3 sm:mb-4">
          Celebrations of <span className="italic font-normal font-serif text-[#741A18]">Distinction</span>
        </h1>
        <p className="text-xs sm:text-base text-[#570D0D]/80 font-light max-w-2xl mx-auto leading-relaxed px-2">
          From multi-day Vedic nuptials to grand reception galas and corporate summits, explore our bespoke celebration disciplines.
        </p>
      </div>

      <CelebrationsSection onSelectCelebration={onSelectCelebration} />
    </div>
  );
};

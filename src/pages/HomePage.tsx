import React from 'react';
import { Hero } from '../components/home/Hero';
import { BrandIntroduction } from '../components/home/BrandIntroduction';
import { VenueSpaceExplorer } from '../components/venue/VenueSpaceExplorer';
import { CelebrationsSection } from '../components/celebrations/CelebrationsSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { SignatureAtmosphere } from '../components/home/SignatureAtmosphere';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { EnquiryForm } from '../components/contact/EnquiryForm';
import { CelebrationType } from '../data/celebrationsData';

interface HomePageProps {
  onExploreVenue: () => void;
  onOpenEnquiry: () => void;
  onDiscoverStory: () => void;
  onSelectCelebration: (celebration: CelebrationType) => void;
  onSelectSpaceForEnquiry: (spaceName: string, setupName: string) => void;
  reducedMotion?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onExploreVenue,
  onOpenEnquiry,
  onDiscoverStory,
  onSelectCelebration,
  onSelectSpaceForEnquiry,
  reducedMotion,
}) => {
  return (
    <div>
      {/* Section A: Cinematic Hero */}
      <Hero
        onExploreVenue={onExploreVenue}
        onOpenEnquiry={onOpenEnquiry}
        reducedMotion={reducedMotion}
      />

      {/* Section C: Brand Introduction */}
      <BrandIntroduction onDiscoverStory={onDiscoverStory} />

      {/* Section D: The Venue Experience (Interactive Venue Space Explorer) */}
      <VenueSpaceExplorer onSelectSpaceForEnquiry={onSelectSpaceForEnquiry} />

      {/* Section E: Celebrations and Occasions (All 9 Categories A-I) */}
      <CelebrationsSection onSelectCelebration={onSelectCelebration} />

      {/* Section E2: 6-Step Event Planning Process */}
      <ProcessSection onOpenEnquiry={onOpenEnquiry} />

      {/* Section F: Signature Atmosphere */}
      <SignatureAtmosphere onOpenEnquiry={onOpenEnquiry} />

      {/* Section G: Gallery Archive */}
      <GalleryGrid onOpenEnquiry={onOpenEnquiry} />

      {/* Section H & J: An Invitation to Enquire */}
      <EnquiryForm />
    </div>
  );
};

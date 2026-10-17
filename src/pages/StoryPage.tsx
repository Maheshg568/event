import React from 'react';
import { motion } from 'motion/react';
import { MahotsavaLogo } from '../components/brand/MahotsavaLogo';
import { LeadershipSection } from '../components/brand/LeadershipSection';
import { Sparkles, Crown, Shield, Landmark, Heart, Compass } from 'lucide-react';

interface StoryPageProps {
  onOpenEnquiry: () => void;
  onExploreVenue: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onOpenEnquiry, onExploreVenue }) => {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-burgundy-texture text-[#F7F0E6]">
      {/* Hero Banner */}
      <div className="relative py-10 sm:py-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2 sm:mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
          <span>OUR STORY & PHILOSOPHY</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9] mb-4 sm:mb-6">
          The Architecture of <br />
          <span className="gold-text-shimmer italic font-normal font-serif">Auspicious Moments</span>
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#C9B8A5] font-light max-w-2xl mx-auto leading-relaxed px-2">
          The word <strong className="text-[#FFFDF9]">Mahotsava</strong> originates from the Sanskrit roots for “great celebration.” It is the timeless Indian philosophy that monumental milestones are sacred ceremonies that bind families, honor heritage, and create generational memories.
        </p>
      </div>

      {/* Symbolism Breakdown: The Lotus & Human Silhouette */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-16">
        <div className="rounded-sm border border-[#741A18] bg-[#210404]/90 p-5 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-5 sm:p-8 border border-[#741A18]/50 rounded bg-[#350606]/60">
              <MahotsavaLogo variant="full" size="xl" />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#C8A66A] tracking-widest mt-4 sm:mt-6 uppercase">
                The Sacred Lotus Insignia
              </span>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <h2 className="font-serif text-xl sm:text-3xl font-bold uppercase text-[#FFFDF9] tracking-wide">
                The Sacred Geometry of Our Insignia
              </h2>
              <p className="text-xs sm:text-base text-[#C9B8A5] leading-relaxed font-light">
                At the heart of the Mahotsava Grandeur emblem rests an abstract silhouette in reverent grace, nestled within the blooming petals of a golden lotus. In classical Indian iconography, the lotus blooms untainted across still waters—signifying purity, auspicious prosperity, and spiritual ascension.
              </p>
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#350606] border border-[#C8A66A] flex items-center justify-center text-[#E9D3B0] shrink-0 text-xs font-serif font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider">
                      The Reverent Silhouette
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#C9B8A5] mt-0.5">
                      Represents the sacred patron and guest, honoring the ancient Vedic tradition of <span className="italic text-[#E9D3B0]">Atithi Devo Bhava</span> (The Guest is Sacred).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#350606] border border-[#C8A66A] flex items-center justify-center text-[#E9D3B0] shrink-0 text-xs font-serif font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider">
                      The Symmetrical Blooming Lotus
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#C9B8A5] mt-0.5">
                      Eight balanced petals echoing classical temple geometry and royal palace courtyards, radiating grace, balance, and eternal joy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#350606] border border-[#C8A66A] flex items-center justify-center text-[#E9D3B0] shrink-0 text-xs font-serif font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider">
                      The Burgundy & Champagne Gold Firmament
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#C9B8A5] mt-0.5">
                      Deep burgundy signifies devotion, prosperity, and royal dignity; champagne gold reflects divine illumination and timeless nobility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars of Grandeur (White-Glove Hospitality, Architectural Splendor, Cultural Respect) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-16">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#E9D3B0] block mb-2">
            OUR CORE PILLARS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-[#FFFDF9]">
            The Standards of Royal Hospitality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-5 sm:p-8 rounded-sm bg-[#210404] border border-[#741A18]/60 flex flex-col justify-between">
            <div>
              <Landmark className="w-7 h-7 sm:w-8 sm:h-8 text-[#C8A66A] mb-3 sm:mb-4" />
              <h3 className="font-serif text-lg sm:text-xl font-bold uppercase text-[#FFFDF9] mb-2 sm:mb-3">
                Architectural Integrity
              </h3>
              <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed font-light">
                Every arch, pillar, and jaali screen is crafted by master artisans using authentic sandstone, Italian marble, and hand-painted gold frescoes.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-sm bg-[#210404] border border-[#741A18]/60 flex flex-col justify-between">
            <div>
              <Heart className="w-8 h-8 text-[#C8A66A] mb-4" />
              <h3 className="font-serif text-xl font-bold uppercase text-[#FFFDF9] mb-3">
                Unhurried Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed font-light">
                We believe in total exclusivity. Your celebration receives complete privacy and dedicated attention without intersecting with concurrent events.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-sm bg-[#210404] border border-[#741A18]/60 flex flex-col justify-between">
            <div>
              <Crown className="w-8 h-8 text-[#C8A66A] mb-4" />
              <h3 className="font-serif text-xl font-bold uppercase text-[#FFFDF9] mb-3">
                Master Culinary Arts
              </h3>
              <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed font-light">
                From Awadhi and Mughlai dastarkhwans to refined regional South Indian thalis and contemporary global delicacies, dining is an art form.
              </p>
            </div>
          </div>
        </div>

        {/* Founder & Managing Director Leadership Section */}
        <div className="mt-12 sm:mt-16">
          <LeadershipSection />
        </div>

        {/* Story CTAs */}
        <div className="mt-14 text-center flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreVenue}
            className="px-7 py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] to-[#E9D3B0] cursor-pointer"
          >
            Explore The Venue Spaces
          </button>
          <button
            onClick={onOpenEnquiry}
            className="px-7 py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.2em] font-semibold text-[#FFFDF9] hover:text-[#E9D3B0] border border-[#741A18] bg-[#210404] cursor-pointer"
          >
            Schedule Private Walkthrough
          </button>
        </div>
      </div>
    </div>
  );
};

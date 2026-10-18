import React from 'react';
import { motion } from 'motion/react';
import { MahotsavaLogo } from '../components/brand/MahotsavaLogo';
import { LeadershipSection } from '../components/brand/LeadershipSection';
import { siteConfig } from '../config/siteConfig';
import {
  Sparkles,
  Crown,
  Target,
  Compass,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Handshake,
  MapPin,
} from 'lucide-react';

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
          Where Every Celebration <br />
          <span className="gold-text-shimmer italic font-normal font-serif">Becomes Grandeur</span>
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#C9B8A5] font-light max-w-2xl mx-auto leading-relaxed px-2">
          Headquartered in <strong className="text-[#FFFDF9]">Hubballi–Dharwad</strong>, Mahotsava Grandeur was established with a singular devotion: to transform every celebration into an extraordinary, poetic experience filled with elegance, emotion, and cherished memories.
        </p>

        {/* Region badge */}
        <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A66A]/40 bg-[#210404]/80 text-[11px] font-mono text-[#E9D3B0]">
          <MapPin className="w-3.5 h-3.5 text-[#C8A66A]" />
          <span>Headquarters: Hubballi–Dharwad, Karnataka · Serving North Karnataka & Beyond</span>
        </div>
      </div>

      {/* Symbolism Breakdown: The Lotus & Reverent Silhouette */}
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

      {/* Vision & Mission Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision Card */}
          <div className="p-6 sm:p-10 rounded-sm bg-[#210404] border border-[#C8A66A]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9D3B0]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-sm border border-[#C8A66A] bg-[#350606] flex items-center justify-center text-[#E9D3B0] mb-5 shadow-md">
                <Target className="w-6 h-6 text-[#C8A66A]" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8A66A] block mb-2">
                STRATEGIC HORIZON
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-[#FFFDF9] mb-4">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed font-light">
                {siteConfig.vision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#741A18]/60 text-[11px] font-mono text-[#E9D3B0]/80">
              Karnataka & National Horizon
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-6 sm:p-10 rounded-sm bg-[#210404] border border-[#C8A66A]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9D3B0]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-sm border border-[#C8A66A] bg-[#350606] flex items-center justify-center text-[#E9D3B0] mb-5 shadow-md">
                <Compass className="w-6 h-6 text-[#C8A66A]" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8A66A] block mb-2">
                OPERATIONAL DIRECTIVE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-[#FFFDF9] mb-4">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed font-light">
                {siteConfig.mission}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#741A18]/60 text-[11px] font-mono text-[#E9D3B0]/80">
              Innovative Planning & Bespoke Hospitality
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Values Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-20">
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#E9D3B0] mb-2">
            <Crown className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>GUIDING PRINCIPLES</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase text-[#FFFDF9]">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm text-[#C9B8A5] max-w-xl mx-auto mt-2 font-light">
            Seven uncompromising pillars that guide our creative design, vendor partnerships, and guest hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-sm bg-[#210404] border border-[#741A18] hover:border-[#C8A66A]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full border border-[#C8A66A]/40 bg-[#350606] flex items-center justify-center font-mono text-xs font-bold text-[#E9D3B0]">
                    0{idx + 1}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#C8A66A]/40 group-hover:text-[#C8A66A] transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#FFFDF9] uppercase tracking-wide mb-2 group-hover:text-[#E9D3B0] transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs text-[#C9B8A5] leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            </div>
          ))}

          {/* 8th card: Hubballi-Dharwad Headquarters card */}
          <div className="p-5 sm:p-6 rounded-sm bg-gradient-to-br from-[#350606] to-[#210404] border border-[#C8A66A]/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full border border-[#C8A66A] bg-[#210404] flex items-center justify-center text-[#E9D3B0]">
                  <MapPin className="w-4 h-4 text-[#C8A66A]" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9D3B0]">
                  Karnataka
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FFFDF9] uppercase tracking-wide mb-2">
                Hubballi–Dharwad Roots
              </h3>
              <p className="text-xs text-[#C9B8A5] leading-relaxed font-light">
                Proudly rooted in Hubballi–Dharwad (PIN 580020), delivering grand celebrations across North Karnataka with pan-state expansion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Mahotsava Grandeur Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-20">
        <div className="rounded-sm border border-[#741A18] bg-[#210404] p-6 sm:p-12 lg:p-16 shadow-2xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#E9D3B0] block mb-2">
              THE DISTINCTION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase text-[#FFFDF9]">
              Why Choose Mahotsava Grandeur?
            </h2>
            <p className="text-xs sm:text-base text-[#C9B8A5] max-w-2xl mx-auto mt-2 font-light">
              We combine visionary design with meticulous vendor coordination to take the stress off your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {siteConfig.whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xs bg-[#350606]/70 border border-[#741A18]/60"
              >
                <div className="w-6 h-6 rounded-full bg-[#210404] border border-[#C8A66A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A66A]" />
                </div>
                <p className="text-xs sm:text-sm text-[#F7F0E6] font-light leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Promise Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-16 text-center">
        <div className="p-6 sm:p-10 rounded-sm border border-[#C8A66A]/60 bg-gradient-to-br from-[#350606] via-[#210404] to-[#180303] shadow-2xl relative">
          <Sparkles className="w-6 h-6 text-[#C8A66A] mx-auto mb-3 sm:mb-4" />
          <span className="text-[11px] font-serif uppercase tracking-[0.3em] text-[#E9D3B0] block mb-3 font-semibold">
            OUR SOLEMN BRAND PROMISE
          </span>
          <blockquote className="font-serif italic text-sm sm:text-lg md:text-xl text-[#FFFDF9] leading-relaxed max-w-2xl mx-auto">
            “{siteConfig.brandPromise}”
          </blockquote>
          <div className="w-16 h-[1px] bg-[#C8A66A] mx-auto mt-5 sm:mt-6" />
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
          className="px-7 py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] to-[#E9D3B0] cursor-pointer hover:shadow-lg transition-all"
        >
          Explore Event Disciplines
        </button>
        <button
          onClick={onOpenEnquiry}
          className="px-7 py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.2em] font-semibold text-[#FFFDF9] hover:text-[#E9D3B0] border border-[#741A18] bg-[#210404] cursor-pointer hover:border-[#C8A66A] transition-all"
        >
          Initiate Celebration Enquiry
        </button>
      </div>
    </div>
  );
};

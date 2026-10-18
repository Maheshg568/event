import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Castle } from 'lucide-react';

interface BrandIntroductionProps {
  onDiscoverStory: () => void;
}

export const BrandIntroduction: React.FC<BrandIntroductionProps> = ({ onDiscoverStory }) => {
  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-[#FFFDF9] text-[#211414] overflow-hidden">
      {/* Subtle ivory texture background */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#350606_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Visual Architectural Scenography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#C8A66A]/40 bg-[#350606] shadow-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[360px] sm:min-h-[440px]">
              {/* Palace Arch Silhouette Canvas */}
              <div className="absolute inset-0 bg-burgundy-cloudy pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(233,211,176,0.15),transparent_70%)] pointer-events-none" />

              {/* Top Accent */}
              <div className="relative z-10 flex items-center justify-between text-[#E9D3B0]">
                <span className="font-serif text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                  SANCTUARY OF TRADITION
                </span>
                <Castle className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A66A]" />
              </div>

              {/* Center Arch graphic and poetic quote */}
              <div className="relative z-10 my-auto py-6 sm:py-8 text-center">
                <div className="w-16 h-24 sm:w-20 sm:h-28 mx-auto border-t-2 border-x-2 border-[#C8A66A]/50 rounded-t-full mb-4 sm:mb-6 flex items-center justify-center bg-[#210404]/60 shadow-[0_0_20px_rgba(200,166,106,0.2)]">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#E9D3B0]" />
                </div>
                <blockquote className="font-serif italic text-base sm:text-xl text-[#FFFDF9] leading-relaxed">
                  “Built on the sacred foundations of timeless Indian hospitality and architectural majesty.”
                </blockquote>
              </div>

              {/* Bottom Architectural Footprint */}
              <div className="relative z-10 pt-3 sm:pt-4 border-t border-[#741A18]/50 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#C9B8A5]">
                <span>Heritage Scenography</span>
                <span className="text-[#E9D3B0]">Hubballi–Dharwad, Karnataka</span>
              </div>
            </div>

            {/* Corner Decorative Accent Frame */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-[#C8A66A] pointer-events-none" />
          </div>

          {/* Right Column: Editorial Narrative (Ivory Surface with Burgundy Text) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#741A18] font-bold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
              <span>THE ART OF CELEBRATION</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.03em] text-[#350606] leading-tight text-balance">
              An Atmosphere Beyond <br />
              <span className="italic font-normal font-serif text-[#741A18]">The Ordinary</span>
            </h2>

            {/* Gold separator */}
            <div className="w-16 sm:w-20 h-[1.5px] bg-[#C8A66A] my-4 sm:my-6" />

            <p className="text-sm sm:text-base md:text-lg text-[#570D0D]/90 font-light leading-relaxed mb-4 sm:mb-6">
              Some occasions deserve more than a beautiful setting. They deserve an atmosphere that brings people together, celebrates meaningful traditions, and turns important moments into lasting memories.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#570D0D]/80 leading-relaxed font-light mb-6 sm:mb-8">
              At Mahotsava Grandeur, every archway, courtyard fountain, and ceremonial hall was conceived to honor the sacred spirit of celebration. With unhurried bespoke service, royal culinary mastery, and world-class acoustic design, we provide a haven where your family’s most cherished celebrations unfold effortlessly.
            </p>

            {/* Editorial Features with Clean Typographic Separators (Zero-Pill Compliance) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-serif uppercase tracking-wider text-[#350606] mb-6 sm:mb-8 pt-4 border-t border-[#E9D3B0] w-full">
              <span className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#C8A66A]" />
                Unrestricted Exclusivity
              </span>
              <span aria-hidden="true" className="text-[#C8A66A] hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 font-semibold">
                <HeartHandshake className="w-4 h-4 text-[#C8A66A]" />
                Dedicated Royal Butler Host
              </span>
              <span aria-hidden="true" className="text-[#C8A66A] hidden sm:inline">·</span>
              <span className="font-semibold">
                Custom Ceremonial Scenography
              </span>
            </div>

            {/* Discover Our Story Action */}
            <button
              onClick={onDiscoverStory}
              className="inline-flex items-center gap-2.5 text-xs font-serif uppercase tracking-[0.2em] sm:tracking-[0.22em] font-bold text-[#570D0D] hover:text-[#C8A66A] transition-colors group cursor-pointer py-1"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

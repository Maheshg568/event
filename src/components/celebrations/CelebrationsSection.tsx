import React from 'react';
import { motion } from 'motion/react';
import { CELEBRATION_TYPES, CelebrationType } from '../../data/celebrationsData';
import { Sparkles, ArrowRight, Clock, MapPin, Check } from 'lucide-react';

interface CelebrationsSectionProps {
  onSelectCelebration: (celebration: CelebrationType) => void;
}

export const CelebrationsSection: React.FC<CelebrationsSectionProps> = ({
  onSelectCelebration,
}) => {
  return (
    <section id="celebrations" className="relative py-14 sm:py-20 lg:py-28 bg-[#FFFDF9] text-[#211414] overflow-hidden">
      {/* Subtle ivory texture background */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#350606_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#741A18] font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>CELEBRATIONS & OCCASIONS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.04em] text-[#350606]">
            Honoring Meaningful <span className="italic font-normal font-serif text-[#741A18]">Milestones</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-[#570D0D]/80 font-light max-w-xl mx-auto">
            From sacred multi-day wedding ceremonies to grand musical sangeets and sovereign galas, discover bespoke event architecture tailored to your occasion.
          </p>
        </div>

        {/* Editorial Tiles Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CELEBRATION_TYPES.map((cel) => (
            <motion.div
              key={cel.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-sm overflow-hidden border border-[#C8A66A]/30 bg-[#350606] text-[#F7F0E6] shadow-xl flex flex-col justify-between"
            >
              {/* Background Art Canvas with Slow Scale */}
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <div
                  className={`w-full h-full bg-gradient-to-br ${cel.themeGradient} transition-transform duration-700 ease-out group-hover:scale-105 p-5 sm:p-6 flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-serif uppercase tracking-[0.22em] text-[#E9D3B0] bg-[#210404]/80 px-2.5 py-1 rounded-xs border border-[#C8A66A]/30">
                      {cel.duration}
                    </span>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cel.accent }} />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C8A66A] block mb-1">
                      {cel.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFDF9] tracking-wide">
                      {cel.title}
                    </h3>
                  </div>
                </div>

                {/* Subtle dark gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#210404] via-transparent to-transparent opacity-80" />
              </div>

              {/* Tile Content */}
              <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 bg-[#210404]/95">
                <div>
                  <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed mb-5 font-light">
                    {cel.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5 pt-3.5 border-t border-[#741A18]/50">
                    {cel.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F7F0E6]">
                        <Check className="w-3.5 h-3.5 text-[#C8A66A] shrink-0 mt-0.5" />
                        <span className="leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#C8A66A] mb-5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-serif italic">{cel.idealSetting}</span>
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => onSelectCelebration(cel)}
                  className="w-full py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold text-[#FFFDF9] hover:text-[#210404] border border-[#741A18] hover:border-[#C8A66A] bg-[#350606] hover:bg-gradient-to-r hover:from-[#C8A66A] hover:to-[#E9D3B0] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Plan This Occasion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

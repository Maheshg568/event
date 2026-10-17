import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PACKAGES_DATA } from '../data/mockData';
import { PackageItem } from '../types';
import { Sparkles, Check, Crown, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/motionVariants';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section id="packages" ref={sectionRef} className="relative py-28 bg-[#07080b] text-[#e5e7eb] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4af37]/4 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif tracking-[0.25em] uppercase text-[#d4af37] mb-2">
            <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>INVESTMENT TIERS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.04em] uppercase text-[#fdfbf7]">
            CURATED <span className="gold-gradient-text">COLLECTIONS</span>
          </h2>
          <p className="mt-4 text-[#9ca3af] text-sm sm:text-base font-light max-w-xl mx-auto">
            Transparent starting frameworks for monumental productions. Each commission is customized to the sovereign nature of the venue.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {PACKAGES_DATA.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeUp}
              className={`relative rounded-sm flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 p-8 sm:p-9 ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#13151f] to-[#0c0e15] border-2 border-[#d4af37]/80 shadow-[0_15px_40px_-5px_rgba(212,175,55,0.18)] hover:shadow-[0_20px_50px_-5px_rgba(212,175,55,0.3)]'
                  : 'bg-[#0d0f16]/90 border border-[#232635] hover:border-[#d4af37]/50 hover:bg-[#11131c] shadow-lg'
              }`}
            >
              {/* Animated MOST POPULAR badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="relative px-3.5 py-1 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fae6a6] to-[#d4af37] text-[#090a0d] text-[10px] font-serif tracking-[0.2em] font-bold uppercase shadow-[0_0_15px_rgba(212,175,55,0.6)] flex items-center gap-1.5 animate-pulse">
                    <Sparkles className="w-3 h-3 text-[#090a0d]" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#fbf7ee]">
                    {pkg.title}
                  </h3>
                </div>

                <p className="text-xs text-[#9ca3af] min-h-[36px] leading-relaxed">
                  {pkg.subtitle}
                </p>

                {/* Price Display */}
                <div className="mt-6 mb-6 pb-6 border-b border-[#212433]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block mb-1">
                    Curation Commences At
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#fbf7ee] tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#6b7280] font-mono mt-1 block">
                    {pkg.idealFor}
                  </span>
                </div>

                {/* Deliverables */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-serif uppercase tracking-wider text-[#d4af37] font-semibold block">
                    Signature Inclusions:
                  </span>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#cbd5e1]">
                      <div className="mt-0.5 rounded-full p-0.5 bg-[#d4af37]/15 text-[#d4af37] shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPackage(pkg)}
                className={`w-full py-3.5 text-xs font-serif tracking-[0.18em] uppercase font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#fae6a6] to-[#d4af37] text-[#090a0d] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] active:scale-95'
                    : 'border border-[#383c4e] hover:border-[#d4af37] text-[#fbf7ee] hover:text-[#d4af37] bg-[#141620] hover:bg-[#1a1d2b] active:scale-95'
                }`}
              >
                <span>Select This Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

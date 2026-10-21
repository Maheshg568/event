import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CELEBRATION_TYPES,
  CelebrationType,
  SERVICES_CUSTOMISATION_NOTE,
} from '../../data/celebrationsData';
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Check,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from 'lucide-react';

interface CelebrationsSectionProps {
  onSelectCelebration: (celebration: CelebrationType) => void;
}

type FilterGroup =
  | 'all'
  | 'weddings'
  | 'social'
  | 'corporate'
  | 'entertainment';

export const CelebrationsSection: React.FC<CelebrationsSectionProps> = ({
  onSelectCelebration,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterGroup>('all');
  const [expandedCards, setExpandedCards] = useState<{ [id: string]: boolean }>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filterTabs: { id: FilterGroup; label: string; count: number }[] = [
    { id: 'all', label: 'All Services', count: 9 },
    { id: 'weddings', label: 'Weddings & Pre-Weddings', count: 2 },
    { id: 'social', label: 'Birthdays & Social', count: 2 },
    { id: 'corporate', label: 'Corporate & Cultural', count: 2 },
    { id: 'entertainment', label: 'Concerts & Production', count: 3 },
  ];

  const filteredServices = CELEBRATION_TYPES.filter((cel) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'weddings') return ['A', 'B'].includes(cel.categoryLetter);
    if (activeFilter === 'social') return ['C', 'I'].includes(cel.categoryLetter);
    if (activeFilter === 'corporate') return ['D', 'E'].includes(cel.categoryLetter);
    if (activeFilter === 'entertainment') return ['F', 'G', 'H'].includes(cel.categoryLetter);
    return true;
  });

  return (
    <section
      id="celebrations"
      className="relative py-14 sm:py-20 lg:py-28 bg-[#FFFDF9] text-[#211414] overflow-hidden"
    >
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#350606_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#741A18] font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>ALL EVENT MANAGEMENT SERVICES</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.04em] text-[#350606]">
            Every Celebration <br />
            <span className="italic font-normal font-serif text-[#741A18]">Planned To Perfection</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-[#570D0D]/80 font-light max-w-2xl mx-auto leading-relaxed">
            From intimate private birthdays and sacred Vedic weddings to large-scale cultural mahotsavas, live concerts, and corporate summits.
          </p>

          {/* Prominent Customisation Note Banner */}
          <div className="mt-6 p-4 sm:p-5 rounded-sm bg-[#350606] border border-[#C8A66A] shadow-lg text-center text-[#F7F0E6] max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-serif uppercase tracking-wider text-[#E9D3B0] font-semibold mb-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8A66A]" />
              <span>Tailored To Your Vision</span>
            </div>
            <p className="text-xs sm:text-sm text-[#FFFDF9] font-light leading-relaxed">
              ✨ <strong>Customised Service Guarantee:</strong> {SERVICES_CUSTOMISATION_NOTE}
            </p>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="overflow-x-auto no-scrollbar flex items-center gap-1.5 p-1 rounded-xs bg-[#210404] border border-[#741A18]/60 max-w-full">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-xs text-[11px] sm:text-xs font-serif uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#210404] font-bold bg-gradient-to-r from-[#C8A66A] to-[#E9D3B0] shadow-sm'
                      : 'text-[#C9B8A5] hover:text-[#FFFDF9]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="ml-1.5 opacity-70 text-[10px]">({tab.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 9 Services Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((cel) => {
              const isExpanded = !!expandedCards[cel.id];
              return (
                <motion.div
                  key={cel.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-sm overflow-hidden border border-[#C8A66A]/40 bg-[#350606] text-[#F7F0E6] shadow-xl flex flex-col justify-between hover:border-[#C8A66A] transition-colors"
                >
                  {/* Card Header & Backdrop */}
                  <div className="relative p-5 sm:p-6 bg-[#260505] border-b border-[#741A18]/60">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#210404] font-bold bg-gradient-to-r from-[#C8A66A] to-[#E9D3B0] px-2.5 py-0.5 rounded-xs">
                        Category {cel.categoryLetter}
                      </span>
                      <span className="text-[10px] font-serif uppercase tracking-widest text-[#E9D3B0]/80">
                        {cel.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFDF9] tracking-wide mb-1 leading-snug">
                      {cel.title}
                    </h3>
                    <span className="text-xs font-mono text-[#C8A66A] block">
                      {cel.subtitle}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#210404]/95">
                    <div>
                      <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed mb-4 font-light">
                        {cel.description}
                      </p>

                      {/* Sub-services itemized list */}
                      <div className="pt-3 border-t border-[#741A18]/60 mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9D3B0] block mb-2 font-semibold">
                          Included Services &amp; Capabilities:
                        </span>
                        <div className="space-y-1.5">
                          {(isExpanded ? cel.subServices : cel.subServices.slice(0, 4)).map(
                            (service, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-start gap-2 text-xs text-[#F7F0E6]"
                              >
                                <Check className="w-3.5 h-3.5 text-[#C8A66A] shrink-0 mt-0.5" />
                                <span className="leading-tight font-light">{service}</span>
                              </div>
                            )
                          )}
                        </div>

                        {cel.subServices.length > 4 && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(cel.id)}
                            className="mt-2.5 text-[11px] font-mono text-[#C8A66A] hover:text-[#FFFDF9] flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            {isExpanded ? (
                              <>
                                <span>Show Fewer Items</span>
                                <ChevronUp className="w-3 h-3" />
                              </>
                            ) : (
                              <>
                                <span>+ View All {cel.subServices.length} Services</span>
                                <ChevronDown className="w-3 h-3" />
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Ideal setting */}
                      <div className="flex items-center gap-1.5 text-xs text-[#C8A66A] mb-5 pt-2 border-t border-[#741A18]/40">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-serif italic truncate">{cel.idealSetting}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => onSelectCelebration(cel)}
                      className="w-full py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] hover:shadow-[0_6px_25px_rgba(200,166,106,0.35)] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Enquire For This Event</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Banner reiterating Customisation */}
        <div className="mt-12 text-center text-xs text-[#570D0D]/80">
          <p>
            Have a unique celebration in mind?{' '}
            <strong className="text-[#350606]">
              All packages and services can be fully customized
            </strong>{' '}
            to match your scale, location, traditions, and budget.
          </p>
        </div>
      </div>
    </section>
  );
};

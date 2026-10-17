import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VENUE_SPACES, SetupType, VenueSpace } from '../../data/venueData';
import {
  Users,
  Maximize2,
  Sparkles,
  Sun,
  Moon,
  Lamp,
  CheckCircle2,
  ArrowRight,
  Filter,
  Check,
} from 'lucide-react';

interface VenueSpaceExplorerProps {
  onSelectSpaceForEnquiry: (spaceName: string, setupName: string) => void;
}

export const VenueSpaceExplorer: React.FC<VenueSpaceExplorerProps> = ({
  onSelectSpaceForEnquiry,
}) => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>(VENUE_SPACES[0].id);
  const [selectedSetup, setSelectedSetup] = useState<SetupType>('mandap');
  const [guestCountFilter, setGuestCountFilter] = useState<number>(500);
  const [lightingMode, setLightingMode] = useState<number>(0);

  const currentSpace = VENUE_SPACES.find((s) => s.id === selectedSpaceId) || VENUE_SPACES[0];
  const currentSetupData = currentSpace.setups[selectedSetup];

  const setupOptions: { key: SetupType; label: string }[] = [
    { key: 'mandap', label: 'Vedic Mandap' },
    { key: 'sangeet', label: 'Sangeet Stage' },
    { key: 'reception', label: 'Grand Reception' },
    { key: 'banquet', label: 'Royal Banquet' },
  ];

  return (
    <section id="venue" className="relative py-14 sm:py-20 lg:py-28 bg-burgundy-texture text-[#F7F0E6] overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#E9D3B0]/6 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>INTERACTIVE VENUE EXPLORER</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9]">
            Sanctuaries of <span className="gold-text-shimmer italic font-normal font-serif">Grandeur</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-[#C9B8A5] font-light max-w-xl mx-auto">
            Explore our monumental halls, starlit courtyards, and ceremonial salons. Toggle setups and guest capacities to visualize your occasion.
          </p>
        </div>

        {/* Interactive Controls Bar: Capacity Slider & Setup Selector */}
        <div className="p-4 sm:p-6 rounded-sm bg-[#210404]/85 border border-[#741A18]/60 backdrop-blur-md mb-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Guest Capacity Filter Slider */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-serif uppercase tracking-wider text-[#E9D3B0]">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Filter className="w-3.5 h-3.5 text-[#C8A66A]" />
                  Guest Capacity Filter
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#FFFDF9] bg-[#350606] px-2.5 py-0.5 rounded border border-[#C8A66A]/40">
                  {guestCountFilter} Guests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1500"
                step="50"
                value={guestCountFilter}
                onChange={(e) => setGuestCountFilter(Number(e.target.value))}
                className="w-full accent-[#C8A66A] cursor-pointer h-2 bg-[#350606] rounded-lg touch-manipulation"
              />
              <div className="flex justify-between text-[9.5px] sm:text-[10px] font-mono text-[#C9B8A5]">
                <span>50 Guests</span>
                <span>800 Guests</span>
                <span>1,500+ Guests</span>
              </div>
            </div>

            {/* Setup Selector Switcher */}
            <div className="lg:col-span-7 flex flex-col gap-2">
              <span className="text-xs font-serif uppercase tracking-wider text-[#E9D3B0] font-semibold">
                Ceremonial Configuration & Setup:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {setupOptions.map((opt) => {
                  const isActive = selectedSetup === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedSetup(opt.key)}
                      className={`px-2.5 py-2.5 rounded-xs text-[11px] sm:text-xs font-serif uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
                        isActive
                          ? 'bg-gradient-to-r from-[#C8A66A] to-[#E9D3B0] text-[#210404] font-bold shadow-md'
                          : 'bg-[#350606] text-[#C9B8A5] hover:text-[#FFFDF9] hover:bg-[#570D0D] border border-[#741A18]/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Space Selection Tabs - Swipeable with hidden scrollbar on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2.5 mb-6 border-b border-[#741A18]/50 -mx-4 px-4 sm:mx-0 sm:px-0">
          {VENUE_SPACES.map((space) => {
            const isSelected = space.id === selectedSpaceId;
            const canAccommodate = guestCountFilter >= space.minCapacity && guestCountFilter <= space.maxCapacity * 1.25;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`shrink-0 relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-t-xs text-xs sm:text-sm font-serif uppercase tracking-[0.16em] sm:tracking-[0.18em] transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'text-[#FFFDF9] font-bold border-b-2 border-[#C8A66A] bg-[#210404]/90 shadow-sm'
                    : 'text-[#C9B8A5] hover:text-[#E9D3B0] bg-transparent'
                }`}
              >
                <span>{space.name}</span>
                {canAccommodate && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Accommodates your guest count" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Venue Space Showcase Pane */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentSpace.id}-${selectedSetup}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left 7 Columns: Architectural Visual Scenography & Lighting Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-sm overflow-hidden border border-[#C8A66A]/35 bg-[#210404] shadow-2xl relative min-h-[380px] sm:min-h-[460px] p-5 sm:p-8 lg:p-10">
              {/* Palace Architecture Canvas with Dynamic Lighting */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentSpace.gradientTheme} opacity-95 transition-all duration-700 pointer-events-none`}
              />

              {/* Ambient lighting layer */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                style={{
                  background:
                    lightingMode === 0
                      ? 'radial-gradient(circle at 50% 30%, rgba(233,211,176,0.25), transparent 70%)'
                      : lightingMode === 1
                      ? 'radial-gradient(circle at 60% 70%, rgba(116,26,24,0.4), transparent 60%)'
                      : 'radial-gradient(circle at 50% 50%, rgba(200,166,106,0.3), transparent 60%)',
                }}
              />

              {/* Jaali lattice texture */}
              <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#E9D3B0_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

              {/* Top Bar of Space View */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#E9D3B0]">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest bg-[#350606]/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-[#C8A66A]/30">
                    {currentSpace.type === 'indoor' ? 'Indoor Palace Sanctuary' : currentSpace.type === 'outdoor' ? 'Open-Air Amphitheater' : 'Hybrid Pavilions'}
                  </span>
                  <span className="font-mono text-[11px] text-[#C9B8A5]">
                    {currentSpace.areaSqFt.toLocaleString()} Sq. Ft.
                  </span>
                </div>

                {/* Lighting Mode Switcher */}
                <div className="flex items-center gap-1 bg-[#350606]/90 p-1 rounded border border-[#741A18] self-start sm:self-auto">
                  {currentSpace.lightingOptions.map((light, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightingMode(idx)}
                      title={light.ambient}
                      className={`px-2 py-0.5 sm:py-1 rounded text-[9.5px] sm:text-[10px] font-mono tracking-wider transition-colors cursor-pointer ${
                        lightingMode === idx
                          ? 'bg-[#C8A66A] text-[#210404] font-bold shadow-xs'
                          : 'text-[#C9B8A5] hover:text-[#FFFDF9]'
                      }`}
                    >
                      {idx === 0 ? 'Golden' : idx === 1 ? 'Twilight' : 'Starlight'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Center Presentation: Active Setup Title & Architectural Atmosphere */}
              <div className="relative z-10 my-auto py-5 sm:py-8">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A66A] block mb-1">
                  Active Configuration: {currentSetupData.name}
                </span>
                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#FFFDF9] tracking-wide mb-2.5">
                  {currentSpace.name}
                </h3>
                <p className="text-xs sm:text-base text-[#F7F0E6]/90 font-light max-w-xl leading-relaxed">
                  {currentSetupData.description}
                </p>

                {/* Setup Key Features */}
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                  {currentSetupData.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#350606]/80 border border-[#741A18]/60 text-[11px] sm:text-xs text-[#E9D3B0]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A66A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Specs & Lighting Note */}
              <div className="relative z-10 pt-3 sm:pt-4 border-t border-[#741A18]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#C9B8A5]">
                <div className="flex items-center gap-2">
                  <Lamp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C8A66A] shrink-0" />
                  <span className="text-[11px] sm:text-xs">{currentSpace.lightingOptions[lightingMode]?.description}</span>
                </div>
                <div className="font-mono text-[#E9D3B0] font-semibold text-[11px] sm:text-xs">
                  Capacity: {currentSpace.minCapacity} – {currentSpace.maxCapacity} Guests
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Architectural Specs & Booking Concierge Hook */}
            <div className="lg:col-span-5 rounded-sm border border-[#741A18]/60 bg-[#210404]/95 p-5 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold uppercase tracking-wider text-[#FFFDF9] mb-1.5 sm:mb-2">
                  Architectural Specifications
                </h4>
                <p className="text-xs text-[#C9B8A5] leading-relaxed mb-4 sm:mb-6">
                  {currentSpace.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-serif uppercase tracking-[0.2em] text-[#C8A66A] font-semibold block">
                    Venue Inclusions & Features:
                  </span>
                  {currentSpace.architecturalHighlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex items-start gap-2.5 text-xs text-[#F7F0E6]">
                      <div className="w-4 h-4 rounded-full bg-[#350606] border border-[#C8A66A]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#C8A66A]">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Compatibility Assessment */}
                <div className="p-4 rounded-xs bg-[#350606]/80 border border-[#741A18] mb-6">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-serif uppercase tracking-wider text-[#E9D3B0]">
                      Party Fit Analysis:
                    </span>
                    <span className="font-mono font-bold text-[#FFFDF9]">
                      {guestCountFilter} Guests
                    </span>
                  </div>
                  <p className="text-[11px] text-[#C9B8A5]">
                    {guestCountFilter <= currentSpace.maxCapacity && guestCountFilter >= currentSpace.minCapacity
                      ? `Ideal match for ${currentSpace.name}. Excellent space for ceremony, dining, and live orchestrations.`
                      : guestCountFilter < currentSpace.minCapacity
                      ? `Cozy configuration. We recommend partitioning with carved wooden jaali screens.`
                      : `High-density reception layout recommended, or pair with The Celestial Courtyard.`}
                  </p>
                </div>
              </div>

              {/* Action: Enquire for this space */}
              <button
                onClick={() => onSelectSpaceForEnquiry(currentSpace.name, currentSetupData.name)}
                className="w-full py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] hover:shadow-[0_8px_25px_rgba(200,166,106,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve {currentSpace.name}</span>
                <ArrowRight className="w-4 h-4 text-[#210404]" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

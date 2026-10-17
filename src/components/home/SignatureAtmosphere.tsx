import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Crown, ArrowRight } from 'lucide-react';

interface SignatureAtmosphereProps {
  onOpenEnquiry: () => void;
}

export const SignatureAtmosphere: React.FC<SignatureAtmosphereProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#210404] text-[#F7F0E6] overflow-hidden select-none">
      {/* Background Architectural Panorama with Slow Ambient Zoom */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
          className="w-full h-full bg-burgundy-texture"
        />

        {/* Radiant golden light beams imitating the promo video transition */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(circle_at_50%_50%,rgba(233,211,176,0.18)_0%,rgba(200,166,106,0.1)_40%,transparent_75%)] blur-[100px]" />
        
        {/* Lattice overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C8A66A_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#210404] via-transparent to-[#210404]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Central Crown Accent */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C8A66A]/40 flex items-center justify-center bg-[#350606]/80 text-[#E9D3B0] mb-4 sm:mb-6 shadow-[0_0_25px_rgba(200,166,106,0.25)]">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A66A]" />
        </div>

        <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2 sm:mb-3">
          THE SIGNATURE ATMOSPHERE
        </span>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9] leading-tight text-balance">
          Every Detail, <br />
          <span className="gold-text-shimmer italic font-normal font-serif">Thoughtfully Celebrated.</span>
        </h2>

        {/* Gold divider */}
        <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C8A66A] to-transparent my-5 sm:my-7" />

        <p className="max-w-2xl text-xs sm:text-base md:text-lg text-[#C9B8A5] font-light leading-relaxed mb-6 sm:mb-10 text-balance px-2">
          From the subtle scent of fresh Mogra blossoms in the air to the warm, amber glow illuminating hand-carved stone arches as twilight descends—we orchestrate an immersive sensory sanctuary where hospitality feels like royalty and every guest is honored.
        </p>

        {/* Action button */}
        <button
          onClick={onOpenEnquiry}
          className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xs text-xs font-serif uppercase tracking-[0.18em] sm:tracking-[0.22em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] hover:shadow-[0_8px_30px_rgba(200,166,106,0.4)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Experience The Grandeur</span>
          <ArrowRight className="w-4 h-4 text-[#210404]" />
        </button>
      </div>
    </section>
  );
};

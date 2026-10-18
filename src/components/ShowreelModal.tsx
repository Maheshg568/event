import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Volume2, Crown, Play } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl w-full rounded-sm overflow-hidden border border-[#d4af37]/40 bg-[#090b10] shadow-[0_30px_70px_rgba(0,0,0,0.95)] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black border border-[#2b2e3e] transition-all cursor-pointer"
            aria-label="Close Showreel"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Cinematic Cinema Screen Container */}
          <div className="relative aspect-16/9 bg-[#040507] overflow-hidden flex items-center justify-center">
            {/* Ambient Animated Stage Canvas */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,#3d2810_0%,#15120c_50%,#050608_90%)]" />

            {/* Glowing Golden Stage Beams & Lattice */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#d4af37_1px,transparent_1px)] [background-size:24px_24px] animate-pulse" />

            {/* Simulated Live Film Reel Atmosphere */}
            <div className="relative z-10 text-center p-8 max-w-xl flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#18150f]/80 shadow-[0_0_25px_rgba(212,175,55,0.4)] mb-6 animate-pulse">
                <Crown className="w-8 h-8 text-[#d4af37]" />
              </div>

              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37] mb-2">
                MAHOTSAVA GRANDEUR 2026
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-wider text-[#fbf7ee]">
                THE ARCHITECTURE OF CELEBRATION
              </h3>
              <p className="mt-3 text-sm text-[#cbd5e1] font-serif italic">
                A cinematic retrospective spanning royal weddings, cultural mahotsavas, and prestigious summits across Karnataka.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="px-6 py-3 text-xs font-serif tracking-[0.18em] uppercase font-bold text-[#090a0d] bg-gradient-to-r from-[#d4af37] to-[#fae6a6] rounded-sm cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                >
                  Commission Mahotsava Grandeur
                </button>
              </div>
            </div>

            {/* Cinema Scrim */}
            <div className="absolute inset-0 pointer-events-none border-4 border-[#07080b]" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

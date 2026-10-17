import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MahotsavaLogo } from '../brand/MahotsavaLogo';

interface CinematicOpeningProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

export const CinematicOpening: React.FC<CinematicOpeningProps> = ({
  onComplete,
  reducedMotion = false,
}) => {
  // Phases:
  // 1. 'venue': warm illuminated architectural arches & soft focus
  // 2. 'golden-flare': radiant golden light fills the frame
  // 3. 'burgundy-reveal': transitions to textured deep burgundy
  // 4. 'logo-entrance': gold lotus emblem and wordmark smoothly revealed
  // 5. 'complete': fade out and reveal main site
  const [phase, setPhase] = useState<'venue' | 'golden-flare' | 'burgundy-reveal' | 'logo-entrance' | 'complete'>('venue');

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase('golden-flare'), 450);
    const t2 = setTimeout(() => setPhase('burgundy-reveal'), 900);
    const t3 = setTimeout(() => setPhase('logo-entrance'), 1300);
    const t4 = setTimeout(() => {
      setPhase('complete');
      setTimeout(onComplete, 500);
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete, reducedMotion]);

  if (phase === 'complete') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#210404] overflow-hidden select-none"
      >
        {/* Phase 1: Venue Opening Atmosphere (warm illuminated architectural arches & soft focus) */}
        <motion.div
          animate={{
            opacity: phase === 'venue' ? 1 : phase === 'golden-flare' ? 0.8 : 0,
            scale: phase === 'venue' ? 1.02 : 1.08,
          }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Architectural palace arches with warm golden illumination */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_35%,#741A18_0%,#350606_50%,#210404_100%)]" />

          {/* Golden chandelier and warm arch light sources */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-[#E9D3B0]/18 blur-[90px]" />
          <div className="absolute top-[35%] left-[25%] w-[320px] h-[320px] rounded-full bg-[#C8A66A]/15 blur-[80px]" />
          <div className="absolute top-[35%] right-[25%] w-[320px] h-[320px] rounded-full bg-[#C8A66A]/15 blur-[80px]" />

          {/* Jaali Archway Outline silhouettes */}
          <div className="absolute inset-x-0 bottom-0 top-[20%] opacity-20 bg-[radial-gradient(#E9D3B0_1.5px,transparent_1.5px)] [background-size:28px_28px]" />
        </motion.div>

        {/* Phase 2: Radiant Golden Transition (Golden light flooding the frame) */}
        <motion.div
          animate={{
            opacity: phase === 'golden-flare' ? 0.85 : 0,
            scale: phase === 'golden-flare' ? 1.15 : 0.95,
          }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#FFFDF9_0%,#E9D3B0_30%,#C8A66A_60%,transparent_100%)] mix-blend-screen"
        />

        {/* Phase 3 & 4: Deep Burgundy Textured Background & Logo Reveal */}
        <motion.div
          animate={{
            opacity: phase === 'burgundy-reveal' || phase === 'logo-entrance' ? 1 : 0,
          }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-burgundy-cloudy"
        >
          {/* Subtle cloudy textures matching uploaded media */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_40%,rgba(116,26,24,0.6)_0%,rgba(53,6,6,0.9)_70%,#210404_100%)]" />
        </motion.div>

        {/* Logo Entrance & Final Centered Composition */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            animate={{
              opacity: phase === 'logo-entrance' ? 1 : 0,
              y: phase === 'logo-entrance' ? 0 : 25,
              scale: phase === 'logo-entrance' ? 1 : 0.94,
            }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <MahotsavaLogo variant="full" size="xl" />
          </motion.div>

          {/* Thin expanding gold baseline rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: phase === 'logo-entrance' ? 1 : 0,
            }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#C8A66A] to-transparent mt-6"
          />

          {/* Subtitle whisper */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'logo-entrance' ? 0.85 : 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif italic text-xs sm:text-sm text-[#E9D3B0] mt-3 tracking-[0.2em]"
          >
            Where Every Celebration Becomes Grandeur
          </motion.p>
        </div>

        {/* Quick Escape / Skip Button */}
        <button
          onClick={onComplete}
          className="absolute bottom-6 sm:bottom-8 text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#C9B8A5]/80 hover:text-[#E9D3B0] transition-colors py-1.5 px-4 rounded border border-[#741A18]/60 hover:border-[#C8A66A]/60 bg-[#210404]/80 backdrop-blur-sm cursor-pointer z-20"
        >
          Enter Sanctuary
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

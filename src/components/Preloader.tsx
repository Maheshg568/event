import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [stage, setStage] = useState<'fade' | 'line' | 'scale' | 'done'>('fade');

  useEffect(() => {
    // 0 to 100 progress over ~1.3 seconds
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 45);

    const timer1 = setTimeout(() => setStage('line'), 300);
    const timer2 = setTimeout(() => setStage('scale'), 900);
    const timer3 = setTimeout(() => {
      setStage('done');
      setTimeout(onComplete, 400);
    }, 1400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080b] text-[#fbf7ee]"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

          {/* Logo container */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 1.05 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: stage === 'scale' ? 0.96 : 1,
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3 relative z-10"
          >
            <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#13110b]/60 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Crown className="w-6 h-6 text-[#d4af37]" />
            </div>

            <div className="text-center">
              <span className="block font-serif tracking-[0.35em] text-xl md:text-2xl font-bold uppercase gold-gradient-text">
                ROYALAURA
              </span>
              <span className="block text-[11px] tracking-[0.45em] text-[#c7ab67] uppercase font-medium mt-1">
                EVENTS & EXPERIENCES
              </span>
            </div>
          </motion.div>

          {/* Thin gold animated line */}
          <div className="w-48 md:w-64 h-[1px] bg-[#22211d] mt-8 relative overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: Math.min(percent / 100, 1),
              }}
              transition={{ ease: 'easeOut', duration: 0.15 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37] to-[#fae6a6] origin-left shadow-[0_0_8px_#d4af37]"
            />
          </div>

          {/* Loading percentage */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[12px] font-mono tracking-widest text-[#9ca3af] tabular-nums">
              {Math.min(percent, 100)}%
            </span>
          </div>

          {/* Skip button for user convenience */}
          <button
            onClick={onComplete}
            className="absolute bottom-8 text-[11px] uppercase tracking-widest text-[#6b7280] hover:text-[#d4af37] transition-colors py-1 px-3 rounded cursor-pointer"
          >
            Enter Site
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

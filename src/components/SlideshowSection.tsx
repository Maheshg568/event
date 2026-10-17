import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDESHOW_ITEMS } from '../data/mockData';
import { ChevronLeft, ChevronRight, Play, Pause, Compass, Sparkles } from 'lucide-react';

interface SlideshowSectionProps {
  onOpenBooking: () => void;
}

export const SlideshowSection: React.FC<SlideshowSectionProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_ITEMS.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlide = SLIDESHOW_ITEMS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDESHOW_ITEMS.length) % SLIDESHOW_ITEMS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_ITEMS.length);
  };

  return (
    <section id="showcase" className="relative py-24 bg-[#07080b] text-[#fbf7ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif tracking-[0.25em] uppercase text-[#d4af37] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>CINEMATIC SHOWCASE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.04em] uppercase text-[#fdfbf7]">
              ICONIC SANCTUARIES & <span className="gold-gradient-text">CITADELS</span>
            </h2>
          </div>

          {/* Slideshow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full border border-[#2b2e3b] bg-[#12141c] hover:border-[#d4af37] text-[#e5e7eb] hover:text-[#d4af37] transition-all cursor-pointer"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#2b2e3b] bg-[#12141c] hover:border-[#d4af37] text-[#e5e7eb] hover:text-[#d4af37] transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#2b2e3b] bg-[#12141c] hover:border-[#d4af37] text-[#e5e7eb] hover:text-[#d4af37] transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Frame with Ken Burns Zoom & Drift */}
        <div className="relative h-[480px] sm:h-[560px] md:h-[620px] rounded-sm overflow-hidden border border-[#242735] bg-[#0c0d14] shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {/* Ken Burns Animated Layer */}
              <motion.div
                initial={{
                  scale: 1.02,
                  x: currentIndex % 2 === 0 ? -15 : 15,
                  y: 5,
                }}
                animate={{
                  scale: 1.12,
                  x: currentIndex % 2 === 0 ? 15 : -15,
                  y: -5,
                }}
                transition={{ duration: 7, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
              >
                {/* Opulent Atmospheric Gradient Visual Artwork */}
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      currentIndex === 0
                        ? 'radial-gradient(ellipse at 70% 30%, #3a2911 0%, #151412 50%, #07080a 100%)'
                        : currentIndex === 1
                        ? 'radial-gradient(ellipse at 30% 60%, #3e1b08 0%, #17100b 50%, #07080a 100%)'
                        : currentIndex === 2
                        ? 'radial-gradient(ellipse at 50% 20%, #13243d 0%, #0c121e 50%, #07080a 100%)'
                        : 'radial-gradient(ellipse at 60% 70%, #132a21 0%, #0c1512 50%, #07080a 100%)',
                  }}
                />

                {/* Palace architectural graphic lattice overlay */}
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#d4af37_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

                {/* Luminous glow corresponding to venue */}
                <div
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[120px] opacity-40"
                  style={{ backgroundColor: currentSlide.accent }}
                />
              </motion.div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07080b]/80 via-transparent to-transparent" />

              {/* Slide Caption Animation */}
              <div className="absolute inset-0 p-8 sm:p-14 flex flex-col justify-end max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2 mb-3"
                >
                  <Compass className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                    {currentSlide.venue}
                  </span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#fbf7ee] leading-tight"
                >
                  {currentSlide.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-3 text-sm sm:text-base text-[#d1d5db] font-light max-w-lg"
                >
                  {currentSlide.tagline}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 flex items-center gap-4"
                >
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 text-xs font-serif tracking-[0.16em] uppercase font-bold text-[#090a0d] bg-[#d4af37] hover:bg-[#fae6a6] transition-colors rounded-sm cursor-pointer"
                  >
                    Inquire For Venue
                  </button>
                  <span className="text-xs text-[#9ca3af] font-mono">
                    Palette: {currentSlide.theme}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Progress Bars */}
          <div className="absolute bottom-4 right-8 z-20 flex items-center gap-2">
            {SLIDESHOW_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="h-1 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: idx === currentIndex ? '32px' : '10px',
                  backgroundColor: idx === currentIndex ? '#d4af37' : '#393c4a',
                }}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

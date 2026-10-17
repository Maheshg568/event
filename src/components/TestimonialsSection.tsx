import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Quote, Star, ChevronLeft, ChevronRight, Crown } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const current = TESTIMONIALS_DATA[currentIdx];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#090a0e] text-[#fbf7ee] overflow-hidden border-t border-[#1a1c26]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/4 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-serif tracking-[0.25em] uppercase text-[#d4af37] mb-3">
          <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>PATRON ACCREDITATIONS</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.04em] text-[#fdfbf7] mb-12">
          WORDS OF OUR <span className="gold-gradient-text">HONORED GUESTS</span>
        </h2>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] sm:min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction === 1 ? 40 : -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction === 1 ? -40 : 40,
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Gold Quote Icon */}
              <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#13151f] text-[#d4af37] mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <Quote className="w-5 h-5 text-[#d4af37]" />
              </div>

              {/* Quote Body */}
              <p className="font-serif text-lg sm:text-2xl text-[#f3f4f6] font-light italic leading-relaxed max-w-2xl text-balance">
                {current.quote}
              </p>

              {/* Patron Info */}
              <div className="mt-8 flex flex-col items-center">
                <div className="flex items-center gap-1 text-[#d4af37] mb-2">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                  ))}
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold tracking-wider text-[#fbf7ee]">
                  {current.clientName}
                </h4>
                <p className="text-xs text-[#9ca3af] font-mono tracking-wider mt-0.5">
                  {current.role} · {current.location}
                </p>
                <span className="text-[11px] font-mono text-[#d4af37] mt-1">
                  Commission: {current.eventTitle}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls & Animated Dots */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full border border-[#232635] bg-[#11131a] hover:border-[#d4af37] text-[#9ca3af] hover:text-[#d4af37] transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIdx ? 1 : -1);
                  setCurrentIdx(idx);
                }}
                className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: idx === currentIdx ? '28px' : '8px',
                  backgroundColor: idx === currentIdx ? '#d4af37' : '#2b2e3e',
                }}
                aria-label={`Jump to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border border-[#232635] bg-[#11131a] hover:border-[#d4af37] text-[#9ca3af] hover:text-[#d4af37] transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

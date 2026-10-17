import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem, EventCategory } from '../types';
import { Sparkles, MapPin, Users, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: { key: EventCategory; label: string }[] = [
    { key: 'all', label: 'All Celebrations' },
    { key: 'weddings', label: 'Royal Weddings' },
    { key: 'galas', label: 'Executive Galas' },
    { key: 'milestones', label: 'Milestone Soirées' },
    { key: 'retreats', label: 'Destination Conclaves' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  // Lightbox keyboard navigation
  const handleNext = useCallback(() => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  }, [activeLightboxItem, filteredItems]);

  const handlePrev = useCallback(() => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  }, [activeLightboxItem, filteredItems]);

  const handleClose = useCallback(() => {
    setActiveLightboxItem(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightboxItem) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxItem, handleClose, handleNext, handlePrev]);

  return (
    <section id="gallery" className="relative py-28 bg-[#08090c] text-[#e5e7eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif tracking-[0.25em] uppercase text-[#d4af37] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>THE ARCHIVE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.04em] uppercase text-[#fdfbf7]">
              CURATED <span className="gold-gradient-text">PORTFOLIO</span>
            </h2>
          </div>

          {/* Category Filter Tabs with Segmented Clean Style (Permitted per constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-sm bg-[#12141c] border border-[#232635]">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`relative px-3.5 py-1.5 text-xs font-serif uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
                    isActive
                      ? 'text-[#090a0d] font-bold'
                      : 'text-[#9ca3af] hover:text-[#fbf7ee] font-medium'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="categoryActiveBackground"
                      className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f6ecce] rounded-sm -z-0"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid with layout transition */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveLightboxItem(item)}
                data-cursor="view"
                className="group relative rounded-sm overflow-hidden border border-[#232533] bg-[#0e1017] cursor-pointer shadow-lg hover:border-[#d4af37]/60 hover:shadow-[0_15px_35px_-8px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Visual Canvas Container */}
                <div className="relative aspect-4/3 overflow-hidden">
                  {/* Atmospheric Luxury Backdrop artwork */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${item.gradientTheme} transition-transform duration-700 ease-out group-hover:scale-108 flex items-center justify-center p-6`}
                  >
                    {/* Palace architecture ambient elements */}
                    <div className="w-full h-full border border-[#d4af37]/15 rounded-sm flex flex-col justify-between p-5 relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono tracking-widest text-[#d4af37]">
                          {item.categoryLabel}
                        </span>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accentColor }} />
                      </div>

                      <div className="my-auto text-center py-4">
                        <span className="font-serif text-lg md:text-xl font-bold text-[#fbf7ee] block tracking-wide">
                          {item.title}
                        </span>
                        <span className="text-xs text-[#9ca3af] font-mono mt-1 block">
                          {item.location}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-[#6b7280]">
                        <span>{item.guestCount}</span>
                        <span className="text-[#d4af37] font-serif uppercase tracking-wider">Explore</span>
                      </div>

                      {/* Golden ambient radial spotlight */}
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${item.accentColor}, transparent 70%)`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Dark Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Hover Actions & Quote Reveal */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                    <p className="text-xs text-[#f5eed6] italic font-serif mb-2">
                      {item.featuredQuote}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-serif tracking-widest uppercase text-[#d4af37] font-semibold">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Gallery & Curation Details →</span>
                    </div>
                  </div>
                </div>

                {/* Card Quiet Bottom Info */}
                <div className="p-5 border-t border-[#1c1f2b] bg-[#0c0d14]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#9ca3af]">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#6b7280]">
                      <Users className="w-3 h-3" />
                      <span>{item.guestCount.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 11. GALLERY LIGHTBOX ANIMATION */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/92 backdrop-blur-xl"
            onClick={handleClose}
          >
            {/* Lightbox Modal Window */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-sm overflow-hidden border border-[#d4af37]/30 bg-[#0c0e15] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#161822]/80 hover:bg-[#d4af37] text-[#e5e7eb] hover:text-[#090a0d] border border-[#2b2e3d] transition-all cursor-pointer"
                aria-label="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#161822]/80 hover:bg-[#d4af37] text-[#e5e7eb] hover:text-[#090a0d] border border-[#2b2e3d] transition-all cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#161822]/80 hover:bg-[#d4af37] text-[#e5e7eb] hover:text-[#090a0d] border border-[#2b2e3d] transition-all cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* High-Impact Visual Art Display */}
              <div className="relative h-[320px] sm:h-[420px] overflow-hidden bg-[#07080b] flex items-center justify-center">
                <div
                  className={`w-full h-full bg-gradient-to-br ${activeLightboxItem.gradientTheme} p-12 flex flex-col items-center justify-center text-center relative`}
                >
                  <div className="max-w-xl p-8 rounded border border-[#d4af37]/30 bg-[#07080c]/80 backdrop-blur-md shadow-2xl">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
                      {activeLightboxItem.categoryLabel}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#fbf7ee] uppercase tracking-wide">
                      {activeLightboxItem.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#cbd5e1] font-serif italic">
                      {activeLightboxItem.featuredQuote}
                    </p>
                  </div>

                  {/* Luminous glow */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-25"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${activeLightboxItem.accentColor}, transparent 60%)`,
                    }}
                  />
                </div>
              </div>

              {/* Caption & Details Footer */}
              <div className="p-6 sm:p-8 bg-[#0a0c12] border-t border-[#1d202b] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#9ca3af] font-mono mb-1">
                    <span>{activeLightboxItem.location}</span>
                    <span>·</span>
                    <span>{activeLightboxItem.guestCount}</span>
                  </div>
                  <p className="text-sm text-[#9ca3af] max-w-xl">
                    {activeLightboxItem.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    handleClose();
                    onOpenBooking();
                  }}
                  className="px-6 py-3 text-xs font-serif tracking-[0.18em] uppercase font-bold text-[#090a0d] bg-gradient-to-r from-[#d4af37] to-[#fae6a6] rounded-sm whitespace-nowrap cursor-pointer hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all"
                >
                  Request Similar Curation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

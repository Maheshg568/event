import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PHOTOS, GalleryCategory, GalleryPhoto } from '../../data/galleryData';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from 'lucide-react';

interface GalleryGridProps {
  onOpenEnquiry?: () => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: 'All Archives' },
    { key: 'architecture', label: 'Architecture & Spaces' },
    { key: 'mandap', label: 'Sacred Mandaps' },
    { key: 'lighting', label: 'Evening Illumination' },
    { key: 'gastronomy', label: 'Royal Gastronomy' },
    { key: 'scenography', label: 'Bespoke Scenography' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (selectedCategory === 'all') return true;
    return photo.category === selectedCategory;
  });

  const handleNext = useCallback(() => {
    if (!activePhoto) return;
    const currentIdx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIdx = (currentIdx + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIdx]);
  }, [activePhoto, filteredPhotos]);

  const handlePrev = useCallback(() => {
    if (!activePhoto) return;
    const currentIdx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIdx = (currentIdx - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIdx]);
  }, [activePhoto, filteredPhotos]);

  const handleClose = useCallback(() => {
    setActivePhoto(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, handleClose, handleNext, handlePrev]);

  return (
    <section id="gallery" className="relative py-14 sm:py-20 lg:py-28 bg-[#350606] text-[#F7F0E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
              <span>THE VISUAL ARCHIVE</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9]">
              Palace <span className="gold-text-shimmer italic font-normal font-serif">Photography</span>
            </h2>
          </div>

          {/* Category Filter Controls - Smoothly swipeable on mobile */}
          <div className="overflow-x-auto no-scrollbar flex items-center gap-1.5 p-1 rounded-xs bg-[#210404] border border-[#741A18]/60 -mx-4 px-4 sm:mx-0 sm:px-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`shrink-0 relative px-3 sm:px-3.5 py-1.5 rounded-xs text-[11px] sm:text-xs font-serif uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#210404] font-bold bg-gradient-to-r from-[#C8A66A] to-[#E9D3B0] shadow-sm'
                      : 'text-[#C9B8A5] hover:text-[#FFFDF9]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid with Asymmetric Editorial Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActivePhoto(photo)}
                className="group relative rounded-sm overflow-hidden border border-[#741A18]/60 bg-[#210404] cursor-pointer shadow-xl hover:border-[#C8A66A]/60 hover:shadow-[0_15px_35px_rgba(33,4,4,0.8)] transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Visual Artwork Container */}
                <div className={`relative ${photo.aspectRatio} overflow-hidden`}>
                  {/* Atmospheric Luxury Backdrop */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${photo.gradientTheme} transition-transform duration-700 ease-out group-hover:scale-106 p-6 flex flex-col justify-between`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-[#E9D3B0] bg-[#350606]/80 px-2 py-0.5 rounded border border-[#C8A66A]/30">
                        {photo.categoryLabel}
                      </span>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: photo.accent }} />
                    </div>

                    <div className="my-auto py-4 text-center">
                      <span className="font-serif text-lg md:text-xl font-bold text-[#FFFDF9] block tracking-wide">
                        {photo.title}
                      </span>
                      <span className="text-xs text-[#C9B8A5] font-mono mt-1 block">
                        {photo.setting}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#C9B8A5]">
                      <span>{photo.palette}</span>
                      <span className="text-[#E9D3B0] font-serif uppercase tracking-wider flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        Expand
                      </span>
                    </div>
                  </div>

                  {/* Dark hover scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#210404] via-[#210404]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Quote reveal on hover */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <p className="text-xs text-[#E9D3B0] italic font-serif mb-2">
                      {photo.quote}
                    </p>
                    <span className="text-[11px] font-serif uppercase tracking-wider text-[#FFFDF9] font-semibold">
                      View High-Resolution Archival Frame →
                    </span>
                  </div>
                </div>

                {/* Quiet Bottom Strip */}
                <div className="p-4 bg-[#210404] border-t border-[#741A18]/50 flex items-center justify-between text-xs text-[#C9B8A5]">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A66A] shrink-0" />
                    <span className="truncate">{photo.setting}</span>
                  </div>
                  <Maximize2 className="w-3.5 h-3.5 text-[#C8A66A] shrink-0 ml-2" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/92 backdrop-blur-2xl"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-sm overflow-hidden border border-[#C8A66A]/40 bg-[#210404] shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-20 p-2 sm:p-2.5 rounded-full bg-[#350606]/90 hover:bg-[#C8A66A] text-[#FFFDF9] hover:text-[#210404] border border-[#741A18] transition-all cursor-pointer"
                aria-label="Close Lightbox (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#350606]/90 hover:bg-[#C8A66A] text-[#FFFDF9] hover:text-[#210404] border border-[#741A18] transition-all cursor-pointer"
                aria-label="Previous Archival Photo (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#350606]/90 hover:bg-[#C8A66A] text-[#FFFDF9] hover:text-[#210404] border border-[#741A18] transition-all cursor-pointer"
                aria-label="Next Archival Photo (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Image / Scenography Canvas */}
              <div className="relative h-[250px] sm:h-[420px] overflow-hidden bg-[#180303] flex items-center justify-center p-4 sm:p-8">
                <div
                  className={`w-full h-full bg-gradient-to-br ${activePhoto.gradientTheme} p-4 sm:p-8 flex flex-col items-center justify-center text-center relative rounded border border-[#C8A66A]/30`}
                >
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A66A] mb-1 sm:mb-2">
                    {activePhoto.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg sm:text-3xl md:text-4xl font-bold text-[#FFFDF9] uppercase tracking-wide">
                    {activePhoto.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm text-[#E9D3B0] font-serif italic max-w-lg px-2">
                    {activePhoto.quote}
                  </p>
                </div>
              </div>

              {/* Lightbox Caption & Details Footer */}
              <div className="p-4 sm:p-8 bg-[#1B0303] border-t border-[#741A18] flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#C9B8A5] font-mono mb-1">
                    <span>{activePhoto.setting}</span>
                    <span>·</span>
                    <span>Palette: {activePhoto.palette}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F7F0E6]/90 max-w-xl">
                    {activePhoto.description}
                  </p>
                </div>

                {onOpenEnquiry && (
                  <button
                    onClick={() => {
                      handleClose();
                      onOpenEnquiry();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xs text-xs font-serif uppercase tracking-[0.18em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] to-[#E9D3B0] whitespace-nowrap cursor-pointer hover:shadow-lg transition-all text-center"
                  >
                    Inquire For This Setting
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

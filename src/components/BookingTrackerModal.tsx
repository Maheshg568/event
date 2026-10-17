import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking, BookingStatus } from '../types';
import { X, Search, Check, Clock, Calendar, Sparkles, MapPin, User, ShieldCheck } from 'lucide-react';

interface BookingTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  selectedBookingId?: string;
}

const STATUS_STEPS: { key: BookingStatus; label: string; desc: string }[] = [
  { key: 'received', label: 'Booking Received', desc: 'Dossier evaluated by Creative Director' },
  { key: 'confirmed', label: 'Confirmed & Retained', desc: 'Sovereign contract & dates reserved' },
  { key: 'planning', label: 'Architectural Planning', desc: '3D CAD rendering, floral sourcing & culinary design' },
  { key: 'event_day', label: 'Event Day Execution', desc: 'On-site white-glove spatial orchestra & gala staging' },
  { key: 'completed', label: 'Completed & Archived', desc: 'Film delivery & commemorative leather book binding' },
];

export const BookingTrackerModal: React.FC<BookingTrackerModalProps> = ({
  isOpen,
  onClose,
  bookings,
  selectedBookingId,
}) => {
  const [searchId, setSearchId] = useState(selectedBookingId || (bookings[0]?.id ?? ''));

  // Sync if selectedBookingId prop changes
  React.useEffect(() => {
    if (selectedBookingId) {
      setSearchId(selectedBookingId);
    }
  }, [selectedBookingId]);

  if (!isOpen) return null;

  const currentBooking = bookings.find(
    (b) => b.id.toLowerCase() === searchId.trim().toLowerCase()
  ) || bookings[0];

  const getStatusIndex = (status: BookingStatus) => {
    return STATUS_STEPS.findIndex((s) => s.key === status);
  };

  const activeIndex = currentBooking ? getStatusIndex(currentBooking.status) : 0;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-3xl w-full rounded-sm border border-[#d4af37]/40 bg-[#0d0f16] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
        >
          {/* Top Gold Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-[#1c1f2b] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#17150f] text-[#d4af37]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#fbf7ee]">
                  Event Concierge Tracker
                </h3>
                <span className="text-xs text-[#9ca3af] font-mono">
                  Live Sovereign Production Status
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#1a1c27] text-[#9ca3af] hover:text-[#fbf7ee] transition-colors cursor-pointer"
              aria-label="Close Tracker"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search bar for quick ID lookup */}
          <div className="px-6 sm:px-8 py-4 bg-[#11131c] border-b border-[#1c1f2b] flex items-center gap-3">
            <Search className="w-4 h-4 text-[#d4af37]" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Booking Reference (e.g. RA-2026-089)"
              className="bg-transparent text-sm text-[#fbf7ee] placeholder-[#6b7280] outline-none w-full font-mono"
            />
            <div className="flex items-center gap-1.5 shrink-0">
              {bookings.slice(0, 3).map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSearchId(b.id)}
                  className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                    currentBooking?.id === b.id
                      ? 'border-[#d4af37] text-[#d4af37] bg-[#1a170f]'
                      : 'border-[#262838] text-[#9ca3af] hover:text-white'
                  }`}
                >
                  {b.id}
                </button>
              ))}
            </div>
          </div>

          {currentBooking ? (
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[70vh]">
              {/* Event Brief Header */}
              <div className="p-5 rounded-sm bg-[#12141f] border border-[#232635] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#d4af37]">
                      {currentBooking.id}
                    </span>
                    <span className="text-[#3b3f52]">·</span>
                    <span className="text-xs font-serif text-[#cbd5e1]">
                      {currentBooking.eventType}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#fbf7ee]">
                    {currentBooking.clientName}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-[#9ca3af] font-mono mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#d4af37]" />
                      {currentBooking.destination}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#d4af37]" />
                      {currentBooking.eventDate}
                    </span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider block">
                    Current Milestone
                  </span>
                  <span className="inline-block mt-1 px-3 py-1 text-xs font-serif font-bold uppercase tracking-widest text-[#090a0d] bg-gradient-to-r from-[#d4af37] to-[#fae6a6] rounded-sm shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                    {STATUS_STEPS[activeIndex]?.label}
                  </span>
                </div>
              </div>

              {/* 19. TIMELINE ANIMATION */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1c1f2b] ml-4 sm:ml-6 space-y-8">
                {STATUS_STEPS.map((step, idx) => {
                  const isCompleted = idx <= activeIndex;
                  const isCurrent = idx === activeIndex;

                  return (
                    <motion.div
                      key={step.key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="relative"
                    >
                      {/* Node Bullet */}
                      <div
                        className={`absolute -left-[31px] sm:-left-[39px] top-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isCurrent
                            ? 'bg-[#d4af37] text-[#090a0d] ring-4 ring-[#d4af37]/25 shadow-[0_0_15px_#d4af37]'
                            : isCompleted
                            ? 'bg-[#18160e] border-2 border-[#d4af37] text-[#d4af37]'
                            : 'bg-[#12141c] border border-[#2b2e3e] text-[#6b7280]'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        ) : (
                          <span className="text-[10px] font-mono">{idx + 1}</span>
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-3">
                          <h5
                            className={`font-serif text-base font-bold uppercase tracking-wider transition-colors ${
                              isCurrent
                                ? 'text-[#fae6a6]'
                                : isCompleted
                                ? 'text-[#fbf7ee]'
                                : 'text-[#6b7280]'
                            }`}
                          >
                            {step.label}
                          </h5>
                          {isCurrent && (
                            <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase bg-[#1a1710] px-2 py-0.5 rounded border border-[#d4af37]/40 animate-pulse">
                              Active Stage
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#9ca3af] mt-1 leading-relaxed max-w-xl">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Special Production Notes */}
              {currentBooking.notes && (
                <div className="p-4 rounded bg-[#10121a] border border-[#232635] text-xs text-[#9ca3af]">
                  <strong className="text-[#d4af37] font-mono uppercase tracking-wider block mb-1">
                    Artistic Notes:
                  </strong>
                  {currentBooking.notes}
                </div>
              )}
            </div>
          ) : (
            <div className="p-12 text-center text-[#9ca3af]">
              <p>No booking found for reference "{searchId}".</p>
            </div>
          )}

          {/* Footer */}
          <div className="p-6 bg-[#0a0c12] border-t border-[#1a1c26] flex items-center justify-between text-xs text-[#6b7280]">
            <span className="flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              Encrypted Real-Time Synchronized
            </span>
            <button
              onClick={onClose}
              className="text-xs font-serif uppercase tracking-widest text-[#d4af37] hover:text-white"
            >
              Close Tracker
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

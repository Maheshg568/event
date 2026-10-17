import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking } from '../types';
import { X, Printer, Download, Check, FileText, Crown, Shield } from 'lucide-react';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
  onToast: (title: string, message: string) => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({
  isOpen,
  onClose,
  booking,
  onToast,
}) => {
  const [isCompiling, setIsCompiling] = useState(true);
  const [compileProgress, setCompileProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setIsCompiling(true);
      setCompileProgress(0);
      return;
    }

    setIsCompiling(true);
    setCompileProgress(15);

    const t1 = setTimeout(() => setCompileProgress(65), 300);
    const t2 = setTimeout(() => setCompileProgress(100), 750);
    const t3 = setTimeout(() => setIsCompiling(false), 950);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen]);

  if (!isOpen || !booking) return null;

  const handlePrint = () => {
    onToast('Printing Initialized', 'Sending high-resolution dossier to printer.');
    window.print();
  };

  const handleDownload = () => {
    onToast('Dossier Downloaded', `RoyalAura Quotation ${booking.id}.pdf ready.`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl w-full rounded-sm border border-[#d4af37]/40 bg-[#0d0f16] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#1c1f2b] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#19160e]">
                <FileText className="w-4 h-4 text-[#d4af37]" />
              </div>
              <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-[#fbf7ee]">
                Executive Quotation Dossier
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#1a1c27] text-[#9ca3af] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh]">
            {isCompiling ? (
              <div className="py-16 flex flex-col items-center justify-center text-center">
                <Crown className="w-10 h-10 text-[#d4af37] animate-pulse mb-4" />
                <span className="font-serif text-lg font-bold text-[#fbf7ee] uppercase tracking-wide">
                  Compiling High-Resolution Quotation
                </span>
                <span className="text-xs text-[#9ca3af] font-mono mt-1 mb-4">
                  Securing sovereign tax seal & artistic allocation...
                </span>
                <div className="w-64 h-1.5 bg-[#1f2230] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#d4af37] to-[#fae6a6] transition-all duration-300"
                    style={{ width: `${compileProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Success Banner */}
                <div className="p-3.5 rounded bg-[#131b15] border border-[#235832] flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-serif font-bold text-emerald-300 uppercase tracking-wider block">
                      Quotation Generated
                    </span>
                    <span className="text-[11px] text-[#9ca3af] font-mono">
                      Verified by RoyalAura Treasury & Managing Director
                    </span>
                  </div>
                </div>

                {/* Printable Invoice Card */}
                <div className="p-6 rounded bg-[#12141e] border border-[#242738] space-y-5 text-xs text-[#cbd5e1]">
                  <div className="flex items-center justify-between border-b border-[#202333] pb-4">
                    <div>
                      <span className="font-serif text-base font-bold text-[#fbf7ee] uppercase tracking-wider block">
                        ROYALAURA EVENTS S.A.
                      </span>
                      <span className="text-[#9ca3af] font-mono text-[10px]">
                        Geneva · Monaco · Milan · Paris
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-[#d4af37] font-bold block">
                        {booking.id}
                      </span>
                      <span className="text-[#6b7280] font-mono text-[10px]">
                        Date: {booking.createdAt}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[#9ca3af] font-mono block">Commissioned For:</span>
                      <strong className="text-white font-serif block text-sm mt-0.5">
                        {booking.clientName}
                      </strong>
                      <span className="text-[#9ca3af]">{booking.email}</span>
                    </div>
                    <div>
                      <span className="text-[#9ca3af] font-mono block">Destination:</span>
                      <strong className="text-white font-serif block text-sm mt-0.5">
                        {booking.destination}
                      </strong>
                      <span className="text-[#9ca3af]">{booking.eventDate} ({booking.guestCount} Guests)</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#9ca3af] font-mono block mb-2">Itemized Orchestrations:</span>
                    <div className="space-y-1.5 border-t border-[#1d202e] pt-2">
                      {booking.services.map((svc, i) => (
                        <div key={i} className="flex items-center justify-between py-1 border-b border-[#181a24]">
                          <span>{svc}</span>
                          <span className="text-[#d4af37] font-mono">Included</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#202333] flex items-center justify-between font-serif text-sm">
                    <span className="font-bold text-[#fbf7ee] uppercase tracking-wider">
                      Total Estimated Framework:
                    </span>
                    <span className="text-lg font-bold text-[#fae6a6]">
                      {booking.estimatedTotal || booking.budget}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2.5 text-xs font-serif uppercase tracking-wider text-[#cbd5e1] hover:text-[#d4af37] border border-[#2b2e3e] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Dossier</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-5 py-2.5 text-xs font-serif uppercase tracking-wider font-bold text-[#090a0d] bg-[#d4af37] hover:bg-[#fae6a6] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

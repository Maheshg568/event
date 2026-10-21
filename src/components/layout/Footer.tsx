import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MahotsavaLogo } from '../brand/MahotsavaLogo';
import { siteConfig } from '../../config/siteConfig';
import { CELEBRATION_TYPES } from '../../data/celebrationsData';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Instagram,
  X,
  FileText,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: 'home' | 'story' | 'venue' | 'celebrations' | 'gallery' | 'contact') => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="relative bg-[#180303] text-[#C9B8A5] border-t border-[#741A18]/60 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#E9D3B0]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-16">
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <MahotsavaLogo variant="horizontal" size="md" />
            </button>

            <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#E9D3B0] font-semibold">
              {siteConfig.tagline}
            </div>

            <p className="text-xs sm:text-sm text-[#C9B8A5]/90 leading-relaxed font-light">
              MAHOTSAVA GRANDEUR is a premier event management and celebration planning brand based in Hubballi–Dharwad, Karnataka. We bring weddings, cultural mahotsavas, corporate conclaves, concerts, and private celebrations to life with creativity, precision, and grandeur.
            </p>

            {/* Prominent WhatsApp & Instagram Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/916363116158?text=Namaste%20Mahotsava%20Grandeur%2C%20inquiry%20regarding%20event%20planning"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xs bg-[#25D366] text-[#0A2614] font-serif text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:bg-[#20b858] transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href="https://www.instagram.com/mahotsava_grandeur/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xs bg-[#210404] border border-[#741A18] text-[#E9D3B0] hover:text-white hover:border-[#C8A66A] font-mono text-[11px] flex items-center gap-1.5 transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C8A66A]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <span className="font-serif uppercase tracking-[0.22em] text-[#FFFDF9] font-bold block mb-3">
              Quick Links
            </span>
            <ul className="space-y-2 font-serif uppercase tracking-wider text-[11px]">
              {siteConfig.navigation.map((link) => (
                <li key={link.pageId}>
                  <button
                    onClick={() => onNavigate(link.pageId)}
                    className="hover:text-[#E9D3B0] transition-colors cursor-pointer text-left py-0.5 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: All Event Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="font-serif uppercase tracking-[0.22em] text-[#FFFDF9] font-bold block mb-3">
              All Event Services
            </span>
            <ul className="space-y-1.5 text-[11px]">
              {CELEBRATION_TYPES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('celebrations')}
                    className="hover:text-[#E9D3B0] transition-colors cursor-pointer text-left py-0.5 flex items-start gap-1.5 leading-snug font-light"
                  >
                    <span className="text-[#C8A66A] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                      {service.categoryLetter}.
                    </span>
                    <span className="truncate">{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="font-serif uppercase tracking-[0.22em] text-[#FFFDF9] font-bold block mb-3">
              Contact Details
            </span>
            <div className="space-y-2.5 text-[11px] font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A66A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Hubballi–Dharwad Headquarters</span>
                  <span className="text-[#C9B8A5]/90">Karnataka – 580020, India</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A66A] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+916363116158" className="hover:text-[#E9D3B0] block">
                    +91 6363116158
                  </a>
                  <a href="tel:+918310525917" className="hover:text-[#E9D3B0] text-[10px] text-[#C9B8A5]/80 block">
                    +91 8310525917 (Alternate)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A66A] shrink-0" />
                <a href="mailto:mahotsavagrandeur@gmail.com" className="hover:text-[#E9D3B0] break-all">
                  mahotsavagrandeur@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-[#C9B8A5]/80">
                <Clock className="w-4 h-4 text-[#C8A66A] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.operatingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="text-xs font-serif uppercase tracking-[0.18em] font-bold text-[#E9D3B0] hover:text-[#FFFDF9] transition-colors cursor-pointer flex items-center gap-1.5 py-1"
              >
                <span>Plan Your Event Now →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Service Area Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#741A18]/50 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-[#C9B8A5]/70 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandName}. Where Every Celebration Becomes Grandeur.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A66A]" />
              Hubballi–Dharwad (Central Hub)
            </span>
            <span>·</span>
            <span>Serving Karnataka &amp; Beyond</span>
            <span>·</span>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#E9D3B0] underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#E9D3B0] underline cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Privacy Policy / Terms Modal */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setModalType(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full bg-[#210404] border border-[#C8A66A]/60 p-6 sm:p-8 rounded-sm text-[#F7F0E6] shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#350606] hover:bg-[#C8A66A] text-white hover:text-[#210404] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#C8A66A] mb-2 font-semibold">
                <FileText className="w-4 h-4" />
                <span>
                  {modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-[#FFFDF9] mb-4">
                {modalType === 'privacy'
                  ? 'Client Privacy & Non-Disclosure Protocol'
                  : 'Event Planning Terms & Conditions'}
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#C9B8A5] font-light leading-relaxed">
                {modalType === 'privacy' ? (
                  <>
                    <p>
                      At MAHOTSAVA GRANDEUR, we uphold the strictest confidentiality regarding our clients&apos; private events, personal contact information, venue locations, and budgetary arrangements.
                    </p>
                    <p>
                      <strong>Information Collection:</strong> We collect contact details, event dates, guest counts, and requirements exclusively for the purpose of communicating event proposals, coordinating vendors, and executing your booking.
                    </p>
                    <p>
                      <strong>Data Security:</strong> Your contact numbers and email addresses are never sold, rented, or distributed to unauthorized third parties. All enquiries are transmitted via encrypted protocols.
                    </p>
                    <p>
                      <strong>Photographic Media:</strong> Client event photographs and videos are only published in our portfolio with express client authorization.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Customised Scope:</strong> Exact services, staff allocations, decor fabrications, and entertainment line-ups for each event are defined in a formal event agreement customized according to the client&apos;s requirements and budget.
                    </p>
                    <p>
                      <strong>Booking Confirmation:</strong> An event date is formally secured upon mutual agreement of the project proposal and receipt of the advance mobilization retainer.
                    </p>
                    <p>
                      <strong>Service Area:</strong> MAHOTSAVA GRANDEUR operates from Hubballi–Dharwad and delivers on-ground event management across North Karnataka and throughout Karnataka, subject to transit and logistics coordination.
                    </p>
                    <p>
                      <strong>Vendor &amp; Venue Protocols:</strong> On-ground arrangements comply with local municipal regulations, noise volume guidelines, and venue management rules.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#741A18] flex justify-end">
                <button
                  onClick={() => setModalType(null)}
                  className="px-6 py-2 rounded-xs text-xs font-serif uppercase tracking-wider font-bold text-[#210404] bg-[#C8A66A] hover:bg-[#E9D3B0] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

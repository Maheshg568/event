import React from 'react';
import { MahotsavaLogo } from '../brand/MahotsavaLogo';
import { siteConfig } from '../../config/siteConfig';
import { Mail, Phone, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: 'home' | 'story' | 'venue' | 'celebrations' | 'gallery' | 'contact') => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer className="relative bg-[#180303] text-[#C9B8A5] border-t border-[#741A18]/60 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#E9D3B0]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-16">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <MahotsavaLogo variant="horizontal" size="md" />
            </button>

            <p className="text-xs sm:text-sm text-[#C9B8A5]/90 leading-relaxed max-w-sm font-light">
              Where every celebration becomes grandeur. A sanctuary of monumental Indian architectural grandeur, bespoke ceremonial scenography, and royal hospitality.
            </p>

            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {siteConfig.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xs bg-[#210404] border border-[#741A18] text-[10px] font-mono uppercase tracking-wider text-[#C9B8A5] hover:text-[#E9D3B0] hover:border-[#C8A66A]/50 transition-all hover:-translate-y-0.5"
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="font-serif uppercase tracking-[0.25em] text-[#FFFDF9] font-bold block mb-3 sm:mb-4">
              Explore Sanctuary
            </span>
            <ul className="space-y-2.5 font-serif uppercase tracking-wider">
              {siteConfig.navigation.map((link) => (
                <li key={link.pageId}>
                  <button
                    onClick={() => onNavigate(link.pageId)}
                    className="hover:text-[#E9D3B0] transition-colors cursor-pointer text-left py-0.5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Direct Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5 text-xs">
            <span className="font-serif uppercase tracking-[0.25em] text-[#FFFDF9] font-bold block mb-3 sm:mb-4">
              Concierge Directorate
            </span>
            <div className="space-y-2.5 sm:space-y-3 text-[11px] font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A66A] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.locationCity}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A66A] shrink-0" />
                <a href={`tel:${siteConfig.contact.conciergePhone}`} className="hover:text-[#E9D3B0]">
                  {siteConfig.contact.conciergePhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A66A] shrink-0" />
                <a href={`mailto:${siteConfig.contact.inquiryEmail}`} className="hover:text-[#E9D3B0]">
                  {siteConfig.contact.inquiryEmail}
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
                className="text-xs font-serif uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold text-[#E9D3B0] hover:text-[#FFFDF9] transition-colors cursor-pointer flex items-center gap-1.5 py-1"
              >
                <span>Initiate Private Commission</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#741A18]/50 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-[#C9B8A5]/70 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandName}. All Sovereign Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A66A]" />
              Verified Luxury Destination
            </span>
            <span>·</span>
            <span>Bengaluru Heritage Sanctum</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { MahotsavaLogo } from './brand/MahotsavaLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAdmin }) => {
  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Vogue Weddings', href: '#' },
    { name: 'YouTube Cinema', href: '#' },
  ];

  return (
    <footer className="relative bg-[#050608] text-[#9ca3af] border-t border-[#171922] pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#d4af37]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <MahotsavaLogo variant="horizontal" size="md" />

            <p className="text-xs text-[#9ca3af] leading-relaxed max-w-sm">
              International event architecture, heritage palace weddings, and sovereign diplomatic summits. Crafted with unyielding discretion and timeless elegance.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="px-3 py-1.5 rounded-sm bg-[#0e1017] border border-[#222533] text-[11px] font-mono text-[#9ca3af] hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Experiences */}
          <div className="space-y-3 text-xs">
            <span className="font-serif uppercase tracking-[0.18em] text-[#fbf7ee] font-bold block">
              Disciplines
            </span>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Royal Palace Weddings</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Executive Global Summits</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Milestone Superyacht Galas</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Private Desert Conclaves</a></li>
            </ul>
          </div>

          {/* Column 3: Sanctuaries */}
          <div className="space-y-3 text-xs">
            <span className="font-serif uppercase tracking-[0.18em] text-[#fbf7ee] font-bold block">
              Sanctuaries
            </span>
            <ul className="space-y-2 font-mono text-[11px]">
              <li>Villa Balbiano, Lake Como</li>
              <li>City Palace, Udaipur</li>
              <li>Hôtel de Paris, Monaco</li>
              <li>Château de Chantilly, Paris</li>
            </ul>
          </div>

          {/* Column 4: Private Inquiries */}
          <div className="space-y-3 text-xs">
            <span className="font-serif uppercase tracking-[0.18em] text-[#fbf7ee] font-bold block">
              Direct Inquiries
            </span>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="font-mono">concierge@royalaura.events</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="font-mono">+44 20 7946 0912</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-serif tracking-wider uppercase text-[#d4af37] hover:underline"
                >
                  Initiate Commission →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#151722] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#6b7280]">
          <div>
            © {new Date().getFullYear()} RoyalAura Events S.A. All Sovereign Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="text-[#9ca3af] hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Director Portal
            </button>
            <span>·</span>
            <span>Geneva · Monaco · Milan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

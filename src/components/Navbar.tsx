import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, LayoutDashboard, Menu, X, Compass, CalendarCheck } from 'lucide-react';
import { MahotsavaLogo } from './brand/MahotsavaLogo';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  onOpenAdmin: () => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenTracker,
  onOpenAdmin,
  reducedMotion,
  onToggleReducedMotion,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiences', href: '#services', id: 'services' },
    { name: 'Palaces & Venues', href: '#showcase', id: 'showcase' },
    { name: 'Portfolio', href: '#gallery', id: 'gallery' },
    { name: 'Collections', href: '#packages', id: 'packages' },
    { name: 'Accolades', href: '#testimonials', id: 'testimonials' },
  ];

  const handleNavClick = (href: string, id: string) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'bg-[#08090c]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element with crest) */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-left select-none"
            aria-label="RoyalAura Events"
          >
            <MahotsavaLogo variant="horizontal" size="md" />
          </a>

          {/* Zone 2: 4-6 Nav Links with Animated expanding underline */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }}
                className="relative py-1 text-[#d1d5db] hover:text-[#d4af37] transition-colors duration-250 group whitespace-nowrap"
              >
                {link.name}
                {/* Center-out expanding gold underline */}
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Motion toggle pill */}
            <button
              onClick={onToggleReducedMotion}
              title={reducedMotion ? 'Enable Fluid Animations' : 'Reduce Motion'}
              className="px-2.5 py-1.5 rounded text-[11px] font-mono tracking-wider text-[#9ca3af] hover:text-[#d4af37] border border-[#2a2c34] hover:border-[#d4af37]/40 bg-[#101218]/60 transition-all"
            >
              {reducedMotion ? 'Motion: Off' : 'Motion: Smooth'}
            </button>

            {/* Track Booking action */}
            <button
              onClick={onOpenTracker}
              className="px-3.5 py-2 text-xs font-medium tracking-wider uppercase text-[#e5e7eb] hover:text-[#d4af37] transition-all flex items-center gap-1.5 hover:-translate-y-0.5 active:scale-95"
            >
              <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
              Track Event
            </button>

            {/* Admin Console shortcut */}
            <button
              onClick={onOpenAdmin}
              title="Open Admin Concierge Portal"
              className="p-2 rounded text-[#9ca3af] hover:text-[#d4af37] border border-[#2a2c34] hover:border-[#d4af37]/40 bg-[#12141c]/60 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <LayoutDashboard className="w-4 h-4" />
            </button>

            {/* Book Now Primary Button */}
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-5 py-2.5 text-xs font-serif tracking-[0.16em] uppercase font-semibold text-[#090a0d] bg-gradient-to-r from-[#d4af37] via-[#f3de98] to-[#d4af37] rounded-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-250 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.4)] cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#090a0d]" />
                Curate Event
              </span>
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-[11px] font-serif tracking-wider uppercase font-semibold text-[#090a0d] bg-[#d4af37] rounded-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e5e7eb] hover:text-[#d4af37] border border-[#272a33] rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#090a0e]/95 backdrop-blur-xl border-b border-[#d4af37]/20 p-6 sm:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }}
                className="text-sm uppercase tracking-widest text-[#d1d5db] hover:text-[#d4af37] py-2 border-b border-[#1c1e27]"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracker();
                }}
                className="w-full py-2.5 text-xs uppercase tracking-wider text-[#e5e7eb] border border-[#2e313d] rounded flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#d4af37]" />
                Track Booking Status
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full py-2.5 text-xs uppercase tracking-wider text-[#e5e7eb] border border-[#2e313d] rounded flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4 text-[#d4af37]" />
                Admin Dashboard
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-serif tracking-[0.16em] uppercase font-bold text-[#090a0d] bg-gradient-to-r from-[#d4af37] to-[#fae6a6] rounded shadow-lg"
              >
                Curate Your Event
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

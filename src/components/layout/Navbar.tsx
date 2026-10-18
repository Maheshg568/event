import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MahotsavaLogo } from '../brand/MahotsavaLogo';
import { siteConfig } from '../../config/siteConfig';
import { Menu, X, CalendarCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (pageId: 'home' | 'story' | 'venue' | 'celebrations' | 'gallery' | 'contact', anchor?: string) => void;
  onOpenEnquiry: () => void;
  reducedMotion?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId: 'home' | 'story' | 'venue' | 'celebrations' | 'gallery' | 'contact', href: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId, href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'bg-[#350606]/92 backdrop-blur-md border-b border-[#C8A66A]/25 py-3.5 shadow-[0_8px_30px_rgba(33,4,4,0.7)]'
            : 'bg-transparent border-b border-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Lockup */}
          <button
            onClick={() => handleLinkClick('home', '#home')}
            className="group flex items-center text-left focus:outline-none cursor-pointer py-1"
            aria-label="Mahotsava Grandeur Homepage"
          >
            <MahotsavaLogo variant="horizontal" size="md" />
          </button>

          {/* Clean Navigation Links with Center-Out Expanding Gold Underline */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-serif uppercase tracking-[0.22em]">
            {siteConfig.navigation.map((link) => {
              const isActive = activePage === link.pageId;
              return (
                <button
                  key={link.pageId}
                  onClick={() => handleLinkClick(link.pageId, link.href)}
                  className={`relative py-1.5 transition-colors duration-250 group cursor-pointer ${
                    isActive ? 'text-[#FFFDF9] font-semibold' : 'text-[#C9B8A5] hover:text-[#E9D3B0]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Gold center-out animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A66A] to-transparent transition-transform duration-300 origin-center ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xs text-[11px] font-serif uppercase tracking-[0.2em] font-semibold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-[0_4px_18px_rgba(200,166,106,0.3)] hover:shadow-[0_6px_25px_rgba(200,166,106,0.45)] cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#210404]" />
                Plan Your Celebration
              </span>
            </button>
          </div>

          {/* Mobile navigation actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="sm:hidden px-3.5 py-1.5 rounded-xs text-[10px] font-serif uppercase tracking-[0.16em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] to-[#E9D3B0] shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E9D3B0] hover:text-[#FFFDF9] border border-[#C8A66A]/40 rounded-xs bg-[#210404]/80 cursor-pointer flex items-center justify-center min-w-[40px] min-h-[40px] active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E9D3B0]" /> : <Menu className="w-5 h-5 text-[#E9D3B0]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/75 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-Down Menu Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-[60px] sm:top-[72px] z-40 bg-[#1d0404]/98 backdrop-blur-2xl border-b border-[#C8A66A]/35 p-6 lg:hidden flex flex-col gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.85)] max-h-[calc(100dvh-70px)] overflow-y-auto"
            >
              <div className="flex flex-col divide-y divide-[#350606]">
                {siteConfig.navigation.map((link) => {
                  const isActive = activePage === link.pageId;
                  return (
                    <button
                      key={link.pageId}
                      onClick={() => handleLinkClick(link.pageId, link.href)}
                      className={`text-left text-xs font-serif uppercase tracking-[0.24em] py-3.5 flex items-center justify-between transition-colors cursor-pointer ${
                        isActive ? 'text-[#FFFDF9] font-bold pl-2 border-l-2 border-[#C8A66A]' : 'text-[#C9B8A5] hover:text-[#E9D3B0]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#741A18]/60 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.22em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] shadow-lg flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-[#210404]" />
                  <span>Plan Your Celebration</span>
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#C9B8A5] pt-1">
                  <span>Hubballi–Dharwad, Karnataka</span>
                  <a
                    href={`tel:${siteConfig.contact.conciergePhone}`}
                    className="text-[#E9D3B0] hover:underline"
                  >
                    {siteConfig.contact.conciergePhone}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

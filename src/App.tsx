/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CinematicOpening } from './components/common/CinematicOpening';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { VenuePage } from './pages/VenuePage';
import { CelebrationsPage } from './pages/CelebrationsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { CelebrationType } from './data/celebrationsData';
import { ToastContainer } from './components/ToastContainer';
import { ToastMessage } from './types';

export default function App() {
  const [openingComplete, setOpeningComplete] = useState(false);
  const [activePage, setActivePage] = useState<'home' | 'story' | 'venue' | 'celebrations' | 'gallery' | 'contact'>('home');
  const [reducedMotion, setReducedMotion] = useState(false);

  // Pre-selected parameters when routing to enquiry
  const [enquirySpace, setEnquirySpace] = useState<string>('');
  const [enquirySetup, setEnquirySetup] = useState<string>('');

  // Toast notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Accessibility prefers-reduced-motion check
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Listen to hash changes for browser forward/back buttons
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'story', 'venue', 'celebrations', 'gallery', 'contact'].includes(hash)) {
        setActivePage(hash as any);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (
    pageId: 'home' | 'story' | 'venue' | 'celebrations' | 'gallery' | 'contact',
    anchor?: string
  ) => {
    setActivePage(pageId);
    window.location.hash = pageId;

    if (anchor && pageId === 'home') {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = () => {
    if (activePage === 'home') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('contact');
  };

  const handleExploreVenue = () => {
    if (activePage === 'home') {
      const el = document.getElementById('venue');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('venue');
  };

  const handleSelectSpaceForEnquiry = (spaceName: string, setupName: string) => {
    setEnquirySpace(spaceName);
    setEnquirySetup(setupName);
    addToast('Configuration Selected', `${spaceName} with ${setupName} selected for enquiry.`, 'info');
    handleNavigate('contact');
  };

  const handleSelectCelebration = (celebration: CelebrationType) => {
    setEnquirySpace(celebration.idealSetting);
    addToast('Occasion Selected', `${celebration.title} pre-filled for private consultation.`, 'info');
    handleNavigate('contact');
  };

  const handleEnquirySuccess = (refId: string) => {
    addToast('Commission Dossier Transmitted', `Reference ${refId} has been logged with the Directorate.`, 'success');
  };

  return (
    <div className="relative min-h-screen bg-[#350606] text-[#F7F0E6] font-sans selection:bg-[#C8A66A]/30 selection:text-[#FFFDF9]">
      {/* 1. Cinematic Video Opening Sequence */}
      {!openingComplete && (
        <CinematicOpening
          onComplete={() => setOpeningComplete(true)}
          reducedMotion={reducedMotion}
        />
      )}

      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
        reducedMotion={reducedMotion}
      />

      {/* Main Page Content */}
      <main>
        {activePage === 'home' && (
          <HomePage
            onExploreVenue={handleExploreVenue}
            onOpenEnquiry={handleOpenEnquiry}
            onDiscoverStory={() => handleNavigate('story')}
            onSelectCelebration={handleSelectCelebration}
            onSelectSpaceForEnquiry={handleSelectSpaceForEnquiry}
            reducedMotion={reducedMotion}
          />
        )}

        {activePage === 'story' && (
          <StoryPage
            onOpenEnquiry={handleOpenEnquiry}
            onExploreVenue={handleExploreVenue}
          />
        )}

        {activePage === 'venue' && (
          <VenuePage onSelectSpaceForEnquiry={handleSelectSpaceForEnquiry} />
        )}

        {activePage === 'celebrations' && (
          <CelebrationsPage onSelectCelebration={handleSelectCelebration} />
        )}

        {activePage === 'gallery' && (
          <GalleryPage onOpenEnquiry={handleOpenEnquiry} />
        )}

        {activePage === 'contact' && (
          <ContactPage
            initialSpace={enquirySpace}
            initialSetup={enquirySetup}
            onEnquirySuccess={handleEnquirySuccess}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

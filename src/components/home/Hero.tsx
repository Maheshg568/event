import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MahotsavaLogo } from '../brand/MahotsavaLogo';
import { siteConfig } from '../../config/siteConfig';
import { ChevronDown, Sparkles, ArrowRight, Compass } from 'lucide-react';

interface HeroProps {
  onExploreVenue: () => void;
  onOpenEnquiry: () => void;
  reducedMotion?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreVenue,
  onOpenEnquiry,
  reducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle golden dust particle motes on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = 28;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      speedY: Math.random() * 0.25 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.4 + 0.15,
      pulse: Math.random() * 0.02 + 0.01,
    }));

    let t = 0;
    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const dynamicAlpha = p.alpha + Math.sin(t + p.size) * 0.12;
        const alpha = Math.max(0.08, Math.min(dynamicAlpha, 0.6));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 211, 176, ${alpha})`;
        ctx.shadowColor = '#C8A66A';
        ctx.shadowBlur = 5;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [reducedMotion]);

  return (
    <section
      id="home"
      className="relative min-h-[95dvh] sm:min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-28 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-burgundy-texture overflow-hidden select-none"
    >
      {/* Background Architectural Venue Scrim & Warm Golden Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Softly focused architectural palace illumination */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_30%,#570D0D_0%,#350606_55%,#210404_100%)] opacity-95" />

        {/* Ambient warm golden glow sources imitating the video's radiant arch lighting */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-[#E9D3B0]/12 blur-[140px]" />
        <div className="absolute top-[40%] left-[15%] w-[380px] h-[380px] rounded-full bg-[#741A18]/30 blur-[100px]" />
        <div className="absolute top-[40%] right-[15%] w-[380px] h-[380px] rounded-full bg-[#741A18]/30 blur-[100px]" />

        {/* Jaali lattice pattern */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#C8A66A_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#210404] via-transparent to-[#210404]/60" />
      </div>

      {/* Floating Canvas for Golden Dust Motes */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Hero Content Staggered Entrance */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
        {/* 1. Official Lotus Emblem & Brand Mark */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 sm:mb-6 w-full flex justify-center"
        >
          <MahotsavaLogo variant="full" size="xl" />
        </motion.div>

        {/* 2. Eyebrow - Clean Editorial Unboxed Typography (No wrapped pill) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-2.5 sm:mb-4 max-w-full px-2"
        >
          <Sparkles className="w-3 h-3 text-[#C8A66A] shrink-0" />
          <span className="font-serif text-[9px] sm:text-xs tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#E9D3B0] font-medium text-center">
            {siteConfig.eyebrow}
          </span>
          <Sparkles className="w-3 h-3 text-[#C8A66A] shrink-0 hidden sm:block" />
        </motion.div>

        {/* 3. Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.05em] text-[#FFFDF9] leading-[1.18] sm:leading-[1.12] text-balance max-w-3xl px-2"
        >
          WHERE EVERY <br />
          CELEBRATION <br />
          <span className="gold-text-shimmer italic font-normal font-serif">BECOMES GRANDEUR</span>
        </motion.h2>

        {/* Delicate Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C8A66A] to-transparent my-3 sm:my-5"
        />

        {/* 4. Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="max-w-xl text-xs sm:text-base md:text-lg text-[#C9B8A5] font-light leading-relaxed tracking-wide text-balance mb-5 sm:mb-8 px-3"
        >
          {siteConfig.heroDescription}
        </motion.p>

        {/* 5. Primary and Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 max-w-xs sm:max-w-none"
        >
          {/* Primary CTA: EXPLORE THE VENUE */}
          <button
            onClick={onExploreVenue}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xs text-xs font-serif uppercase tracking-[0.18em] sm:tracking-[0.22em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,166,106,0.4)] active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Compass className="w-3.5 h-3.5 text-[#210404]" />
            <span>Explore The Venue</span>
          </button>

          {/* Secondary CTA: ENQUIRE NOW */}
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xs text-xs font-serif uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold text-[#F7F0E6] hover:text-[#E9D3B0] border border-[#741A18] hover:border-[#C8A66A]/60 bg-[#350606]/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(33,4,4,0.6)] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Subtle Gold Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 sm:mt-10 sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer pointer-events-auto"
          onClick={onExploreVenue}
        >
          <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-[#C9B8A5]">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-[#C8A66A]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

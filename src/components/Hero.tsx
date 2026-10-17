import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, ArrowRight, Play, Award, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreGallery: () => void;
  onOpenShowreel: () => void;
  reducedMotion: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExploreGallery,
  onOpenShowreel,
  reducedMotion,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse parallax motion values (normalized from -1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end cinematic parallax
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  // Transforms for layered depth
  // Background: 6px movement
  const bgX = useTransform(springX, [-1, 1], [-8, 8]);
  const bgY = useTransform(springY, [-1, 1], [-8, 8]);

  // Decorative frames/elements: 16px movement
  const decorX = useTransform(springX, [-1, 1], [-16, 16]);
  const decorY = useTransform(springY, [-1, 1], [-16, 16]);

  // Text: subtle 3px in opposite direction
  const textX = useTransform(springX, [-1, 1], [4, -4]);
  const textY = useTransform(springY, [-1, 1], [4, -4]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || reducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Map to [-1, 1]
    const normX = (clientX / innerWidth) * 2 - 1;
    const normY = (clientY / innerHeight) * 2 - 1;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  // Golden particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle 35 floating luxury golden dust motes
    const particleCount = reducedMotion ? 12 : 36;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: Math.random() * 0.35 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    let t = 0;
    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.alpha + Math.sin(t + p.size) * 0.18;
        const boundedAlpha = Math.max(0.1, Math.min(currentAlpha, 0.7));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${boundedAlpha})`;
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07080b] pt-24 pb-16 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Background Layer with Slow Cinematic Zoom & Parallax */}
      <motion.div
        style={{
          x: isMobile || reducedMotion ? 0 : bgX,
          y: isMobile || reducedMotion ? 0 : bgY,
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Cinematic Ballroom Aesthetic Backdrop via High-Definition CSS Scrim & Architectural Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_20%,#241a0d_0%,#11131a_45%,#07080b_85%)] opacity-90" />

        {/* Ambient lighting spots imitating opulent ballroom chandeliers and golden reflections */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#d4af37]/10 blur-[130px]" />
        <div className="absolute top-[35%] right-[15%] w-[450px] h-[450px] rounded-full bg-[#f3de98]/8 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[600px] h-[300px] rounded-full bg-[#c7982e]/8 blur-[160px]" />

        {/* Architectural Palace Grid & Subtle Lattice lines */}
        <div
          className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"
          style={{
            maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, #000 30%, transparent 100%)',
          }}
        />

        {/* Vignette Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-[#07080b]/70" />
      </motion.div>

      {/* Floating Canvas for Golden Dust Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Decorative Parallax Frames */}
      <motion.div
        style={{
          x: isMobile || reducedMotion ? 0 : decorX,
          y: isMobile || reducedMotion ? 0 : decorY,
        }}
        className="absolute inset-0 pointer-events-none z-10 hidden md:block"
      >
        {/* Subtle royal geometric corner frames */}
        <div className="absolute top-28 left-12 w-28 h-28 border-t border-l border-[#d4af37]/25" />
        <div className="absolute top-28 right-12 w-28 h-28 border-t border-r border-[#d4af37]/25" />
        <div className="absolute bottom-16 left-12 w-28 h-28 border-b border-l border-[#d4af37]/25" />
        <div className="absolute bottom-16 right-12 w-28 h-28 border-b border-r border-[#d4af37]/25" />
      </motion.div>

      {/* Central Hero Content - Sequential Staggered Animations */}
      <motion.div
        style={{
          x: isMobile || reducedMotion ? 0 : textX,
          y: isMobile || reducedMotion ? 0 : textY,
        }}
        className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* 1. Logo / Kicker: 0.2s fade + upward */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#121319]/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.12)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="font-serif text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#f5eed6] font-semibold">
            ROYALAURA EVENTS & PRODUCTIONS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
        </motion.div>

        {/* 2. Main Heading Line 1: 0.4s fade + upward */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-[0.06em] uppercase text-[#fdfbf7] leading-[1.08] text-balance"
        >
          WE CREATE <span className="gold-gradient-text">MOMENTS.</span>
        </motion.h1>

        {/* 3. Main Heading Line 2: 0.7s fade + upward */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-[0.06em] uppercase text-[#e5e7eb] leading-[1.12] mt-1 sm:mt-2 text-balance"
        >
          YOU CREATE <span className="text-[#f5eed6] italic font-light font-serif">MEMORIES.</span>
        </motion.h2>

        {/* Thin gold accent divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-6"
        />

        {/* 4. Supporting text: 0.85s fade in */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-lg text-[#9ca3af] font-light leading-relaxed tracking-wide text-balance mb-10"
        >
          Architects of royal weddings, sovereign galas, and bespoke private island celebrations across Europe, the Middle East, and Asia.
        </motion.p>

        {/* 5. Buttons: 1.0s fade + scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-serif tracking-[0.2em] uppercase font-bold text-[#090a0d] bg-gradient-to-r from-[#d4af37] via-[#f7e7ae] to-[#d4af37] rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_-5px_rgba(212,175,55,0.45)] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Reserve Your Date</span>
            <ArrowRight className="w-4 h-4 text-[#090a0d]" />
          </button>

          {/* Secondary CTA: Portfolio */}
          <button
            onClick={onExploreGallery}
            className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm font-serif tracking-[0.18em] uppercase font-medium text-[#f3f4f6] hover:text-[#d4af37] border border-[#373a46] hover:border-[#d4af37]/60 bg-[#0e1017]/70 backdrop-blur-md rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.5)] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Portfolio</span>
          </button>

          {/* Showreel preview button */}
          <button
            onClick={onOpenShowreel}
            className="w-full sm:w-auto px-5 py-4 text-xs sm:text-sm tracking-wider uppercase font-medium text-[#9ca3af] hover:text-[#fbf7ee] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#181a24]/60">
              <Play className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37] ml-0.5" />
            </div>
            <span className="text-[11px] tracking-[0.2em]">Film Reel</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-16 pt-8 border-t border-[#1f222e]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[#9ca3af] text-xs font-mono tracking-wider"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Diplomatic & Royal Discretion</span>
          </div>
          <span className="hidden sm:inline text-[#373a46]">·</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span>World Luxury Event Agency of the Year</span>
          </div>
          <span className="hidden sm:inline text-[#373a46]">·</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>Serving Global Locations</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

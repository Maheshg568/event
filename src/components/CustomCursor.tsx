import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'button' | 'view' | 'link'>('default');
  const [isVisible, setIsVisible] = useState(false);

  // Springs for smooth fluid following
  const mouseX = useSpring(0, { stiffness: 450, damping: 35 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 35 });

  useEffect(() => {
    // Check if device has touch capability or coarse pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const galleryEl = target.closest('[data-cursor="view"]');
      const btnEl = target.closest('button, [role="button"], a');

      if (galleryEl) {
        setHoverType('view');
      } else if (btnEl) {
        setHoverType('button');
      } else {
        setHoverType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer trailing ring */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hoverType === 'view' ? 68 : hoverType === 'button' ? 44 : 28,
          height: hoverType === 'view' ? 68 : hoverType === 'button' ? 44 : 28,
          borderColor: hoverType === 'view' ? 'rgba(212, 175, 55, 0.9)' : 'rgba(212, 175, 55, 0.5)',
          backgroundColor: hoverType === 'view' ? 'rgba(19, 17, 11, 0.85)' : 'rgba(212, 175, 55, 0.04)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="rounded-full border backdrop-blur-[2px] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]"
      >
        {hoverType === 'view' && (
          <span className="text-[10px] font-serif tracking-[0.2em] font-semibold text-[#f5eed6] uppercase">
            VIEW
          </span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoverType === 'view' ? 0 : hoverType === 'button' ? 1.5 : 1,
          opacity: hoverType === 'view' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]"
      />
    </div>
  );
};

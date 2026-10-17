import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-[#8a7024] via-[#d4af37] to-[#fbf0cd] origin-left shadow-[0_0_10px_rgba(212,175,55,0.8)]"
      />
    </div>
  );
};

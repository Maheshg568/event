import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data/mockData';
import { fadeUp, staggerContainer } from '../utils/motionVariants';

const CounterItem: React.FC<{
  target: number;
  suffix: string;
  label: string;
  detail: string;
  hasTriggered: boolean;
}> = ({ target, suffix, label, detail, hasTriggered }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasTriggered) return;

    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out quad for natural slowdown
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasTriggered, target]);

  return (
    <div className="relative p-6 sm:p-8 rounded-sm bg-[#0d0f15]/70 border border-[#232634] hover:border-[#d4af37]/50 transition-all duration-300 group hover:-translate-y-1">
      {/* Top golden hairline accent */}
      <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent group-hover:via-[#d4af37] transition-all duration-300" />

      <div className="flex flex-col">
        <div className="flex items-baseline gap-0.5">
          <span className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#fbf7ee] group-hover:text-[#fae6a6] transition-colors tabular-nums">
            {count}
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#d4af37]">
            {suffix}
          </span>
        </div>

        <span className="mt-2 text-sm sm:text-base font-serif font-medium text-[#e5e7eb] tracking-wide">
          {label}
        </span>

        <span className="mt-1 text-xs text-[#9ca3af] font-mono tracking-wider">
          {detail}
        </span>
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-[#07080b] border-y border-[#181b24] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.035),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS_DATA.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <CounterItem
                target={item.value}
                suffix={item.suffix}
                label={item.label}
                detail={item.detail}
                hasTriggered={isInView}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

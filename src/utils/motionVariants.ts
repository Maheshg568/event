import { Variants, Transition } from 'motion/react';

// Curated luxury easing curves
export const luxuryEase = [0.16, 1, 0.3, 1] as const; // Smooth luxury settle
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: luxuryEase,
};

export const slowTransition: Transition = {
  duration: 0.9,
  ease: luxuryEase,
};

export const quickFeedback: Transition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1],
};

// Reusable animation presets
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: luxuryEase },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: luxuryEase },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: luxuryEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: luxuryEase },
  },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.3 } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: luxuryEase },
  },
  exit: { opacity: 0, x: -40, transition: { duration: 0.4 } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: luxuryEase },
  },
  exit: { opacity: 0, x: 40, transition: { duration: 0.4 } },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: luxuryEase },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 10,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

import { cubicBezier } from "motion/react";
import type { Variants } from "motion/react";

const revealEase = cubicBezier(0.22, 1, 0.36, 1);

export const revealViewport = {
  once: true,
  amount: 0.35,
};

export const staggeredRevealVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: revealEase,
    },
  },
};

export const softScaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: revealEase,
    },
  },
};

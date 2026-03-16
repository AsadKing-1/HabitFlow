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
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
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
      duration: 0.9,
      ease: revealEase,
    },
  },
};

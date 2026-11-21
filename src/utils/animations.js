import { useReducedMotion } from 'framer-motion';

export const PREMIUM_EASE = [0.16, 1, 0.3, 1];

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.7,
      delay: custom.delay ?? 0,
      ease: PREMIUM_EASE,
    },
  }),
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration ?? 0.8,
      delay: custom.delay ?? 0,
      ease: PREMIUM_EASE,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 1 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.12,
      delayChildren: custom.delayChildren ?? 0,
    },
  }),
};

export const defaultViewport = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -40px 0px',
};

export const heroViewport = {
  once: true,
  amount: 0.1,
};

const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  decelerate: [0.0, 0.0, 0.2, 1] as const,
  spring: { type: 'spring' as const, stiffness: 300, damping: 24 },
}

const duration = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.7,
  reveal: 0.6,
}

export const transition = {
  smooth: { duration: duration.reveal, ease: easing.smooth },
  slow: { duration: duration.slow, ease: easing.decelerate },
  spring: easing.spring,
}

export const variants = {
  staggerContainer: (staggerDelay = 0.1) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }),
  staggerItem: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transition.smooth,
    },
  },
}

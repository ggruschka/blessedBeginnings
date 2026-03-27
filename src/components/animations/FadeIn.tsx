import { type ReactNode, useRef } from 'react'
import { type UseInViewOptions, motion, useInView, useReducedMotion } from 'motion/react'
import { transition } from '@/lib/animations'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  viewMargin?: UseInViewOptions['margin']
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: -40 },
  right: { x: 40 },
  none: {},
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = transition.smooth.duration,
  className,
  viewMargin = '-80px',
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: viewMargin })
  const prefersReducedMotion = useReducedMotion()

  const offset = offsets[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, ...offset }
      }
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : undefined
      }
      transition={{
        duration: prefersReducedMotion ? 0.15 : duration,
        delay,
        ease: transition.smooth.ease,
      }}
    >
      {children}
    </motion.div>
  )
}

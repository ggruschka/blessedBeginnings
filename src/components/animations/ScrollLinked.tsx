import { type ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface ScrollLinkedProps {
  children: ReactNode
  className?: string
  opacityRange?: [number, number]
  scaleRange?: [number, number]
  yRange?: [number, number]
}

export function ScrollLinked({
  children,
  className,
  opacityRange,
  scaleRange,
  yRange,
}: ScrollLinkedProps) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    opacityRange
      ? [opacityRange[0], opacityRange[1], opacityRange[1], opacityRange[0]]
      : [1, 1, 1, 1]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    scaleRange
      ? [scaleRange[0], scaleRange[1], scaleRange[1], scaleRange[0]]
      : [1, 1, 1, 1]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    yRange ?? [0, 0]
  )

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{ opacity, scale, y }}
    >
      {children}
    </motion.div>
  )
}

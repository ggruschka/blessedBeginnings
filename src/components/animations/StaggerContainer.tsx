import { type ReactNode, useRef } from 'react'
import { type UseInViewOptions, motion, useInView, useReducedMotion } from 'motion/react'
import { variants } from '@/lib/animations'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  viewMargin?: UseInViewOptions['margin']
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  viewMargin = '-60px',
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: viewMargin })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants.staggerContainer(staggerDelay)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={variants.staggerItem}>
      {children}
    </motion.div>
  )
}

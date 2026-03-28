import { type ReactNode, useRef } from 'react'
import { type MotionValue, useScroll, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface ScrollSectionProps {
  children: (scrollYProgress: MotionValue<number>) => ReactNode
  className?: string
  innerClassName?: string
  height?: string
}

export function ScrollSection({
  children,
  className,
  innerClassName,
  height = '200vh',
}: ScrollSectionProps) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {children(scrollYProgress)}
      </div>
    )
  }

  return (
    <div ref={ref} className={cn('relative', className)} style={{ height }}>
      <div
        className={cn(
          'sticky top-0 flex h-screen items-center overflow-hidden',
          innerClassName
        )}
      >
        {children(scrollYProgress)}
      </div>
    </div>
  )
}

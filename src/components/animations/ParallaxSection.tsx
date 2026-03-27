import { type ReactNode, useRef, useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react'
import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  offset?: number
  speed?: number
}

export function ParallaxSection({
  children,
  className,
  offset = 100,
  speed = 0.3,
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset * speed, -offset * speed])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const disabled = isMobile || prefersReducedMotion

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div style={disabled ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  )
}

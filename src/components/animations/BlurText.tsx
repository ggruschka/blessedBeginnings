import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function BlurText({
  text,
  className,
  delay = 0,
  as: Tag = 'h1',
}: BlurTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()

  const words = text.split(' ')

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag ref={ref} className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.3em] inline-block"
          initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
          animate={
            isInView
              ? { opacity: 1, filter: 'blur(0px)', y: 0 }
              : undefined
          }
          transition={{
            duration: 0.45,
            delay: delay + i * 0.06,
            ease: [0.25, 0.46, 0.45, 0.94],
            filter: { duration: 0.7 },
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { FadeIn } from '@/components/animations/FadeIn'
import { SectionBadge } from '@/components/SectionBadge'

const values = ['Faith', 'Virtue', 'Family', 'Boyhood', 'Girlhood']

function ScrollWord({ word, index, total, scrollYProgress }: {
  word: string
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = index / (total + 1)
  const end = start + 1.5 / (total + 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
  const y = useTransform(scrollYProgress, [start, end], [10, 0])

  return (
    <span className="flex items-center gap-6 sm:gap-10">
      <motion.span
        className="font-heading text-2xl italic text-primary sm:text-3xl lg:text-4xl"
        style={{ opacity, y }}
      >
        {word}
      </motion.span>
      {index < total - 1 && (
        <motion.span
          className="hidden h-1.5 w-1.5 rounded-full bg-primary/40 sm:block"
          style={{ opacity }}
        />
      )}
    </span>
  )
}

export function PromiseBar() {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end 0.7'],
  })

  return (
    <section ref={ref} className="relative bg-surface-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <SectionBadge>Built on Timeless Truths</SectionBadge>
        </FadeIn>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          {values.map((value, i) =>
            prefersReducedMotion ? (
              <span key={value} className="flex items-center gap-6 sm:gap-10">
                <span className="font-heading text-2xl italic text-primary sm:text-3xl lg:text-4xl">
                  {value}
                </span>
                {i < values.length - 1 && (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-primary/40 sm:block" />
                )}
              </span>
            ) : (
              <ScrollWord
                key={value}
                word={value}
                index={i}
                total={values.length}
                scrollYProgress={scrollYProgress}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}

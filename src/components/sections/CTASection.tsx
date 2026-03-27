import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { ParallaxSection } from '@/components/animations/ParallaxSection'
import { WoodSurface } from '@/components/WoodSurface'

export function CTASection() {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1.15])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [0.1, 0.35])
  const animated = !prefersReducedMotion

  return (
    <section ref={sectionRef} id="cta" className="relative py-32 sm:py-40">
      {/* Background illustration — breathes into view */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {animated ? (
          <motion.div className="h-full w-full" style={{ scale: bgScale }}>
            <motion.img
              src="/assets/children-praying.webp"
              alt="Two children kneeling in prayer among wildflowers"
              className="h-full w-full object-cover"
              style={{ opacity: bgOpacity }}
              loading="lazy"
            />
          </motion.div>
        ) : (
          <ParallaxSection offset={60} speed={0.15} className="h-full">
            <img
              src="/assets/children-praying.webp"
              alt="Two children kneeling in prayer among wildflowers"
              className="h-full w-full object-cover opacity-30"
              loading="lazy"
            />
          </ParallaxSection>
        )}
      </div>

      {/* Fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl italic leading-[0.9] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Begin their story today.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl font-body text-base font-light leading-relaxed text-foreground/60 sm:text-lg">
            Give your children the gift of tradition, faith, and beauty.
            Every treasure is crafted to last a lifetime.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WoodSurface
              as="a"
              href="#"
              className="flex items-center gap-2 rounded-full px-8 py-3.5 font-body text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              Explore the Collection
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </WoodSurface>
            <a
              href="#story"
              className="rounded-full bg-primary/10 px-8 py-3.5 font-body text-sm font-medium text-foreground/70 transition-colors hover:bg-primary/15 hover:text-foreground"
            >
              Learn About Our Faith
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

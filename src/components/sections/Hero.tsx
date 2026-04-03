import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import { BlurText } from '@/components/animations/BlurText'
import { FadeIn } from '@/components/animations/FadeIn'
import { WoodSurface } from '@/components/WoodSurface'

export function Hero() {
  return (
    <section className="relative flex min-h-screen-safe snap-start flex-col overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          style={{ opacity: 0.65 }}
        >
          <source src="/assets/hero-bg.webm" type="video/webm" />
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Scrims — bottom fades to surface-ivory (next section color) */}
      <div className="scrim-top pointer-events-none absolute inset-x-0 top-0 z-[1] h-[45%]" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[65%]"
        style={{
          background: `linear-gradient(to top,
            hsl(38 30% 98% / 1) 0%,
            hsl(38 30% 98% / 0.95) 8%,
            hsl(38 30% 98% / 0.85) 18%,
            hsl(38 30% 98% / 0.70) 28%,
            hsl(38 30% 98% / 0.50) 40%,
            hsl(38 30% 98% / 0.30) 52%,
            hsl(38 30% 98% / 0.15) 65%,
            hsl(38 30% 98% / 0.05) 80%,
            hsl(38 30% 98% / 0) 100%
          )`,
        }}
      />

      {/* Reading pillow */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <div className="h-[75%] w-[85%] max-w-4xl rounded-full bg-[radial-gradient(ellipse,hsl(35_20%_96%/0.5)_0%,transparent_70%)]" />
      </div>

      {/* Content — heading centered, body+CTA at bottom */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 text-center">
        {/* Heading group — centered in viewport */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <FadeIn delay={0.1}>
            <p className="text-contrast font-body text-sm font-medium tracking-[0.15em] text-foreground/75 uppercase">
              Rooted in Faith, Made for Childhood
            </p>
          </FadeIn>

          <BlurText
            text="Timeless Treasures for Little Souls"
            className="mt-6 justify-center text-contrast-strong font-heading text-5xl italic leading-[0.85] tracking-[-2px] text-foreground sm:text-6xl lg:text-[5.5rem] lg:tracking-[-3px]"
            delay={0.3}
          />
        </div>

        {/* Body + CTA — anchored at bottom */}
        <div className="pb-16 sm:pb-24">
          <FadeIn delay={0.8}>
            <p className="text-contrast mx-auto max-w-2xl font-body text-base font-light leading-relaxed text-foreground/75 sm:text-lg">
              Beautiful storybooks with traditional Catholic morals. Heirloom
              toys. Wholesome activity workbooks. Modest clothing that celebrates
              the beauty of childhood. All crafted with love for faithful
              families.
            </p>
          </FadeIn>

          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <WoodSurface
              as="a"
              href="#products"
              className="flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              Explore the Collection
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </WoodSurface>
            <a
              href="#story"
              className="text-contrast flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

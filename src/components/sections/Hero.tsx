import { motion } from 'motion/react'
import { ArrowUpRight, Play, ChevronDown } from 'lucide-react'
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
          className="h-full w-full object-cover opacity-55"
        >
          <source src="/assets/hero-bg.webm" type="video/webm" />
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Vignette overlays */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/50 via-transparent to-background" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(35_20%_96%/0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 pt-40 text-center sm:pt-48 lg:pt-56">
        <FadeIn delay={0.1}>
          <p className="text-contrast font-body text-sm font-medium tracking-[0.15em] text-foreground/50 uppercase">
            Rooted in Faith, Made for Childhood
          </p>
        </FadeIn>

        <BlurText
          text="Timeless Treasures for Little Souls"
          className="mt-6 justify-center text-contrast-strong font-heading text-5xl italic leading-[0.85] tracking-[-2px] text-foreground sm:text-6xl lg:text-[5.5rem] lg:tracking-[-3px]"
          delay={0.3}
        />

        <FadeIn delay={0.8}>
          <p className="text-contrast mt-8 max-w-2xl font-body text-base font-light leading-relaxed text-foreground/55 sm:text-lg">
            Beautiful storybooks with traditional Catholic morals. Heirloom
            toys. Wholesome activity workbooks. Modest clothing that celebrates
            the beauty of childhood. All crafted with love for faithful
            families.
          </p>
        </FadeIn>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
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
            className="flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Our Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-auto pb-10 pt-20">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-foreground/25" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-72 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}

import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import { BlurText } from '@/components/animations/BlurText'
import { FadeIn } from '@/components/animations/FadeIn'
import { SectionBadge } from '@/components/SectionBadge'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background video loop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-50"
          poster=""
        >
          <source src="/assets/hero-animation.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Warm vignette overlays — top, radial, bottom */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/20 to-background" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(35_20%_96%/0.7)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 pt-36 text-center sm:pt-44 lg:pt-52">
        <FadeIn delay={0.1}>
          <SectionBadge>
            <span className="mr-2 inline-block rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
              New
            </span>
            Rooted in Faith, Made for Childhood
          </SectionBadge>
        </FadeIn>

        <BlurText
          text="Timeless Treasures for Little Souls"
          className="mt-8 justify-center font-heading text-5xl italic leading-[0.85] tracking-[-2px] text-foreground sm:text-6xl lg:text-[5.5rem] lg:tracking-[-3px]"
          delay={0.3}
        />

        <FadeIn delay={0.8}>
          <p className="mt-8 max-w-2xl font-body text-base font-light leading-relaxed text-foreground/60 sm:text-lg">
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
          <a
            href="#products"
            className="vintage-frame-strong flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
          >
            Explore the Collection
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </a>
          <a
            href="#story"
            className="flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Our Story
          </a>
        </motion.div>

        {/* Faith bar */}
        <div className="mt-auto pb-10 pt-20">
          <FadeIn delay={1.4}>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-foreground/30">
              Loved by faithful families everywhere
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-72 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}

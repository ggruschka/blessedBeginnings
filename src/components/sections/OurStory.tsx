import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { ParallaxSection } from '@/components/animations/ParallaxSection'
import { SectionBadge } from '@/components/SectionBadge'
import { PlaceholderImage } from '@/components/PlaceholderImage'

export function OurStory() {
  return (
    <section id="story" className="relative min-h-[700px] py-32">
      {/* Background illustration with parallax */}
      <div className="absolute inset-0 z-0">
        <ParallaxSection offset={80} speed={0.2} className="h-full">
          <PlaceholderImage
            label="Watercolor — cozy family reading nook"
            className="h-full w-full rounded-none bg-primary/[0.05] opacity-40"
            aspectRatio=""
          />
        </ParallaxSection>
      </div>

      {/* Top + bottom fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <SectionBadge>Our Story</SectionBadge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-heading text-4xl italic leading-[0.9] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Where childhood meets virtue.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 font-body text-base font-light leading-relaxed text-foreground/60 sm:text-lg">
            Every book, toy, workbook, and garment is lovingly created to form
            young hearts in traditional Catholic teaching while celebrating the
            beautiful differences between boys and girls. We believe childhood
            should be filled with wonder, faith, and the kind of beauty that
            lasts.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="#products"
            className="vintage-frame-strong mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
          >
            Explore the Collection
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

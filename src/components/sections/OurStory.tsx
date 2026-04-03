import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { SectionBadge } from '@/components/SectionBadge'
import { WoodSurface } from '@/components/WoodSurface'

export function OurStory() {
  return (
    <section id="story" className="relative flex min-h-screen-safe snap-start flex-col bg-surface-warm">
      {/* Background illustration */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/reading-nook.webp"
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.65 }}
          loading="lazy"
        />
      </div>

      {/* Scrims — top matches surface-warm, bottom matches background (next section) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[45%]"
        style={{
          background: `linear-gradient(to bottom,
            hsl(36 22% 93% / 0.85) 0%,
            hsl(36 22% 93% / 0.60) 30%,
            hsl(36 22% 93% / 0.20) 60%,
            hsl(36 22% 93% / 0) 100%
          )`,
        }}
      />
      <div className="scrim-bottom pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[65%]" />

      {/* Reading pillow */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <div className="h-[80%] w-[90%] max-w-4xl rounded-full bg-[radial-gradient(ellipse,hsl(36_22%_93%/0.55)_0%,transparent_70%)]" />
      </div>

      {/* Content — heading centered, body+CTA at bottom */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 text-center">
        {/* Heading group — centered */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <FadeIn>
            <SectionBadge>Our Story</SectionBadge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-contrast-strong mt-6 font-heading text-4xl italic leading-[0.9] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Where childhood meets virtue.
            </h2>
          </FadeIn>
        </div>

        {/* Body + CTA — anchored at bottom */}
        <div className="pb-16 sm:pb-24">
          <FadeIn delay={0.2}>
            <p className="text-contrast mx-auto max-w-2xl font-body text-base font-light leading-relaxed text-foreground/75 sm:text-lg">
              Every book, toy, workbook, and garment is lovingly created to form
              young hearts in traditional Catholic teaching while celebrating the
              beautiful differences between boys and girls. We believe childhood
              should be filled with wonder, faith, and the kind of beauty that
              lasts.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8">
              <WoodSurface
                as="a"
                href="#products"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
              >
                Explore the Collection
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </WoodSurface>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

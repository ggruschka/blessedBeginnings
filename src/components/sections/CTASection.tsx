import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { WoodSurface } from '@/components/WoodSurface'

export function CTASection() {
  return (
    <section id="cta" className="relative flex min-h-screen-safe snap-start flex-col">
      {/* Background illustration */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/children-praying.webp"
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.65 }}
          loading="lazy"
        />
      </div>

      {/* Scrims */}
      <div className="scrim-top pointer-events-none absolute inset-x-0 top-0 z-[1] h-[45%]" />
      <div className="scrim-bottom pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[65%]" />

      {/* Reading pillow */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <div className="h-[75%] w-[85%] max-w-4xl rounded-full bg-[radial-gradient(ellipse,hsl(35_20%_96%/0.5)_0%,transparent_70%)]" />
      </div>

      {/* Content — heading centered, body+CTA at bottom */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 text-center">
        {/* Heading — centered */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <FadeIn>
            <h2 className="text-contrast-strong font-heading text-4xl italic leading-[0.9] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Begin their story today.
            </h2>
          </FadeIn>
        </div>

        {/* Body + CTA — anchored at bottom */}
        <div className="pb-16 sm:pb-24">
          <FadeIn delay={0.15}>
            <p className="text-contrast mx-auto max-w-xl font-body text-base font-light leading-relaxed text-foreground/65 sm:text-lg">
              Give your children the gift of tradition, faith, and beauty.
              Every treasure is crafted to last a lifetime.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                className="text-contrast rounded-full bg-primary/10 px-8 py-3.5 font-body text-sm font-medium text-foreground/70 transition-colors hover:bg-primary/15 hover:text-foreground"
              >
                Learn About Our Faith
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

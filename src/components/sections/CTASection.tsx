import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { WoodSurface } from '@/components/WoodSurface'

export function CTASection() {
  return (
    <section id="cta" className="relative flex min-h-screen-safe snap-start items-center py-32 sm:py-40">
      {/* Background illustration */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/children-praying.webp"
          alt=""
          className="h-full w-full object-cover opacity-50"
          loading="lazy"
        />
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="text-contrast-strong font-heading text-4xl italic leading-[0.9] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Begin their story today.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-contrast mx-auto mt-8 max-w-xl font-body text-base font-light leading-relaxed text-foreground/60 sm:text-lg">
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

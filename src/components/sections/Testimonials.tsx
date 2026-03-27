import { FadeIn } from '@/components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'
import { SectionBadge } from '@/components/SectionBadge'

const testimonials = [
  {
    quote:
      'These storybooks have become the heart of our bedtime routine. My children ask for them every single night — and I love that they\'re learning virtue through beauty.',
    name: 'Maria T.',
    role: 'Catholic mother of four',
  },
  {
    quote:
      'In a world of plastic and screens, Blessed Beginnings feels like a breath of fresh air. The wooden toys are sturdy, beautiful, and my boys play with them for hours.',
    name: 'Joseph K.',
    role: 'Catholic father of three',
  },
  {
    quote:
      'I cried when I opened the package. Everything was so lovingly made. It reminded me of the toys and books I grew up with — but better, because they point to Christ.',
    name: 'Catherine R.',
    role: 'Catholic mother of two',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <FadeIn>
            <SectionBadge>Hearts That Have Grown</SectionBadge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-heading text-4xl italic leading-[0.9] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              What faithful families say.
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.15}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="vintage-frame flex h-full flex-col rounded-2xl p-8">
                <div className="mb-4 font-heading text-4xl italic text-primary/30">
                  &ldquo;
                </div>
                <blockquote className="flex-1 font-body text-sm font-light italic leading-relaxed text-foreground/70">
                  {t.quote}
                </blockquote>
                <div className="mt-6 border-t border-foreground/10 pt-5">
                  <p className="font-body text-sm font-medium text-foreground">
                    {t.name}
                  </p>
                  <p className="mt-0.5 font-body text-xs font-light text-foreground/45">
                    {t.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

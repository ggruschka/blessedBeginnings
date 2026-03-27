import { BookOpen, Blocks, PenLine, Shirt } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'
import { SectionBadge } from '@/components/SectionBadge'

const values = [
  {
    icon: BookOpen,
    title: 'Moral Formation',
    description: 'Timeless tales that teach virtue and Catholic truth through enchanting stories.',
  },
  {
    icon: Blocks,
    title: 'Joyful Play',
    description: 'Sturdy classics that foster imagination, adventure, and strong character.',
  },
  {
    icon: PenLine,
    title: 'Gentle Learning',
    description: 'Activities that build faith, habits, and skills with patience and care.',
  },
  {
    icon: Shirt,
    title: 'Modest Beauty',
    description: 'Charming pieces that celebrate the beauty of boyhood and girlhood.',
  },
]

export function ValueGrid() {
  return (
    <section className="relative isolate flex min-h-screen snap-start items-center bg-surface-deep py-24 sm:py-32">
      {/* Top gradient blend */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-full h-28 bg-gradient-to-b from-transparent to-surface-deep" />
      {/* Bottom gradient blend */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full h-28 bg-gradient-to-t from-transparent to-surface-deep" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <FadeIn>
            <SectionBadge>
              Why Families Choose Us
            </SectionBadge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-heading text-4xl italic leading-[0.9] tracking-tight text-surface-deep-fg sm:text-5xl lg:text-6xl">
              Every piece tells a story of faith.
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.12}
        >
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group h-full rounded-2xl border border-surface-deep-fg/8 bg-surface-deep-fg/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-deep-fg/10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl italic text-surface-deep-fg">
                  {value.title}
                </h3>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-surface-deep-fg/55">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

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
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <FadeIn>
            <SectionBadge>Why Families Choose Us</SectionBadge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-heading text-4xl italic leading-[0.9] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
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
              <div className="vintage-frame group h-full rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl italic text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-foreground/55">
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

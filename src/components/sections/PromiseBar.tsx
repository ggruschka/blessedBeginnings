import { FadeIn } from '@/components/animations/FadeIn'
import { SectionBadge } from '@/components/SectionBadge'

const values = ['Faith', 'Virtue', 'Family', 'Boyhood', 'Girlhood']

export function PromiseBar() {
  return (
    <section className="relative bg-surface-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <SectionBadge>Built on Timeless Truths</SectionBadge>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
            {values.map((value, i) => (
              <span key={value} className="flex items-center gap-6 sm:gap-10">
                <span className="font-heading text-2xl italic text-primary sm:text-3xl lg:text-4xl">
                  {value}
                </span>
                {i < values.length - 1 && (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-primary/40 sm:block" />
                )}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

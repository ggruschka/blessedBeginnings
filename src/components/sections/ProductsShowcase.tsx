import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { SectionBadge } from '@/components/SectionBadge'
import { PlaceholderImage } from '@/components/PlaceholderImage'

const products = [
  {
    title: 'Storybooks that shape souls',
    description:
      'Enchanting tales filled with Catholic morals, courage, piety, and charity — illustrated in rich, detailed watercolor style reminiscent of classic children\'s literature.',
    cta: 'Browse Books',
    image: 'Storybook mockup — watercolor cover with saint illustration',
    reverse: false,
  },
  {
    title: 'Toys that build character',
    description:
      'Classic wooden and cloth toys from a bygone toy shop — encouraging imaginative play rooted in virtue, adventure, and the beauty of the natural world.',
    cta: 'Discover Toys',
    image: 'Wooden toy set — handcrafted blocks, animals, figurines',
    reverse: true,
  },
]

export function ProductsShowcase() {
  return (
    <section id="products" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <FadeIn>
            <SectionBadge>Our Treasures</SectionBadge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-heading text-4xl italic leading-[0.9] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Heirlooms for the heart.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`flex flex-col items-center gap-10 lg:gap-16 ${
                product.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Text */}
              <FadeIn
                direction={product.reverse ? 'right' : 'left'}
                delay={0.1}
                className="flex-1"
              >
                <h3 className="font-heading text-3xl italic leading-[0.9] tracking-tight text-foreground sm:text-4xl">
                  {product.title}
                </h3>
                <p className="mt-5 max-w-lg font-body text-base font-light leading-relaxed text-foreground/60">
                  {product.description}
                </p>
                <a
                  href="#cta"
                  className="vintage-frame-strong mt-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
                >
                  {product.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                </a>
              </FadeIn>

              {/* Image */}
              <FadeIn
                direction={product.reverse ? 'left' : 'right'}
                delay={i * 0.1 + 0.2}
                className="flex-1"
              >
                <div className="vintage-frame overflow-hidden rounded-2xl">
                  <PlaceholderImage
                    label={product.image}
                    className="rounded-none"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

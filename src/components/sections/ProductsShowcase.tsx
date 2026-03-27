import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { SectionBadge } from '@/components/SectionBadge'
import { WoodSurface } from '@/components/WoodSurface'

const products = [
  {
    title: 'Storybooks that shape souls',
    description:
      'Enchanting tales filled with Catholic morals, courage, piety, and charity — illustrated in rich, detailed watercolor style reminiscent of classic children\'s literature.',
    cta: 'Browse Books',
    image: '/assets/storybook.webp',
    imageAlt: 'Open watercolor storybook with a boy and lamb illustration',
    reverse: false,
  },
  {
    title: 'Toys that build character',
    description:
      'Classic wooden and cloth toys from a bygone toy shop — encouraging imaginative play rooted in virtue, adventure, and the beauty of the natural world.',
    cta: 'Discover Toys',
    image: '/assets/toys.webp',
    imageAlt: 'Handcrafted wooden Noah\'s Ark with animal figurines on linen cloth',
    reverse: true,
  },
]

function ProductRow({
  product,
  index,
}: {
  product: (typeof products)[number]
  index: number
}) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Text enters from its side, image from the opposite
  const textX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [product.reverse ? 40 : -40, 0, 0, product.reverse ? -20 : 20]
  )
  const imgX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [product.reverse ? -60 : 60, 0, 0, product.reverse ? 20 : -20]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.94, 1, 1, 0.97])

  const animated = !prefersReducedMotion

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center gap-10 lg:gap-16 ${
        product.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
      style={animated ? { opacity, scale } : undefined}
    >
      <motion.div
        className="flex-1"
        style={animated ? { x: textX } : undefined}
      >
        <h3 className="font-heading text-3xl italic leading-[0.9] tracking-tight text-foreground sm:text-4xl">
          {product.title}
        </h3>
        <p className="mt-5 max-w-lg font-body text-base font-light leading-relaxed text-foreground/60">
          {product.description}
        </p>
        <WoodSurface
          as="a"
          href="#cta"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
        >
          {product.cta}
          <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
        </WoodSurface>
      </motion.div>

      <motion.div
        className="flex-1"
        style={animated ? { x: imgX } : undefined}
      >
        <div className="vintage-frame overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="aspect-[4/3] w-full object-cover"
            loading={index > 0 ? 'lazy' : undefined}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

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

        <div className="mt-14 space-y-28 lg:space-y-36">
          {products.map((product, i) => (
            <ProductRow key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

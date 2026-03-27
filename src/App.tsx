import { Divider } from '@/components/Divider'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { PromiseBar } from '@/components/sections/PromiseBar'
import { OurStory } from '@/components/sections/OurStory'
import { ProductsShowcase } from '@/components/sections/ProductsShowcase'
import { ValueGrid } from '@/components/sections/ValueGrid'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Paper texture overlay */}
      <div className="paper-texture" />

      <Navbar />

      <main>
        <Hero />
        <PromiseBar />
        <Divider />
        <OurStory />
        <Divider />
        <ProductsShowcase />
        <Divider />
        <ValueGrid />
        <Divider />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

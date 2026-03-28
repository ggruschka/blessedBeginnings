import { useState, useEffect, useCallback } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { woodStyle, WoodGrainOverlay } from '@/components/WoodSurface'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Books', href: '#products' },
  { label: 'Toys', href: '#products' },
  { label: 'Workbooks', href: '#products' },
  { label: 'Clothing', href: '#products' },
  { label: 'Our Faith', href: '#story' },
]

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
      <motion.span
        className="block h-[1.5px] w-4 rounded-full bg-foreground/70"
        animate={isOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <motion.span
        className="block h-[1.5px] w-4 rounded-full bg-foreground/70"
        animate={isOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  )
}


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  const handleClose = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, handleClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Header bar — liquid glass on scroll */}
      <motion.header
        className="fixed left-0 right-0 top-4 z-50 px-4"
        animate={scrolled ? {
          backgroundColor: 'rgba(255, 248, 235, 0.1)',
          backdropFilter: 'blur(2px)',
          boxShadow: '0 4px 30px rgba(139, 69, 19, 0.06)',
          borderColor: 'rgba(255, 255, 255, 0.25)',
        } : {
          backgroundColor: 'rgba(255, 248, 235, 0)',
          backdropFilter: 'blur(0px)',
          boxShadow: '0 0px 0px rgba(139, 69, 19, 0)',
          borderColor: 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          borderRadius: '9999px',
          maxWidth: '72rem',
          margin: '0 auto',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-1.5">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-2.5">
            <img
              src="/assets/logo-48.png"
              alt="Blessed Beginnings"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="hidden font-heading text-lg italic text-foreground sm:inline">
              Blessed Beginnings
            </span>
          </a>

          {/* Desktop Nav — Wood pill */}
          <div
            className="relative hidden overflow-hidden rounded-full lg:block"
            style={woodStyle}
          >
            <WoodGrainOverlay />
            <ul className="relative z-10 flex items-center gap-1 px-1.5 py-1.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={cn(
                      'rounded-full px-4 py-1.5 font-body text-sm font-medium text-foreground/80',
                      'transition-all duration-200 hover:bg-white/25 hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA — Wood button */}
          <a
            href="#cta"
            className="relative hidden overflow-hidden rounded-full px-5 py-2.5 font-body text-sm font-medium text-foreground lg:flex items-center"
            style={woodStyle}
          >
            <WoodGrainOverlay />
            <span className="relative z-10 flex items-center gap-1">
              Explore
              <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-primary" />
            </span>
          </a>

          {/* Mobile Menu Trigger — Wood */}
          <button
            className="relative overflow-hidden rounded-full p-2.5 lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            style={woodStyle}
          >
            <WoodGrainOverlay />
            <span className="relative z-10">
              <HamburgerIcon isOpen={isOpen} />
            </span>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Nav Overlay — Glass */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col lg:hidden"
            style={{
              background: 'rgba(255, 248, 235, 0.85)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-1 flex-col justify-center px-10">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.05,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={handleClose}
                      className="block py-4 font-heading text-3xl italic text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
              >
                <a
                  href="#cta"
                  onClick={handleClose}
                  className="relative inline-flex overflow-hidden items-center gap-2 rounded-full px-8 py-4 font-body text-base font-semibold text-foreground"
                  style={woodStyle}
                >
                  <WoodGrainOverlay />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore the Collection
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

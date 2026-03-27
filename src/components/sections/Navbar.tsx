import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Books', href: '#products' },
  { label: 'Toys', href: '#products' },
  { label: 'Workbooks', href: '#products' },
  { label: 'Clothing', href: '#products' },
  { label: 'Our Faith', href: '#story' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
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

        {/* Desktop Nav */}
        <div className="vintage-frame hidden rounded-full px-1.5 py-1.5 lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    'rounded-full px-4 py-1.5 font-body text-sm font-medium text-foreground/80',
                    'transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <Button
          className="vintage-frame-strong hidden rounded-full border-none px-5 py-2.5 font-body text-sm font-medium text-foreground shadow-none lg:flex"
          variant="ghost"
          asChild
        >
          <a href="#cta">
            Explore
            <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-primary" />
          </a>
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="vintage-frame rounded-full p-2.5 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-foreground/70" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 border-none bg-background p-0"
          >
            <div className="flex h-full flex-col px-6 py-8">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-heading text-xl italic text-foreground">
                  Blessed Beginnings
                </span>
                <SheetClose asChild>
                  <button aria-label="Close menu">
                    <X className="h-5 w-5 text-foreground/50" />
                  </button>
                </SheetClose>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <SheetClose asChild>
                      <a
                        href={link.href}
                        className="block rounded-xl px-4 py-3 font-body text-base font-medium text-foreground/80 transition-colors hover:bg-foreground/5"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <SheetClose asChild>
                  <a
                    href="#cta"
                    className="vintage-frame-strong flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold text-foreground"
                  >
                    Explore the Collection
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </a>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

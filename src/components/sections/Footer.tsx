const footerLinks = [
  { label: 'Shop', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Our Faith', href: '#story' },
  { label: 'Contact', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-surface-deep py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-48.png"
            alt="Blessed Beginnings"
            width={32}
            height={32}
            className="h-8 w-8 object-contain brightness-[1.8]"
          />
          <p className="font-body text-xs font-light text-surface-deep-fg/60">
            &copy; 2026 Blessed Beginnings. All rights reserved.
          </p>
        </div>

        <nav>
          <ul className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-xs font-light text-surface-deep-fg/60 transition-colors hover:text-surface-deep-fg/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

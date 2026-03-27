import { cn } from '@/lib/utils'

interface SectionBadgeProps {
  children: React.ReactNode
  className?: string
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        'vintage-frame inline-block rounded-full px-4 py-1.5 font-body text-xs font-medium tracking-wide text-foreground/80',
        className
      )}
    >
      {children}
    </span>
  )
}

import { cn } from '@/lib/utils'

const woodGrainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.12 0.015' numOctaves='5' seed='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`

const woodBase = `linear-gradient(92deg, #f0e0c8 0%, #eddcc2 12%, #e8d5b7 24%, #ecdbc0 36%, #f0e0c8 48%, #e5d1b2 58%, #e8d5b7 70%, #ecdbc0 82%, #f0e0c8 100%)`

export const woodStyle: React.CSSProperties = {
  background: woodBase,
  border: '1px solid rgba(212, 184, 150, 0.35)',
  boxShadow:
    'inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(200, 168, 130, 0.15), 0 1px 3px rgba(139, 69, 19, 0.08)',
}

export function WoodGrainOverlay() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          backgroundImage: woodGrainSvg,
          opacity: 0.06,
          mixBlendMode: 'multiply',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[45%] rounded-t-[inherit]"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.28) 0%, transparent 100%)',
        }}
      />
    </>
  )
}

interface WoodSurfaceProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'span' | 'a'
  href?: string
  onClick?: React.MouseEventHandler
}

export function WoodSurface({
  children,
  className,
  as: Tag = 'div',
  href,
  onClick,
}: WoodSurfaceProps) {
  return (
    <Tag
      className={cn('relative overflow-hidden', className)}
      style={woodStyle}
      {...(href ? { href } : {})}
      {...(onClick ? { onClick } : {})}
    >
      <WoodGrainOverlay />
      <span className="relative z-10 flex items-center gap-[inherit]">{children}</span>
    </Tag>
  )
}

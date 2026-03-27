import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  label: string
  className?: string
  aspectRatio?: string
}

export function PlaceholderImage({
  label,
  className,
  aspectRatio = 'aspect-video',
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-2xl bg-primary/10',
        aspectRatio,
        className
      )}
    >
      <div className="px-6 text-center">
        <div className="mb-2 text-3xl opacity-30">&#x1f3a8;</div>
        <p className="font-body text-xs font-medium tracking-wide text-foreground/30 uppercase">
          {label}
        </p>
      </div>
    </div>
  )
}

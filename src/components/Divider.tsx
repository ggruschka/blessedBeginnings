import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={cn('flex justify-center py-4', className)}>
      <img
        src="/assets/divider.webp"
        alt=""
        role="presentation"
        className="h-10 w-full max-w-3xl object-contain opacity-60 sm:h-14"
        loading="lazy"
      />
    </div>
  )
}

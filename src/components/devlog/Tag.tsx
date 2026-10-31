import { cn } from '@/lib/utils'

// A small pill for devlog tags. `active` fills it with pomegranate;
// otherwise it is outlined. `onBand` is for tags sitting on the ink header.
export function Tag({
  active = false,
  onBand = false,
  className,
  children,
}: {
  active?: boolean
  onBand?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex w-fit shrink-0 cursor-pointer items-center rounded-full border-2 px-3.5 py-1 text-sm font-bold whitespace-nowrap transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-0.5',
        active
          ? 'border-pom bg-pom text-ink'
          : onBand
            ? 'border-paper/25 text-paper hover:border-pom hover:text-pom'
            : 'border-border text-foreground hover:border-pom hover:text-pom',
        className,
      )}
    >
      {children}
    </span>
  )
}

import { cn } from '@/lib/utils'

// ─── Kilim Motifs ───────────────────────────────────────────────────────────
//
// The graphic language of the site: a handful of motifs found in Kurdish
// kilim weaving, drawn on a 100×100 grid so they scale cleanly. Colours are
// passed in as CSS values, so each motif can take any two of the palette.

export type MotifKind = 'eye' | 'cross' | 'star' | 'mountain' | 'comb'

interface MotifProps {
  kind: MotifKind
  a: string
  b: string
  className?: string
}

export function Motif({ kind, a, b, className }: MotifProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={cn('block', className)}>
      {kind === 'eye' && (
        <>
          <path d="M50 0 100 50 50 100 0 50Z" fill={a} />
          <path d="M50 20 80 50 50 80 20 50Z" fill={b} />
          <path d="M50 38 62 50 50 62 38 50Z" fill={a} />
        </>
      )}
      {kind === 'cross' && (
        <>
          <path d="M35 0h30v35h35v30H65v35H35V65H0V35h35Z" fill={a} />
          <path d="M50 30 70 50 50 70 30 50Z" fill={b} />
        </>
      )}
      {kind === 'star' && (
        <>
          <rect x="15" y="15" width="70" height="70" fill={a} />
          <rect x="15" y="15" width="70" height="70" fill={a} transform="rotate(45 50 50)" />
          <path d="M50 26 74 50 50 74 26 50Z" fill={b} />
          <rect x="44" y="44" width="12" height="12" fill={a} />
        </>
      )}
      {kind === 'mountain' && (
        <>
          <path d="M0 100 50 0 100 100Z" fill={a} />
          <path d="M22 100 50 44 78 100Z" fill={b} />
        </>
      )}
      {kind === 'comb' && (
        <>
          <rect x="0" y="0" width="100" height="34" fill={a} />
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M${i * 20} 34h20l-10 22Z`} fill={a} />
          ))}
          <rect x="0" y="66" width="100" height="34" fill={b} />
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M${i * 20} 66h20l-10 -22Z`} fill={b} />
          ))}
        </>
      )}
    </svg>
  )
}

// A slowly turning ring of small diamonds, drawn around the portrait.
export function MotifRing({
  className,
  colors = ['var(--saffron)', 'var(--jade)', 'var(--pom)', 'var(--paper)'],
}: {
  className?: string
  colors?: string[]
}) {
  const count = 24
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={cn('block', className)}>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2
        const x = 100 + Math.cos(angle) * 92
        const y = 100 + Math.sin(angle) * 92
        const s = i % 2 === 0 ? 5 : 3
        return (
          <path
            key={i}
            d={`M${x} ${y - s} ${x + s} ${y} ${x} ${y + s} ${x - s} ${y}Z`}
            fill={colors[i % colors.length]}
          />
        )
      })}
    </svg>
  )
}

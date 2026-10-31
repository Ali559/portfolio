'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'

import { Floater, type FloaterSpec } from '@/components/home/Floaters'

// ─── Devlog Band ────────────────────────────────────────────────────────────
//
// The ink header shared by the devlog index and each entry: the same field
// and drifting motifs as the home hero, with a woven strip along the bottom.
// Its children rise in one after another on load.

const floaters: FloaterSpec[] = [
  {
    kind: 'star',
    start: '80%',
    top: '22%',
    size: 'w-16 md:w-24',
    depth: 40,
    a: 'var(--pom)',
    b: 'var(--ink)',
    rotate: 12,
  },
  {
    kind: 'eye',
    start: '92%',
    top: '58%',
    size: 'w-10 md:w-14',
    depth: -30,
    a: 'var(--paper)',
    b: 'var(--pom)',
    rotate: 0,
  },
  {
    kind: 'cross',
    start: '68%',
    top: '64%',
    size: 'w-10 md:w-12',
    depth: 55,
    a: 'color-mix(in oklab, var(--paper) 35%, transparent)',
    b: 'var(--pom)',
    rotate: -8,
  },
]

export function DevlogBand({ children }: { children: React.ReactNode }) {
  // Pointer position, normalised to -0.5…0.5 across the band, smoothed.
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const px = useSpring(rawX, { stiffness: 60, damping: 20 })
  const py = useSpring(rawY, { stiffness: 60, damping: 20 })

  return (
    <section
      className="relative overflow-hidden bg-band text-paper"
      style={{ '--link-accent': 'var(--pom)' } as React.CSSProperties}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        rawX.set((e.clientX - r.left) / r.width - 0.5)
        rawY.set((e.clientY - r.top) / r.height - 0.5)
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 end-[-15%] h-[140%] w-[70%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--pom)_24%,transparent),transparent)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {floaters.map((f, i) => (
          <Floater key={f.kind} f={f} index={i} px={px} py={py} />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="shown"
        transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
        className="relative mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 lg:px-8"
      >
        {children}
      </motion.div>

      <div aria-hidden className="kilim-strip animate-kilim" />
    </section>
  )
}

/** A child of the band that rises into place in the load sequence. */
export function Rise({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

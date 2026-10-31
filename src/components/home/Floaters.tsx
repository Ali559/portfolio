'use client'

import { motion, useTransform, type MotionValue } from 'framer-motion'

import { Motif, type MotifKind } from '@/components/home/Kilim'
import { cn } from '@/lib/utils'

// ─── Floaters ───────────────────────────────────────────────────────────────
//
// Woven motifs scattered over an ink band. They spin in on load, bob gently,
// and drift with the pointer at different depths. Shared by the home hero
// and the devlog header.

/** Where a motif sits (logical start/top, in %), its size, how strongly it
 *  follows the pointer, and its two colours. */
export interface FloaterSpec {
  kind: MotifKind
  start: string
  top: string
  size: string
  depth: number
  a: string
  b: string
  rotate: number
}

const spring = { type: 'spring', stiffness: 260, damping: 32 } as const

export function Floater({
  f,
  index,
  px,
  py,
}: {
  f: FloaterSpec
  index: number
  px: MotionValue<number>
  py: MotionValue<number>
}) {
  const x = useTransform(px, (v) => v * f.depth)
  const y = useTransform(py, (v) => v * f.depth)
  return (
    <motion.div
      className={cn('absolute', f.size)}
      style={{ insetInlineStart: f.start, top: f.top, x, y }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: f.rotate }}
        transition={{ ...spring, delay: 0.25 + index * 0.08 }}
      >
        <div className="animate-bob" style={{ animationDelay: `${index * -1.3}s` }}>
          <Motif
            kind={f.kind}
            a={f.a}
            b={f.b}
            className="w-full drop-shadow-[0_10px_20px_rgb(0_0_0/0.35)]"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

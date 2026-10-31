'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import type { TocHeading } from '@/lib/markdown'
import { useActiveHeading } from './useActiveHeading'

// ─── Table of Contents ──────────────────────────────────────────────────────
//
// Two entry points sharing the same active-section tracking: a collapsible
// disclosure for mobile (rendered inline, near the top of the article) and
// a sticky sidebar for desktop (rendered alongside the article). Both
// return null for short articles, where a TOC would add clutter, not value.

function TocLinks({
  headings,
  activeId,
  marker,
  onNavigate,
}: {
  headings: TocHeading[]
  activeId: string | null
  /** Unique per list, so the sliding marker never jumps between lists. */
  marker: string
  onNavigate?: () => void
}) {
  return (
    <ul className="space-y-2.5">
      {headings.map((h) => {
        const active = activeId === h.id
        return (
          <li key={h.id} className={cn('relative', h.depth === 3 && 'ms-4')}>
            {active && (
              <motion.span
                layoutId={marker}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                aria-hidden
                className="absolute -start-[1.4rem] top-[0.55em] size-2.5 rotate-45 rounded-[2px] bg-pom"
              />
            )}
            <a
              href={`#${h.id}`}
              onClick={onNavigate}
              className={cn(
                'block py-0.5 text-muted-foreground transition-colors hover:text-foreground',
                active && 'font-bold text-foreground',
              )}
            >
              {h.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export function TableOfContentsMobile({ headings }: { headings: TocHeading[] }) {
  const activeId = useActiveHeading(headings)
  const [open, setOpen] = useState(false)

  if (headings.length < 3) return null

  return (
    <nav aria-label="Table of contents" className="mb-10 rounded-2xl bg-muted text-sm lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-4 font-bold"
      >
        On this page
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          aria-hidden
        />
      </button>
      {open && (
        <div className="px-5 pb-4 ps-10">
          <TocLinks
            headings={headings}
            activeId={activeId}
            marker="toc-mobile"
            onNavigate={() => setOpen(false)}
          />
        </div>
      )}
    </nav>
  )
}

export function TableOfContentsDesktop({ headings }: { headings: TocHeading[] }) {
  const activeId = useActiveHeading(headings)

  if (headings.length < 3) return null

  return (
    <nav aria-label="Table of contents" className="sticky top-28 hidden text-sm lg:block">
      <p className="mb-4 text-base font-extrabold text-foreground">On this page</p>
      <div className="border-s-2 border-border ps-5">
        <TocLinks headings={headings} activeId={activeId} marker="toc-desktop" />
      </div>
    </nav>
  )
}

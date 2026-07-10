'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
  onNavigate,
}: {
  headings: TocHeading[]
  activeId: string | null
  onNavigate?: () => void
}) {
  return (
    <ul className="space-y-2">
      {headings.map((h) => (
        <li key={h.id} className={h.depth === 3 ? 'ms-4' : ''}>
          <a
            href={`#${h.id}`}
            onClick={onNavigate}
            className={cn(
              'block py-0.5 text-muted-foreground transition-colors hover:text-foreground',
              activeId === h.id && 'font-medium text-primary',
            )}
          >
            {h.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function TableOfContentsMobile({ headings }: { headings: TocHeading[] }) {
  const activeId = useActiveHeading(headings)
  const [open, setOpen] = useState(false)

  if (headings.length < 3) return null

  return (
    <nav
      aria-label="Table of contents"
      className="mb-8 rounded-xl border border-border text-sm lg:hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 font-medium"
      >
        On this page
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          aria-hidden
        />
      </button>
      {open && (
        <div className="border-t border-border px-4 py-3">
          <TocLinks headings={headings} activeId={activeId} onNavigate={() => setOpen(false)} />
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
      <p className="mb-3 font-semibold text-foreground">On this page</p>
      <div className="border-s border-border ps-4">
        <TocLinks headings={headings} activeId={activeId} />
      </div>
    </nav>
  )
}

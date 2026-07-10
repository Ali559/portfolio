import { useEffect, useState } from 'react'

import type { TocHeading } from '@/lib/markdown'

/**
 * Tracks which heading is currently in view using IntersectionObserver, so
 * the table of contents can highlight the active section without attaching
 * a scroll listener.
 */
export function useActiveHeading(headings: TocHeading[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (headings.length === 0) return

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-100px 0px -70% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [headings])

  return activeId
}

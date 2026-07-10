import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently in view, using
 * IntersectionObserver rather than a scroll listener. Pass `enabled: false`
 * to skip observing entirely (e.g. when the section ids don't exist on the
 * current page, like on `/devlog`).
 */
export function useScrollSpy(ids: string[], enabled: boolean): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)
  const idsKey = ids.join(',')

  useEffect(() => {
    if (!enabled || ids.length === 0) {
      setActiveId(null)
      return
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Multiple sections can intersect at once while scrolling; prefer
        // whichever one is closest to the top of the viewport.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -55% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // `idsKey` (a joined string) is the real dependency here, not `ids`
    // itself — comparing the array by reference would re-run this effect
    // on every render even when the section ids haven't actually changed.
  }, [enabled, idsKey]) // eslint-disable-line react-hooks/exhaustive-deps

  return activeId
}

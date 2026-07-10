import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import type { DevlogEntry } from '@/lib/devlog'

export function DevlogNav({
  previous,
  next,
}: {
  previous: DevlogEntry | null
  next: DevlogEntry | null
}) {
  if (!previous && !next) return null

  return (
    <nav aria-label="More devlog entries" className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/devlog/${previous.slug}`}
          className="group flex flex-col rounded-xl border border-border p-4 transition-colors hover:bg-secondary/40"
        >
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Previous
          </span>
          <span className="mt-1 font-medium transition-colors group-hover:text-primary">
            {previous.frontmatter.title}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/devlog/${next.slug}`}
          className="group flex flex-col rounded-xl border border-border p-4 text-right transition-colors hover:bg-secondary/40 sm:items-end"
        >
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Next
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
          <span className="mt-1 font-medium transition-colors group-hover:text-primary">
            {next.frontmatter.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}

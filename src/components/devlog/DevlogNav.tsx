import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import type { DevlogEntry } from '@/lib/devlog'

const card =
  'group flex flex-col rounded-[1.5rem] p-6 transition-transform duration-300 hover:-translate-y-1'

export function DevlogNav({
  previous,
  next,
}: {
  previous: DevlogEntry | null
  next: DevlogEntry | null
}) {
  if (!previous && !next) return null

  return (
    <nav aria-label="More devlog entries" className="mt-20 grid gap-4 sm:grid-cols-2">
      {previous ? (
        <Link href={`/devlog/${previous.slug}`} className={`${card} bg-grape text-paper`}>
          <span className="flex items-center gap-1.5 text-sm font-bold opacity-80">
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden
            />
            Previous
          </span>
          <span className="mt-2 text-xl font-extrabold">{previous.frontmatter.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/devlog/${next.slug}`}
          className={`${card} bg-jade text-end text-ink sm:items-end`}
        >
          <span className="flex items-center gap-1.5 text-sm font-bold opacity-80">
            Next
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </span>
          <span className="mt-2 text-xl font-extrabold">{next.frontmatter.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}

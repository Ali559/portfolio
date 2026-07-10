import type { Metadata } from 'next'
import Link from 'next/link'

import { getAllDevlogEntries, getAllDevlogTags, formatDevlogDate } from '@/lib/devlog'
import { estimateReadingTime } from '@/lib/markdown'
import { siteUrl } from '@/lib/site'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// ─── Devlog Index Page ──────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Devlog',
  description: "Write-ups on projects I've built, how they work, and what I learned building them.",
  alternates: { canonical: `${siteUrl}/devlog` },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/devlog`,
    title: 'Devlog | Ali Barznji',
    description:
      "Write-ups on projects I've built, how they work, and what I learned building them.",
  },
}

export default async function DevlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>
}) {
  const { tag } = await searchParams
  const entries = getAllDevlogEntries()
  const allTags = getAllDevlogTags()
  const activeTag = tag?.trim() || null
  const visibleEntries = activeTag
    ? entries.filter((entry) => entry.frontmatter.tags.includes(activeTag))
    : entries

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Devlog</h1>
      <p className="mt-2 text-muted-foreground">
        {"Write-ups on projects I've built, how they work, and what I learned building them."}
      </p>

      {allTags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/devlog">
            <Badge variant={activeTag ? 'outline' : 'default'} className="cursor-pointer">
              All
            </Badge>
          </Link>
          {allTags.map((t) => (
            <Link key={t} href={`/devlog?tag=${encodeURIComponent(t)}`}>
              <Badge variant={activeTag === t ? 'default' : 'outline'} className="cursor-pointer">
                {t}
              </Badge>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 space-y-6">
        {visibleEntries.map((entry) => {
          const formattedDate = formatDevlogDate(entry.frontmatter.date)
          const readingTime = estimateReadingTime(entry.content)
          return (
            <Link
              key={entry.slug}
              href={`/devlog/${entry.slug}`}
              className="block rounded-xl border border-border p-5 transition-colors hover:bg-secondary/40"
            >
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {formattedDate && <span>{formattedDate}</span>}
                {formattedDate && <span aria-hidden>·</span>}
                <span>{readingTime} min read</span>
              </div>
              <h2 className="mt-1 text-xl font-semibold">{entry.frontmatter.title}</h2>
              {entry.frontmatter.summary && (
                <p className="mt-2 text-muted-foreground">{entry.frontmatter.summary}</p>
              )}
              {entry.frontmatter.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.frontmatter.tags.map((t) => (
                    <span
                      key={t}
                      className={cn(
                        'rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground',
                        activeTag === t && 'bg-primary text-primary-foreground',
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          )
        })}

        {visibleEntries.length === 0 && (
          <p className="text-muted-foreground">
            {activeTag ? `No devlog entries tagged "${activeTag}" yet.` : 'No devlog entries yet.'}
          </p>
        )}
      </div>
    </div>
  )
}

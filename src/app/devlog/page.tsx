import type { Metadata } from 'next'
import Link from 'next/link'

import { getAllDevlogEntries, getAllDevlogTags, formatDevlogDate } from '@/lib/devlog'
import { estimateReadingTime } from '@/lib/markdown'
import { siteUrl } from '@/lib/site'
import { DevlogBand, Rise } from '@/components/devlog/DevlogBand'
import { EntryCard } from '@/components/devlog/EntryCard'
import { Tag } from '@/components/devlog/Tag'

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
    <div dir="ltr" lang="en">
      <DevlogBand>
        <Rise>
          <h1 className="text-[clamp(4rem,12vw,9.5rem)] leading-[0.85] font-extrabold tracking-[-0.04em] [font-stretch:75%]">
            Devlog
          </h1>
        </Rise>
        <Rise>
          <p className="mt-6 max-w-[34rem] text-lg text-on-band-muted md:text-xl">
            {"Write-ups on projects I've built, how they work, and what I learned building them."}
          </p>
        </Rise>
        {allTags.length > 0 && (
          <Rise className="mt-9 flex max-w-[44rem] flex-wrap gap-2">
            <Link href="/devlog">
              <Tag onBand active={!activeTag}>
                All
              </Tag>
            </Link>
            {allTags.map((t) => (
              <Link key={t} href={`/devlog?tag=${encodeURIComponent(t)}`}>
                <Tag onBand active={activeTag === t}>
                  {t}
                </Tag>
              </Link>
            ))}
          </Rise>
        )}
      </DevlogBand>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <ul className="space-y-6">
          {visibleEntries.map((entry, i) => {
            const formattedDate = formatDevlogDate(entry.frontmatter.date)
            const readingTime = estimateReadingTime(entry.content)
            return (
              <EntryCard
                key={entry.slug}
                index={i}
                href={`/devlog/${entry.slug}`}
                title={entry.frontmatter.title}
                summary={entry.frontmatter.summary}
                meta={[formattedDate, `${readingTime} min read`].filter(Boolean).join(', ')}
                tags={entry.frontmatter.tags}
              />
            )
          })}
        </ul>

        {visibleEntries.length === 0 && (
          <p className="text-lg text-muted-foreground">
            {activeTag ? `Nothing tagged "${activeTag}" yet. ` : 'No write-ups yet.'}
            {activeTag && (
              <Link href="/devlog" className="ink-link">
                See every write-up
              </Link>
            )}
          </p>
        )}
      </div>
    </div>
  )
}

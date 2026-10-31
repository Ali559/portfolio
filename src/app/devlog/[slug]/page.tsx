import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ExternalLink } from 'lucide-react'

import {
  getAllDevlogSlugs,
  getDevlogEntry,
  getAdjacentDevlogEntries,
  formatDevlogDate,
} from '@/lib/devlog'
import { estimateReadingTime, extractHeadings, stripLeadingHeading } from '@/lib/markdown'
import { siteUrl } from '@/lib/site'
import { Breadcrumbs } from '@/components/devlog/Breadcrumbs'
import { DevlogBand, Rise } from '@/components/devlog/DevlogBand'
import { ReadingProgress } from '@/components/devlog/ReadingProgress'
import { TagList } from '@/components/devlog/TagList'
import { DevlogNav } from '@/components/devlog/DevlogNav'
import { TableOfContentsMobile, TableOfContentsDesktop } from '@/components/devlog/TableOfContents'
import { MarkdownContent } from '@/components/devlog/MarkdownContent'
import { YouTubeEmbed } from '@/components/devlog/YouTubeEmbed'

// ─── Devlog Entry Page ──────────────────────────────────────────────────────
//
// Renders a single devlog entry at /devlog/[slug]. Static params are
// generated from every .md file in content/devlog, so each entry is
// statically built at deploy time (no runtime file reads in production).

export function generateStaticParams() {
  return getAllDevlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = getDevlogEntry(slug)
  if (!entry) return {}

  const { frontmatter } = entry
  const url = `${siteUrl}/devlog/${slug}`

  // Only override the share-card image when a post explicitly sets one in
  // its frontmatter. Otherwise, leave `images` unset so this segment's
  // generated `opengraph-image`/`twitter-image` (title, tags, reading time)
  // is used instead of a static fallback.
  const explicitImage = frontmatter.image ? [{ url: frontmatter.image }] : null

  return {
    title: frontmatter.title,
    description: frontmatter.summary || undefined,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: frontmatter.title,
      description: frontmatter.summary || undefined,
      publishedTime: frontmatter.date || undefined,
      tags: frontmatter.tags,
      ...(explicitImage ? { images: explicitImage } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.summary || undefined,
      ...(explicitImage ? { images: explicitImage.map((i) => i.url) } : {}),
    },
  }
}

export default async function DevlogEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getDevlogEntry(slug)
  if (!entry) notFound()

  const { frontmatter, content } = entry
  const formattedDate = formatDevlogDate(frontmatter.date)
  const readingTime = estimateReadingTime(content)
  const body = stripLeadingHeading(content)
  const headings = extractHeadings(body)
  const { previous, next } = getAdjacentDevlogEntries(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.summary || undefined,
    datePublished: frontmatter.date || undefined,
    dateModified: frontmatter.date || undefined,
    url: `${siteUrl}/devlog/${slug}`,
    author: { '@type': 'Person', name: 'Ali Barznji', url: siteUrl },
    keywords: frontmatter.tags?.length ? frontmatter.tags.join(', ') : undefined,
    image: frontmatter.image
      ? `${siteUrl}${frontmatter.image}`
      : `${siteUrl}/devlog/${slug}/opengraph-image`,
  }

  return (
    <div dir="ltr" lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ReadingProgress />

      <DevlogBand>
        <Rise>
          <Breadcrumbs title={frontmatter.title} />
        </Rise>
        <Rise>
          <h1 className="max-w-[18ch] text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.92] font-extrabold tracking-[-0.035em] [font-stretch:78%]">
            {frontmatter.title}
          </h1>
        </Rise>
        <Rise>
          <p className="mt-6 text-base font-bold text-on-band-muted">
            {formattedDate && <time dateTime={frontmatter.date}>{formattedDate}</time>}
            {formattedDate && ', '}
            {readingTime} min read
          </p>
          {frontmatter.summary && (
            <p className="mt-4 max-w-[38rem] text-lg text-on-band-muted md:text-xl">
              {frontmatter.summary}
            </p>
          )}
        </Rise>
        <Rise className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          {frontmatter.liveUrl && (
            <a
              href={frontmatter.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pom px-5 py-2.5 font-bold text-ink transition-transform hover:-translate-y-0.5 hover:rotate-[-1.5deg]"
            >
              Open the app
              <ExternalLink size={16} aria-hidden />
            </a>
          )}
          <TagList tags={frontmatter.tags} onBand />
        </Rise>
      </DevlogBand>

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 md:pt-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-16">
          <article className="min-w-0">
            {frontmatter.video && (
              <div className="mb-14 me-3 rounded-2xl shadow-[12px_12px_0_var(--saffron)]">
                <YouTubeEmbed url={frontmatter.video} title={frontmatter.title} />
              </div>
            )}

            <TableOfContentsMobile headings={headings} />

            {body.trim() ? (
              <div
                className="devlog-prose prose prose-lg max-w-[44rem] dark:prose-invert"
                style={{ '--link-accent': 'var(--saffron)' } as React.CSSProperties}
              >
                <MarkdownContent content={body} />
              </div>
            ) : (
              <p className="text-muted-foreground">This entry doesn&apos;t have any content yet.</p>
            )}

            <DevlogNav previous={previous} next={next} />
          </article>

          <aside>
            <TableOfContentsDesktop headings={headings} />
          </aside>
        </div>
      </div>
    </div>
  )
}

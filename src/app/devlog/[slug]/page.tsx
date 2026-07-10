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
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs title={frontmatter.title} />

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-12">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{frontmatter.title}</h1>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {formattedDate && <time dateTime={frontmatter.date}>{formattedDate}</time>}
              {formattedDate && <span aria-hidden>·</span>}
              <span>{readingTime} min read</span>
            </div>

            {frontmatter.summary && (
              <p className="mt-4 text-lg text-muted-foreground">{frontmatter.summary}</p>
            )}

            <TagList tags={frontmatter.tags} className="mt-5" />

            {frontmatter.liveUrl && (
              <a
                href={frontmatter.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View live app
                <ExternalLink size={14} aria-hidden />
              </a>
            )}
          </header>

          {frontmatter.video && (
            <div className="mb-10">
              <YouTubeEmbed url={frontmatter.video} title={frontmatter.title} />
            </div>
          )}

          <TableOfContentsMobile headings={headings} />

          {body.trim() ? (
            <div className="prose prose-neutral max-w-none dark:prose-invert">
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
  )
}

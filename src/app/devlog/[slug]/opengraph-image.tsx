import { ImageResponse } from 'next/og'

import { OgFrame, OgPill, OgTag } from '@/components/og/OgFrame'
import { loadOgAssets, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllDevlogSlugs, getDevlogEntry } from '@/lib/devlog'
import { estimateReadingTime } from '@/lib/markdown'

export const alt = 'Devlog entry — Ali Barznji'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return getAllDevlogSlugs().map((slug) => ({ slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getDevlogEntry(slug)
  const { fonts, avatarSrc } = await loadOgAssets()

  const title = entry?.frontmatter.title ?? 'Devlog'
  const tags = entry?.frontmatter.tags.slice(0, 3) ?? []
  const readingTime = entry ? estimateReadingTime(entry.content) : null
  const date = entry?.frontmatter.date ? new Date(entry.frontmatter.date) : null
  const formattedDate =
    date && !Number.isNaN(date.getTime())
      ? date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
      : null

  // Scale the title down a bit once it gets long, so a lengthy headline
  // still fits comfortably within three lines instead of overflowing.
  const titleFontSize = title.length > 70 ? 46 : title.length > 40 ? 54 : 64

  return new ImageResponse(
    <OgFrame>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img
            src={avatarSrc}
            alt=""
            width={52}
            height={52}
            style={{ borderRadius: 26, border: '2px solid rgba(255,255,255,0.25)' }}
          />
          <span style={{ fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>
            Ali Barznji
          </span>
        </div>
        <OgPill>DEVLOG</OgPill>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 1000 }}>
        <span
          style={{
            fontSize: titleFontSize,
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.2,
          }}
        >
          {title}
        </span>
        {(formattedDate || readingTime) && (
          <span style={{ fontSize: 22, fontWeight: 400, color: 'rgba(255,255,255,0.55)' }}>
            {[formattedDate, readingTime ? `${readingTime} min read` : null]
              .filter(Boolean)
              .join('  ·  ')}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>
          alibarznji.dev/devlog
        </span>
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: 10 }}>
            {tags.map((tag) => (
              <OgTag key={tag}>{tag}</OgTag>
            ))}
          </div>
        )}
      </div>
    </OgFrame>,
    { ...OG_SIZE, fonts },
  )
}

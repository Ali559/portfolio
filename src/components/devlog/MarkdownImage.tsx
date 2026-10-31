'use client'

import { useState } from 'react'
import { ImageOff } from 'lucide-react'

// ─── Markdown Image ─────────────────────────────────────────────────────────
//
// Renders `![alt](src "caption")` markdown images. The optional "caption"
// (parsed by markdown into the `title` attribute) is shown as a <figcaption>.
// If the image fails to load, it degrades to an inline placeholder instead
// of leaving a broken-image icon in the middle of the article.

export function MarkdownImage({
  src,
  alt,
  title,
}: {
  src?: string | Blob
  alt?: string
  title?: string
}) {
  const [failed, setFailed] = useState(false)
  const resolvedSrc = typeof src === 'string' ? src : undefined

  if (!resolvedSrc || failed) {
    return (
      <span className="my-6 flex flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-muted/40 px-4 py-10 text-sm text-muted-foreground">
        <ImageOff className="h-6 w-6" aria-hidden />
        {alt ? `Image unavailable: ${alt}` : 'Image unavailable'}
      </span>
    )
  }

  return (
    <figure className="my-10">
      {/* eslint-disable-next-line @next/next/no-img-element -- markdown images
          have unknown, arbitrary intrinsic dimensions, so next/image's
          required sizing model doesn't apply cleanly here. */}
      <img
        src={resolvedSrc}
        alt={alt ?? ''}
        title={title}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="mx-auto max-w-full rounded-2xl shadow-[10px_10px_0_color-mix(in_oklab,var(--grape)_35%,transparent)] ring-1 ring-border"
      />
      {title && (
        <figcaption className="mt-4 text-center text-sm font-semibold text-muted-foreground">
          {title}
        </figcaption>
      )}
    </figure>
  )
}

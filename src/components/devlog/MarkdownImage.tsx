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
    <figure className="my-6">
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
        className="mx-auto max-w-full rounded-xl border border-border"
      />
      {title && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">{title}</figcaption>
      )}
    </figure>
  )
}

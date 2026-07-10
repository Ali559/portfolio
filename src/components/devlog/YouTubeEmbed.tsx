'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

// ─── YouTube Embed ──────────────────────────────────────────────────────────
//
// A "lite" facade: renders a thumbnail with a play button and only mounts
// the real YouTube iframe (and the megabytes of JS that come with it) once
// the reader actually clicks play. Keeps the devlog entry page fast by
// default without sacrificing the embed.

/** Extracts the video ID from common YouTube URL formats. */
function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?]+)/,
    /(?:youtube\.com\/embed\/)([^?]+)/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export function YouTubeEmbed({ url, title }: { url: string; title: string }) {
  const [activated, setActivated] = useState(false)
  const videoId = getYouTubeId(url)

  if (!videoId) {
    // Malformed/unrecognized video URL — degrade to a plain link instead
    // of rendering a broken embed.
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-muted text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Watch the video walkthrough →
      </a>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-sm">
      {activated ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- thumbnail
              comes straight from YouTube's CDN at a fixed, known size. */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-7 w-7 fill-black text-black" aria-hidden />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}

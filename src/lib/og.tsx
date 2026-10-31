import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// ─── Open Graph Image Helpers ───────────────────────────────────────────────
//
// Shared building blocks for every `opengraph-image`/`twitter-image` route.
// `next/og` renders through Satori, which only understands a constrained
// flexbox-based CSS subset and needs fonts/images loaded as raw bytes (it
// has no knowledge of next/font or the browser's font cache).

export const OG_SIZE = { width: 1200, height: 630 } as const
export const OG_CONTENT_TYPE = 'image/png'

let cachedAssets: Promise<{
  fonts: {
    name: 'Poppins'
    data: Buffer
    weight: 400 | 600 | 700
    style: 'normal'
  }[]
  avatarSrc: string
}> | null = null

/** Loads (and caches, per server instance) the fonts and avatar used across OG images. */
export function loadOgAssets() {
  if (!cachedAssets) {
    cachedAssets = Promise.all([
      readFile(join(process.cwd(), 'public/fonts/Poppins-Regular.ttf')),
      readFile(join(process.cwd(), 'public/fonts/Poppins-SemiBold.ttf')),
      readFile(join(process.cwd(), 'public/fonts/Poppins-Bold.ttf')),
      readFile(join(process.cwd(), 'public/img/avatar-square.png')),
    ]).then(([regular, semibold, bold, avatar]) => ({
      fonts: [
        { name: 'Poppins' as const, data: regular, weight: 400 as const, style: 'normal' as const },
        { name: 'Poppins' as const, data: semibold, weight: 600 as const, style: 'normal' as const },
        { name: 'Poppins' as const, data: bold, weight: 700 as const, style: 'normal' as const },
      ],
      avatarSrc: `data:image/png;base64,${avatar.toString('base64')}`,
    }))
  }
  return cachedAssets
}

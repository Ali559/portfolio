import { ImageResponse } from 'next/og'

import { OgFrame, OgPill } from '@/components/og/OgFrame'
import { loadOgAssets, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllDevlogEntries } from '@/lib/devlog'

export const alt = 'Devlog — Ali Barznji'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
  const { fonts, avatarSrc } = await loadOgAssets()
  const entryCount = getAllDevlogEntries().length

  return new ImageResponse(
    <OgFrame>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img
          src={avatarSrc}
          alt=""
          width={56}
          height={56}
          style={{ borderRadius: 28, border: '2px solid rgba(255,255,255,0.25)' }}
        />
        <span style={{ fontSize: 24, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>
          Ali Barznji
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <OgPill>DEVLOG</OgPill>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 68, fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
            Write-ups on projects
          </span>
          <span style={{ fontSize: 68, fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
            I&apos;ve actually built
          </span>
        </div>
        <span style={{ fontSize: 24, fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>
          {entryCount} {entryCount === 1 ? 'entry' : 'entries'} · how they work, what I learned
        </span>
      </div>

      <span style={{ fontSize: 24, fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>
        alibarznji.dev/devlog
      </span>
    </OgFrame>,
    { ...OG_SIZE, fonts },
  )
}

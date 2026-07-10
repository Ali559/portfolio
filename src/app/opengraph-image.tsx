import { ImageResponse } from 'next/og'

import { OgFrame, OgTag } from '@/components/og/OgFrame'
import { loadOgAssets, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'

export const alt = 'Ali Barznji — Full Stack Developer'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
  const { fonts, avatarSrc } = await loadOgAssets()

  return new ImageResponse(
    <OgFrame>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <img
          src={avatarSrc}
          alt=""
          width={76}
          height={76}
          style={{ borderRadius: 38, border: '2px solid rgba(255,255,255,0.25)' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 30, fontWeight: 700, color: '#fff' }}>Ali Barznji</span>
          <span style={{ fontSize: 20, fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>
            Full Stack Developer
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 980 }}>
        <span style={{ fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
          Building scalable web apps with React, Vue, Node.js, Go &amp; .NET
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 24, fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>
          alibarznji.dev
        </span>
        <div style={{ display: 'flex', gap: 10 }}>
          <OgTag>React</OgTag>
          <OgTag>Node.js</OgTag>
          <OgTag>Go</OgTag>
        </div>
      </div>
    </OgFrame>,
    { ...OG_SIZE, fonts },
  )
}

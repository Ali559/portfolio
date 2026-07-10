import type { ReactNode } from 'react'

// ─── OG Frame ────────────────────────────────────────────────────────────────
//
// The shared "layered" backdrop used by every generated share-card: a dark
// base, two soft radial glows bleeding off the corners, and an inset
// hairline frame — the same visual language used by the code blocks and
// cards elsewhere on the site, just rendered through Satori (next/og) rather
// than CSS. Every element sets `display` explicitly since Satori has no
// concept of the browser's default display values.

export function OgFrame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        backgroundColor: '#0a0a12',
        fontFamily: 'Poppins',
      }}
    >
      {/* Layer 1: corner glows */}
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          top: -220,
          right: -160,
          width: 640,
          height: 640,
          borderRadius: 320,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(130,115,255,0.55), rgba(130,115,255,0) 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          bottom: -240,
          left: -180,
          width: 640,
          height: 640,
          borderRadius: 320,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(56,132,255,0.35), rgba(56,132,255,0) 70%)',
        }}
      />

      {/* Layer 2: inset hairline frame */}
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          top: 36,
          left: 36,
          right: 36,
          bottom: 36,
          borderRadius: 28,
          border: '1px solid rgba(255,255,255,0.14)',
        }}
      />

      {/* Layer 3: foreground content */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '68px 76px',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function OgPill({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.2)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        padding: '8px 18px',
        fontSize: 20,
        fontWeight: 600,
        color: 'rgba(255,255,255,0.85)',
        letterSpacing: 1,
      }}
    >
      {children}
    </div>
  )
}

export function OgTag({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.18)',
        padding: '7px 16px',
        fontSize: 16,
        fontWeight: 600,
        color: 'rgba(255,255,255,0.7)',
      }}
    >
      {children}
    </div>
  )
}

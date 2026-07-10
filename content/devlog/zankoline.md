---
title: 'Building Zankoline: A University Admission Guide for Kurdistan'
date: '2026-06-30'
summary: 'How I built an offline-first, bilingual (English/Kurdish Sorani, RTL) PWA to help students find eligible university programs based on their grade.'
tags: ['React', 'TypeScript', 'Vite', 'PWA', 'i18n', 'RTL']
video: 'https://youtu.be/tVRTGDqceO0'
liveUrl: 'https://zankoline-pwa.vercel.app'
---

# Building Zankoline

Zankoline started as a simple problem: students in Kurdistan applying to
university need to know which programs they actually qualify for based on
their grade, then build and print a prioritized list of choices. That's it
— but getting it right meant solving a handful of genuinely tricky problems
along the way.

**[Try the live app →](https://zankoline-pwa.vercel.app)**

## What it does

A student enters their total grade, and Zankoline immediately shows which
university programs are realistically within reach — color-coded by how
comfortably they clear each program's cutoff, so the difference between
"safely qualified" and "borderline" is visible at a glance rather than
buried in a spreadsheet of raw numbers. From there they can search and
filter by governorate, faculty, or eligibility status, narrowing a list of
dozens of programs down to the handful that actually matter to them.

The real work happens in the shortlist. Students drag their chosen programs
into priority order — the order Egyptian and Kurdistani admission systems
actually care about — and print a clean, ready-to-submit admission form
straight from the browser. Because grades aren't final until results day,
the app also lets students save multiple scenarios side by side: one
shortlist for "if I get 95%," another for "if I get 90%," each revisitable
later without losing the others.

All of it works fully offline, installed as a PWA. No backend, no account,
no data ever leaving the device — which turned out to shape almost every
other technical decision in the project.

## Tech stack

React, TypeScript, and Vite form the foundation, styled with Tailwind CSS
and shadcn/ui. Data lives entirely client-side in IndexedDB, and Workbox
handles the offline service worker layer.

## Notable challenges

### RTL wasn't an afterthought

Supporting Kurdish Sorani meant more than flipping text alignment — the
entire layout needed to mirror correctly, end to end. Spacing, icons, drag
handles, even the print stylesheet all had to respond to direction
consistently, or the experience would feel subtly broken for half the
app's audience. The fix was disciplined: Tailwind's logical properties
(`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) everywhere instead of
physical ones (`ml-`, `mr-`, `left-`, `right-`), so layout direction is
driven by a single `dir` value rather than scattered conditional classes
that inevitably drift out of sync.

### Drag-and-drop that actually works on a trackpad

Reordering the shortlist sounded trivial until it ran into a real,
longstanding bug: native HTML5 drag-and-drop silently breaks on macOS
trackpads in Firefox-based browsers. `dragstart` fires, the ghost image
follows the cursor convincingly — but `dragover` and `drop` never reach the
page, because the OS gesture recognizer swallows the move phase before the
browser's drag controller ever sees it. The bug survived several rounds of
debugging across `<table>` markup, div-based grids, and manual
`dragenter`/`preventDefault()` ordering, none of which touched the real
cause. The actual fix was abandoning the native Drag and Drop API
altogether in favor of the **Pointer Events API**
(`pointerdown`/`pointermove`/`pointerup`), which never goes through that
native OS drag session at all, and behaves identically across mouse,
trackpad, and touch as a result.

```tsx title="useDragReorder.ts" {3,8-9}
function onPointerDown(event: React.PointerEvent, index: number) {
  const target = event.currentTarget
  target.setPointerCapture(event.pointerId)
  dragIndexRef.current = index
}

function onPointerMove(event: React.PointerEvent) {
  if (dragIndexRef.current === null) return
  const overIndex = getIndexFromPoint(event.clientX, event.clientY)
  if (overIndex !== null) reorder(dragIndexRef.current, overIndex)
}
```

### Keeping it fully offline

Because there's no backend by design, the PWA setup needed real offline
asset caching, not just a manifest file declaring intent. That meant a
custom service worker (`src/sw.ts`) built with Workbox's `injectManifest`
mode, precaching the app shell so it loads instantly and keeps working with
no connection at all after the first visit.

## What's next

- Native-speaker review pass on the Kurdish translations
- Open-sourcing the project (MIT licensed) so others can contribute
  programs/governorates data and translation improvements

---

_This project is open source under the MIT license. Contributions —
especially Kurdish translation review — are welcome._

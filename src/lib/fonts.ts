import { Bricolage_Grotesque, Noto_Sans_Arabic } from 'next/font/google'

// ─── Fonts ──────────────────────────────────────────────────────────────────
//
// Two families, one per script. Bricolage Grotesque carries the Latin text:
// its width axis lets the name be set tall and condensed in the hero, and its
// slightly wonky shapes keep the page from feeling corporate. Noto Sans
// Arabic carries Sorani in matching weights, and covers the Kurdish-specific
// letters (ڕ ڵ ێ ۆ ە). Both sit in one font stack, so mixed-script text such
// as "Vue" inside a Sorani sentence picks the right face per glyph.
//
// The Open Graph images still render with the Poppins files in
// /public/fonts (see lib/og.tsx), since they can't use next/font.

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz', 'wdth'],
  variable: '--font-bricolage',
  display: 'swap',
})

// Loaded as the variable font: one file covers every weight, instead of six
// separate downloads at build time.
export const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

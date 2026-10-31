'use client'

import Image from 'next/image'
import { LayoutGroup, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

import { Floater, type FloaterSpec } from '@/components/home/Floaters'
import { Motif, MotifRing } from '@/components/home/Kilim'
import { content, contactLinks, type Locale } from '@/data/content'
import { useLocale } from '@/lib/locale'
import { cn } from '@/lib/utils'

// ─── Hero ───────────────────────────────────────────────────────────────────
//
// An ink field with the name set huge and condensed, Ali's sketch pinned up
// inside a ring of diamonds, and a scatter of woven motifs that drift with the
// pointer at different depths. On load the motifs spin in and settle; after
// that, the only motion is the slow ring, the pointer parallax and the
// marquee along the bottom.

const container = 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'

const spring = { type: 'spring', stiffness: 260, damping: 32 } as const

// Each floating motif: where it sits (logical start/top, in %), its size,
// how strongly it follows the pointer, and its two colours.
const floaters: FloaterSpec[] = [
  {
    kind: 'eye',
    start: '58%',
    top: '14%',
    size: 'w-14 md:w-20',
    depth: 40,
    a: 'var(--pom)',
    b: 'var(--ink)',
    rotate: 0,
  },
  {
    kind: 'star',
    start: '92%',
    top: '20%',
    size: 'w-10 md:w-14',
    depth: -30,
    a: 'var(--paper)',
    b: 'var(--pom)',
    rotate: 12,
  },
  {
    kind: 'mountain',
    start: '54%',
    top: '70%',
    size: 'w-12 md:w-16',
    depth: 55,
    a: 'var(--paper)',
    b: 'var(--ink)',
    rotate: -8,
  },
  {
    kind: 'cross',
    start: '94%',
    top: '74%',
    size: 'w-12 md:w-16',
    depth: -45,
    a: 'var(--pom)',
    b: 'var(--paper)',
    rotate: 8,
  },
  {
    kind: 'comb',
    start: '76%',
    top: '4%',
    size: 'w-16 md:w-24',
    depth: 20,
    a: 'color-mix(in oklab, var(--paper) 35%, transparent)',
    b: 'var(--pom)',
    rotate: -4,
  },
]

function NameMark({ locale }: { locale: Locale }) {
  const other: Locale = locale === 'en' ? 'ckb' : 'en'

  return (
    <LayoutGroup>
      <h1>
        <motion.span
          layoutId={`name-${locale}`}
          transition={spring}
          lang={locale}
          className={cn(
            'block max-w-[9ch] font-extrabold text-paper',
            locale === 'en'
              ? 'text-[clamp(4.25rem,13vw,10.5rem)] leading-[0.82] tracking-[-0.04em] [font-stretch:75%]'
              : 'text-[clamp(3.25rem,8vw,6.75rem)] leading-[1.2]',
          )}
        >
          {content[locale].name}
        </motion.span>
      </h1>
      <p aria-hidden className="mt-4">
        <motion.span
          layoutId={`name-${other}`}
          transition={spring}
          lang={other}
          className={cn(
            'inline-block text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.3] font-bold text-pom',
            other === 'en' && '[font-stretch:75%]',
          )}
        >
          {content[other].name}
        </motion.span>
      </p>
    </LayoutGroup>
  )
}

function Marquee({ words }: { words: string[] }) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-8 pe-8">
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="flex items-center gap-8">
          <bdi className="text-2xl font-extrabold whitespace-nowrap text-ink md:text-3xl">
            {word}
          </bdi>
          <Motif
            kind={(['eye', 'star', 'cross'] as const)[i % 3]}
            a="var(--ink)"
            b="var(--paper)"
            className="w-6"
          />
        </span>
      ))}
    </div>
  )

  // The track always runs left-to-right in its own LTR box, so it scrolls
  // the same way in both languages.
  return (
    <div dir="ltr" className="relative overflow-hidden bg-pom py-4">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

export function Hero() {
  const { locale, t } = useLocale()

  // Pointer position, normalised to -0.5…0.5 across the hero, smoothed.
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const px = useSpring(rawX, { stiffness: 60, damping: 20 })
  const py = useSpring(rawY, { stiffness: 60, damping: 20 })
  const portraitX = useTransform(px, (v) => v * -14)
  const portraitY = useTransform(py, (v) => v * -14)

  const marqueeWords = Array.from(new Set(t.work.items.flatMap((item) => item.stack))).concat(
    t.work.items.map((item) => item.name),
  )

  return (
    <section
      className="relative overflow-hidden bg-band text-paper"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        rawX.set((e.clientX - r.left) / r.width - 0.5)
        rawY.set((e.clientY - r.top) / r.height - 0.5)
      }}
    >
      {/* A soft pomegranate glow behind the medallion, for depth. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 end-[-20%] h-[120%] w-[90%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--pom)_28%,transparent),transparent)] md:end-[-10%] md:w-[60%]"
      />

      <div
        className={cn(
          container,
          'relative grid min-h-[100svh] items-center gap-10 pt-28 pb-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:pt-24',
        )}
      >
        <div className="relative z-10 order-last md:order-none">
          <NameMark locale={locale} />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-8 max-w-[34rem] text-lg text-on-band-muted md:text-xl"
          >
            {t.hero.lede}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href={`mailto:${contactLinks.email}`}
              className="rounded-full bg-paper px-6 py-3 text-lg font-bold text-ink transition-transform hover:-translate-y-0.5 hover:rotate-[-1.5deg]"
            >
              {t.hero.emailMe}
            </a>
            <a
              href="#work"
              className="rounded-full border-2 border-paper/30 px-6 py-3 text-lg font-bold transition-colors hover:border-pom hover:text-pom"
            >
              {t.hero.seeWork}
            </a>
          </motion.div>
        </div>

        {/* The portrait: Ali's own ink sketch on its paper, tilted like a
            card pinned to the page, with a pomegranate block behind it and a
            slowly turning ring of diamonds around both. */}
        <div className="relative mx-auto aspect-square w-[min(84vw,26rem)] md:w-full md:max-w-[32rem]">
          <MotifRing
            colors={['var(--pom)', 'color-mix(in oklab, var(--paper) 45%, transparent)']}
            className="absolute inset-0 animate-spin-slow"
          />
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -14 }}
            animate={{ scale: 1, opacity: 1, rotate: -4 }}
            transition={{ ...spring, delay: 0.1 }}
            style={{ x: portraitX, y: portraitY }}
            className="absolute inset-y-[7%] inset-x-[17%]"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.5rem] bg-pom" />
            <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] bg-[#f3f2ef] ring-1 ring-ink/10">
              <Image
                src="/img/avatar.png"
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 22rem, 60vw"
                className="object-cover object-[50%_18%]"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating motifs, positioned over the whole hero. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
          {floaters.map((f, i) => (
            <Floater key={f.kind} f={f} index={i} px={px} py={py} />
          ))}
        </div>
      </div>

      <Marquee words={marqueeWords} />
    </section>
  )
}

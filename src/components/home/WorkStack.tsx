'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

import { Motif } from '@/components/home/Kilim'
import { SystemDiagram } from '@/components/home/SystemDiagram'
import type { CaseStudy } from '@/data/content'
import { cn } from '@/lib/utils'

// ─── Work Stack ─────────────────────────────────────────────────────────────
//
// Each case study is a full-colour panel. On large screens the panels stick
// and pile up as you scroll, each one shrinking slightly as the next slides
// over it. On phones (and short windows) they're simply stacked in the flow.

interface Theme {
  panel: string
  /** Underline colour for links on this panel. */
  link: string
  /** Fill for the parts Ali built in the diagram, and the text on them. */
  accent: string
  accentText: string
}

const themes: Record<string, Theme> = {
  lalengi: {
    panel: 'bg-ink text-paper ring-1 ring-paper/10 dark:bg-card',
    link: 'var(--pom)',
    accent: '#ff4673',
    accentText: '#170f3b',
  },
  codex: {
    panel: 'bg-jade text-ink',
    link: 'var(--paper)',
    accent: '#5b3df5',
    accentText: '#ffffff',
  },
  qasa: {
    panel: 'bg-ink text-paper ring-1 ring-paper/10 dark:bg-card',
    link: 'var(--jade)',
    accent: '#4edea3',
    accentText: '#170f3b',
  },
  zankoline: { panel: 'bg-grape text-paper', link: 'var(--saffron)', accent: '', accentText: '' },
  inzpiri: {
    panel: 'bg-saffron text-ink',
    link: 'var(--paper)',
    accent: '#5b3df5',
    accentText: '#ffffff',
  },
  seeyou: {
    panel: 'bg-pom text-ink',
    link: 'var(--paper)',
    accent: '#170f3b',
    accentText: '#ffffff',
  },
  'smart-pricer': {
    panel: 'bg-jade text-ink',
    link: 'var(--paper)',
    accent: '#170f3b',
    accentText: '#ffffff',
  },
}

const isExternal = (href: string) => href.startsWith('http')

function useStacking() {
  const [stacking, setStacking] = useState(false)
  useEffect(() => {
    const query = window.matchMedia('(min-width: 64rem) and (min-height: 46rem)')
    const update = () => setStacking(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  return stacking
}

function BrowserFrame({
  image,
  url,
  className,
}: {
  image: NonNullable<CaseStudy['image']>
  url: string
  className?: string
}) {
  return (
    <div
      dir="ltr"
      className={cn(
        'overflow-hidden rounded-xl bg-paper shadow-[0_40px_80px_-30px_rgb(23_15_59/0.6)] ring-1 ring-ink/10',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 bg-[#ece8ff] px-3 py-2">
        <span className="size-2.5 rounded-full bg-pom" />
        <span className="size-2.5 rounded-full bg-saffron" />
        <span className="size-2.5 rounded-full bg-jade" />
        <span className="ms-3 truncate rounded-full bg-white px-3 py-0.5 text-xs text-ink/60">
          {url}
        </span>
      </div>
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 40rem, 90vw"
        className="h-auto w-full"
      />
    </div>
  )
}

function Visual({ item, theme, legend }: { item: CaseStudy; theme: Theme; legend: string }) {
  const site = item.links.find((link) => isExternal(link.href))
  const url = site ? new URL(site.href).host.replace(/^www\./, '') : ''

  // A screenshot with the stack stuck on it like stickers.
  if (item.image && !item.diagram) {
    return (
      <div className="relative px-2 py-6">
        <BrowserFrame image={item.image} url={url} className="rotate-[-2.5deg]" />
        {item.stack.map((tech, i) => (
          <span
            key={tech}
            dir="ltr"
            className={cn(
              'absolute rounded-full px-4 py-1.5 text-sm font-extrabold shadow-lg md:text-base',
              ['bg-saffron text-ink', 'bg-pom text-ink', 'bg-jade text-ink', 'bg-paper text-ink'][
                i % 4
              ],
              ['-top-1 start-6', 'top-1/3 -end-2', '-bottom-2 start-1/4', 'bottom-1/4 -start-3'][
                i % 4
              ],
            )}
          >
            <span
              className="block animate-bob"
              style={
                {
                  animationDelay: `${i * -1.5}s`,
                  '--bob-rotate': `${i % 2 ? 6 : -6}deg`,
                } as React.CSSProperties
              }
            >
              {tech}
            </span>
          </span>
        ))}
      </div>
    )
  }

  const diagram = item.diagram && (
    <SystemDiagram
      kind={item.diagram}
      legend={legend}
      accent={theme.accent}
      accentText={theme.accentText}
    />
  )

  // A phone showing the app behind, with the system drawn over it.
  if (item.phone) {
    return (
      <div className="relative py-4">
        <div
          dir="ltr"
          className="w-[34%] rotate-[-4deg] overflow-hidden rounded-[1.75rem] bg-ink p-1.5 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)] ring-1 ring-paper/20"
        >
          <Image
            src={item.phone.src}
            alt=""
            width={item.phone.width}
            height={item.phone.height}
            sizes="(min-width: 1024px) 14rem, 34vw"
            className="h-auto w-full rounded-[1.4rem]"
          />
        </div>
        <div className="absolute end-0 top-1/2 w-[78%] -translate-y-1/2 rotate-[1.5deg]">
          {diagram}
        </div>
      </div>
    )
  }

  // A screenshot of the client's site behind, with the system drawn over it.
  if (item.image) {
    return (
      <div className="relative pb-24 sm:pb-32">
        <BrowserFrame image={item.image} url={url} className="w-[88%] rotate-[2deg] ms-auto" />
        <div className="absolute start-0 bottom-0 w-[78%] rotate-[-1.5deg]">{diagram}</div>
      </div>
    )
  }

  // No screenshot: the diagram on its own, over a large woven star.
  return (
    <div className="relative">
      <Motif
        kind="star"
        a="color-mix(in oklab, var(--paper) 22%, transparent)"
        b="color-mix(in oklab, var(--ink) 10%, transparent)"
        className="absolute -end-10 -top-16 w-64 animate-spin-slow"
      />
      <div className="relative rotate-[-1.5deg]">{diagram}</div>
    </div>
  )
}

function StackCard({
  item,
  index,
  count,
  progress,
  stacking,
  listSeparator,
  legend,
}: {
  item: CaseStudy
  index: number
  count: number
  progress: MotionValue<number>
  stacking: boolean
  listSeparator: string
  legend: string
}) {
  const theme = themes[item.id] ?? themes.zankoline
  const scale = useTransform(progress, [index / count, 1], [1, 1 - (count - 1 - index) * 0.04])

  return (
    <div
      className={cn(stacking && 'sticky top-0 h-svh')}
      style={stacking ? { paddingTop: `calc(5.5rem + ${index * 1.25}rem)` } : undefined}
    >
      <motion.article
        style={
          {
            ...(stacking ? { scale, height: 'calc(100svh - 11rem)' } : {}),
            '--link-accent': theme.link,
          } as React.CSSProperties
        }
        className={cn(
          'relative grid origin-top items-center gap-10 overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:p-12',
          theme.panel,
        )}
      >
        <div className="relative z-10">
          <h3 className="text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] [font-stretch:80%]">
            {item.name}
          </h3>
          <p className="mt-3 text-lg font-semibold md:text-xl">{item.summary}</p>
          <p className="mt-4 opacity-90">{item.story}</p>
          <p className="mt-4 text-sm font-bold opacity-75">
            {item.stack.map((tech, i) => (
              <span key={tech}>
                {i > 0 && listSeparator}
                <bdi>{tech}</bdi>
              </span>
            ))}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="ink-link"
                {...(isExternal(link.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <Visual item={item} theme={theme} legend={legend} />
        </motion.div>
      </motion.article>
    </div>
  )
}

export function WorkStack({
  items,
  listSeparator,
  legend,
}: {
  items: CaseStudy[]
  listSeparator: string
  legend: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const stacking = useStacking()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <div ref={ref} className={cn(!stacking && 'space-y-6')}>
      {items.map((item, i) => (
        <StackCard
          key={item.id}
          item={item}
          index={i}
          count={items.length}
          progress={scrollYProgress}
          stacking={stacking}
          listSeparator={listSeparator}
          legend={legend}
        />
      ))}
    </div>
  )
}

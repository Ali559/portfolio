'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { Motif, type MotifKind } from '@/components/home/Kilim'
import { cn } from '@/lib/utils'

// ─── Entry Card ─────────────────────────────────────────────────────────────
//
// One devlog entry on the index: a colour panel from the kilim palette with
// a large woven motif in the corner that turns as you hover.

const themes: { panel: string; motif: MotifKind; a: string; b: string; pill: string }[] = [
  {
    panel: 'bg-grape text-paper',
    motif: 'star',
    a: 'var(--pom)',
    b: 'var(--saffron)',
    pill: 'bg-paper/15',
  },
  {
    panel: 'bg-saffron text-ink',
    motif: 'eye',
    a: 'var(--ink)',
    b: 'var(--pom)',
    pill: 'bg-ink/10',
  },
  {
    panel: 'bg-jade text-ink',
    motif: 'cross',
    a: 'var(--grape)',
    b: 'var(--paper)',
    pill: 'bg-ink/10',
  },
  {
    panel: 'bg-pom text-ink',
    motif: 'mountain',
    a: 'var(--ink)',
    b: 'var(--saffron)',
    pill: 'bg-ink/10',
  },
]

export function EntryCard({
  index,
  href,
  title,
  summary,
  meta,
  tags,
}: {
  index: number
  href: string
  title: string
  summary?: string
  meta: string
  tags: string[]
}) {
  const theme = themes[index % themes.length]

  return (
    <motion.li
      initial={{ opacity: 0, y: 48, rotate: index % 2 ? 1.5 : -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <Link
        href={href}
        className={cn(
          'group relative block overflow-hidden rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:p-10 md:p-12',
          theme.panel,
        )}
      >
        <Motif
          kind={theme.motif}
          a={theme.a}
          b={theme.b}
          className="pointer-events-none absolute -end-12 -bottom-12 w-48 opacity-90 transition-transform duration-700 ease-out group-hover:rotate-90 md:w-64"
        />
        <div className="relative max-w-[42rem]">
          <p className="text-sm font-bold opacity-75">{meta}</p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] font-extrabold tracking-[-0.03em] [font-stretch:80%]">
            {title}
          </h2>
          {summary && <p className="mt-4 text-lg opacity-90">{summary}</p>}
          {tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className={cn('rounded-full px-3 py-1 text-sm font-bold', theme.pill)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <span className="ink-link mt-8 inline-block text-lg">Read the write-up</span>
        </div>
      </Link>
    </motion.li>
  )
}

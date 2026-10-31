'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { BookOpen, Gamepad2, Music, Plane, Popcorn } from 'lucide-react'

import { Hero } from '@/components/home/Hero'
import { Motif, type MotifKind } from '@/components/home/Kilim'
import { WorkStack } from '@/components/home/WorkStack'
import { contactLinks } from '@/data/content'
import { useLocale } from '@/lib/locale'
import { cn } from '@/lib/utils'

// ─── Home Page ──────────────────────────────────────────────────────────────
//
// Ink hero, then the work as stacking colour panels, a bento of smaller
// projects, experience, interests, and a pomegranate contact band. Each
// project and section borrows one colour from the kilim palette; layout uses
// logical properties throughout, so Sorani mirrors the whole composition.

const container = 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'

const isExternal = (href: string) => href.startsWith('http')

function linkProps(href: string) {
  return isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}

function SectionHeading({
  children,
  motif,
  colors,
}: {
  children: React.ReactNode
  motif: MotifKind
  colors: [string, string]
}) {
  return (
    <div className="mb-12 flex items-center gap-4 md:mb-16">
      <motion.div
        initial={{ rotate: -90, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className="w-10 shrink-0 md:w-14"
      >
        <Motif kind={motif} a={colors[0]} b={colors[1]} />
      </motion.div>
      <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1] font-extrabold tracking-[-0.03em] [font-stretch:80%]">
        {children}
      </h2>
    </div>
  )
}

// The smaller projects, as a bento grid of colour tiles with a screenshot
// (or, for this site, its own motifs) peeking up from the bottom.
const tiles = [
  { panel: 'bg-grape text-paper', span: 'md:col-span-4', image: '/img/projects/env.png' },
  { panel: 'bg-saffron text-ink', span: 'md:col-span-2', image: '/img/projects/cdn-checker.png' },
  {
    panel: 'bg-ink text-paper dark:bg-card',
    span: 'md:col-span-2',
    image: '/img/projects/wizrx.png',
  },
  { panel: 'bg-jade text-ink', span: 'md:col-span-4', image: null },
]

function SmallThings() {
  const { t } = useLocale()
  return (
    <section className="py-20 md:py-28">
      <div className={container}>
        <SectionHeading motif="cross" colors={['var(--saffron)', 'var(--grape)']}>
          {t.small.title}
        </SectionHeading>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {t.small.items.map((item, i) => {
            const tile = tiles[i % tiles.length]
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: (i % 2) * 0.08 }}
                className={cn('min-w-0', tile.span)}
              >
                <a
                  href={item.href}
                  {...linkProps(item.href)}
                  className={cn(
                    'group relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] p-7 transition-transform duration-300 hover:-translate-y-1',
                    tile.panel,
                  )}
                >
                  <h3 className="text-2xl font-extrabold md:text-3xl">
                    <bdi>{item.name}</bdi>
                  </h3>
                  <p className="mt-2 max-w-[28rem] opacity-85">{item.text}</p>

                  {tile.image ? (
                    <div className="relative mt-auto -mb-16 pt-8">
                      <Image
                        src={tile.image}
                        alt=""
                        width={1500}
                        height={900}
                        sizes="(min-width: 768px) 40vw, 90vw"
                        className="h-48 w-full rotate-[-2deg] rounded-xl object-cover object-top shadow-2xl ring-1 ring-ink/10 transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:rotate-0"
                      />
                    </div>
                  ) : (
                    <div aria-hidden className="mt-auto flex items-end gap-3 pt-8">
                      {(['eye', 'star', 'mountain', 'cross', 'comb'] as const).map((kind, j) => (
                        <div
                          key={kind}
                          className="max-w-20 min-w-0 flex-1 transition-transform duration-500 ease-out group-hover:-translate-y-3"
                          style={{ transitionDelay: `${j * 40}ms` }}
                        >
                          <Motif
                            kind={kind}
                            a={
                              [
                                'var(--ink)',
                                'var(--grape)',
                                'var(--pom)',
                                'var(--saffron)',
                                'var(--paper)',
                              ][j]
                            }
                            b={
                              [
                                'var(--saffron)',
                                'var(--paper)',
                                'var(--ink)',
                                'var(--ink)',
                                'var(--grape)',
                              ][j]
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Experience() {
  const { t } = useLocale()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 50%'] })
  const colors = ['bg-pom', 'bg-jade', 'bg-saffron', 'bg-grape']

  return (
    <section id="experience" className="scroll-mt-20 py-20 md:py-28">
      <div className={container}>
        <SectionHeading motif="mountain" colors={['var(--jade)', 'var(--pom)']}>
          {t.experience.title}
        </SectionHeading>

        <div ref={ref} className="relative">
          {/* The timeline rail, drawn in as you scroll past it. */}
          <div className="absolute start-[0.6rem] top-2 bottom-2 w-1 rounded-full bg-border md:start-[0.85rem]">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="h-full w-full origin-top rounded-full bg-linear-to-b from-pom via-saffron to-jade"
            />
          </div>

          <div className="space-y-16">
            {t.experience.items.map((job, i) => (
              <div key={job.company} className="relative ps-12 md:ps-16">
                <span
                  className={cn(
                    'absolute start-0 top-3 size-6 rotate-45 rounded-[0.3rem] ring-4 ring-background md:size-8',
                    colors[i % colors.length],
                  )}
                />
                <div className="grid gap-3 md:grid-cols-[18rem_minmax(0,1fr)] md:gap-10">
                  <p className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] font-extrabold tracking-tight text-primary [font-stretch:80%]">
                    <bdi>{job.period}</bdi>
                  </p>
                  <div>
                    <h3 className="text-3xl font-extrabold">
                      {job.href ? (
                        <a href={job.href} {...linkProps(job.href)} className="ink-link">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-muted-foreground">{job.role}</p>
                    <p className="mt-4 max-w-[38rem] text-lg">{job.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Interests, as a pile of stickers: books, music, games, travel, and the
// one trip to the cinema.
const stickers = [
  { Icon: BookOpen, bg: 'bg-grape text-paper', rotate: -8 },
  { Icon: Music, bg: 'bg-pom text-ink', rotate: 6 },
  { Icon: Gamepad2, bg: 'bg-saffron text-ink', rotate: -4 },
  { Icon: Plane, bg: 'bg-jade text-ink', rotate: 10 },
  { Icon: Popcorn, bg: 'bg-ink text-saffron dark:bg-card', rotate: -12 },
]

function Outside() {
  const { t } = useLocale()
  return (
    <section className="overflow-x-clip py-20 md:py-28">
      <div
        className={cn(
          container,
          'grid items-center gap-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]',
        )}
      >
        <div>
          <SectionHeading motif="eye" colors={['var(--grape)', 'var(--saffron)']}>
            {t.outside.title}
          </SectionHeading>
          <p className="max-w-[40rem] text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.55]">
            {t.outside.text}
          </p>
        </div>
        <div aria-hidden className="flex flex-wrap justify-center gap-5">
          {stickers.map(({ Icon, bg, rotate }, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: rotate - 40 }}
              whileInView={{ scale: 1, rotate }}
              whileHover={{ scale: 1.12, rotate: -rotate }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 220, damping: 14, delay: i * 0.07 }}
              className={cn(
                'grid size-24 place-items-center rounded-[1.75rem] shadow-xl md:size-32',
                bg,
                i === 2 && 'md:size-40',
              )}
            >
              <Icon className="size-1/2" strokeWidth={2.25} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { t } = useLocale()
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-pom text-ink"
      style={{ '--link-accent': 'var(--paper)' } as React.CSSProperties}
    >
      <div aria-hidden className="kilim-strip animate-kilim" />
      <Motif
        kind="star"
        a="color-mix(in oklab, var(--paper) 25%, transparent)"
        b="color-mix(in oklab, var(--ink) 8%, transparent)"
        className="pointer-events-none absolute -end-24 top-16 w-[28rem] animate-spin-slow"
      />
      <div className={cn(container, 'relative py-24 md:py-36')}>
        <h2 className="text-2xl font-bold md:text-3xl">{t.contact.title}</h2>
        <a
          href={`mailto:${contactLinks.email}`}
          dir="ltr"
          className="ink-link mt-4 inline-block text-[clamp(2.25rem,8vw,6.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em] break-all [font-stretch:80%]"
        >
          {contactLinks.email}
        </a>
        <p className="mt-10 max-w-[34rem] text-xl font-medium">{t.contact.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { label: 'GitHub', href: contactLinks.github },
            { label: 'LinkedIn', href: contactLinks.linkedin },
            { label: t.contact.resume, href: contactLinks.resume },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-lg font-bold text-paper transition-transform hover:-translate-y-0.5 hover:rotate-[-1.5deg]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  const { locale, t } = useLocale()
  const listSeparator = locale === 'ckb' ? '، ' : ', '

  return (
    <>
      <Hero />

      <section id="work" className="scroll-mt-20 pt-24 md:pt-32">
        <div className={container}>
          <SectionHeading motif="star" colors={['var(--pom)', 'var(--saffron)']}>
            {t.work.title}
          </SectionHeading>
          <WorkStack
            items={t.work.items}
            listSeparator={listSeparator}
            legend={t.work.builtLegend}
          />
        </div>
      </section>

      <SmallThings />
      <Experience />
      <Outside />
      <Contact />
    </>
  )
}

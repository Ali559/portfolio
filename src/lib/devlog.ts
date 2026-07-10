import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// ─── Devlog Loader ──────────────────────────────────────────────────────────
//
// Reads markdown files from /content/devlog and parses their frontmatter
// (the --- delimited block at the top of each .md file) into structured
// metadata, separate from the markdown body. This lets pages list/sort
// devlog entries without parsing markdown, and only render the full body
// on the individual entry page.

const DEVLOG_DIR = path.join(process.cwd(), 'content', 'devlog')

export interface DevlogFrontmatter {
  title: string
  date: string
  summary: string
  tags: string[]
  /** YouTube URL — swap this once the real video is recorded. */
  video?: string
  /** Link to the deployed/live version of the project, if any. */
  liveUrl?: string
  /** Optional social-card image; falls back to the site default. */
  image?: string
}

export interface DevlogEntry {
  slug: string
  frontmatter: DevlogFrontmatter
  content: string
}

/** Returns every devlog slug (filename without the .md extension). */
export function getAllDevlogSlugs(): string[] {
  if (!fs.existsSync(DEVLOG_DIR)) return []
  return fs
    .readdirSync(DEVLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

/** Loads and parses a single devlog entry by slug. */
export function getDevlogEntry(slug: string): DevlogEntry | null {
  const filePath = path.join(DEVLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const fm = data as Record<string, unknown>

  // YAML auto-parses unquoted dates like `2026-06-30` into a real Date
  // object rather than leaving them as a string — but if the frontmatter
  // quotes the value (`date: "2026-06-30"`), it stays a string. Normalize
  // both cases to an ISO date string here, once, so every consumer of
  // frontmatter.date can rely on it always being a string.
  const rawDate = fm.date
  const normalizedDate =
    rawDate instanceof Date ? rawDate.toISOString().slice(0, 10) : String(rawDate ?? '')

  // Never trust frontmatter to be complete — missing fields degrade to
  // sensible defaults instead of causing render-time crashes downstream.
  return {
    slug,
    frontmatter: {
      title: typeof fm.title === 'string' && fm.title.trim() ? fm.title : 'Untitled',
      summary: typeof fm.summary === 'string' ? fm.summary : '',
      tags: Array.isArray(fm.tags) ? fm.tags.filter((t) => typeof t === 'string') : [],
      video: typeof fm.video === 'string' ? fm.video : undefined,
      liveUrl: typeof fm.liveUrl === 'string' ? fm.liveUrl : undefined,
      image: typeof fm.image === 'string' ? fm.image : undefined,
      date: normalizedDate,
    },
    content: typeof content === 'string' ? content : '',
  }
}

/** Loads every devlog entry, sorted newest first. */
export function getAllDevlogEntries(): DevlogEntry[] {
  return getAllDevlogSlugs()
    .map((slug) => getDevlogEntry(slug))
    .filter((entry): entry is DevlogEntry => entry !== null)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}

/**
 * Formats a devlog entry's date string for display, returning null if the
 * date is missing or unparseable so callers can simply skip rendering it
 * rather than show "Invalid Date" or crash.
 */
export function formatDevlogDate(dateString: string): string | null {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

/** The previous (older) and next (newer) entries relative to a given slug. */
export interface AdjacentDevlogEntries {
  previous: DevlogEntry | null
  next: DevlogEntry | null
}

/**
 * Finds the chronological neighbors of a devlog entry, for "previous /
 * next" navigation. Entries are sorted newest-first, so "previous" (older)
 * is the following item in the array and "next" (newer) is the preceding
 * one.
 */
export function getAdjacentDevlogEntries(slug: string): AdjacentDevlogEntries {
  const entries = getAllDevlogEntries()
  const index = entries.findIndex((entry) => entry.slug === slug)

  if (index === -1) return { previous: null, next: null }

  return {
    previous: entries[index + 1] ?? null,
    next: index > 0 ? entries[index - 1] : null,
  }
}

/** Every unique tag across all devlog entries, alphabetically sorted. */
export function getAllDevlogTags(): string[] {
  const tags = new Set<string>()
  for (const entry of getAllDevlogEntries()) {
    for (const tag of entry.frontmatter.tags) tags.add(tag)
  }
  return Array.from(tags).sort((a, b) => a.localeCompare(b))
}

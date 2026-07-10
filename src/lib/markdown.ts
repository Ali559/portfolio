import GithubSlugger from 'github-slugger'

// ─── Markdown Helpers ───────────────────────────────────────────────────────
//
// Small, dependency-light utilities that support the devlog rendering
// pipeline: reading time estimation, table-of-contents extraction, and
// normalizing a common authoring pattern (repeating the post title as an
// `# H1` inside the body) so the page never ends up with two <h1>s.

const WORDS_PER_MINUTE = 200

/** Estimates reading time in whole minutes (minimum 1) from raw markdown. */
export function estimateReadingTime(content: string): number {
  if (!content) return 1
  const words = content
    .replace(/```[\s\S]*?```/g, ' ') // exclude code blocks from the word count
    .split(/\s+/)
    .filter(Boolean)
  return Math.max(1, Math.round(words.length / WORDS_PER_MINUTE))
}

/**
 * Removes a leading `# Heading` line from markdown content. Devlog posts
 * often repeat their frontmatter title as the first line of the body — but
 * the title is already rendered as the page's single <h1>, so we drop the
 * duplicate to keep heading hierarchy (and the table of contents) clean.
 */
export function stripLeadingHeading(content: string): string {
  const lines = content.split('\n')
  let i = 0
  while (i < lines.length && lines[i].trim() === '') i++
  if (i < lines.length && /^#\s+\S/.test(lines[i])) {
    lines.splice(0, i + 1)
    return lines.join('\n').replace(/^\s+/, '')
  }
  return content
}

export interface TocHeading {
  id: string
  text: string
  depth: 2 | 3
}

/**
 * Extracts h2/h3 headings for a table of contents, generating the same
 * slugs `rehype-slug` would produce (both use `github-slugger`) so TOC
 * links land exactly on the rendered heading's anchor id.
 */
export function extractHeadings(content: string): TocHeading[] {
  const slugger = new GithubSlugger()
  const headings: TocHeading[] = []
  let inFence = false

  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim()

    // Skip fenced code blocks entirely so `# comment` inside code never
    // gets mistaken for a heading.
    if (/^(```|~~~)/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const match = /^(#{2,3})\s+(.+?)\s*#*$/.exec(line)
    if (!match) continue

    const depth = match[1].length as 2 | 3
    const text = match[2].replace(/`([^`]+)`/g, '$1').trim()
    if (!text) continue

    headings.push({ id: slugger.slug(text), text, depth })
  }

  return headings
}

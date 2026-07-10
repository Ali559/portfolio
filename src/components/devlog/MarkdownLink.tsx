import type { AnchorHTMLAttributes } from 'react'
import { ExternalLink } from 'lucide-react'

import { cn } from '@/lib/utils'

// ─── Markdown Link ──────────────────────────────────────────────────────────
//
// Handles three cases produced by the markdown pipeline:
//   1. Heading permalinks injected by rehype-autolink-headings (`.heading-anchor`)
//   2. Internal links (relative paths, in-page anchors)
//   3. External links, which open in a new tab with an affordance icon

export function MarkdownLink({
  href = '',
  className,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (className?.includes('heading-anchor')) {
    return (
      <a
        href={href}
        className={cn(
          'ms-2 no-underline text-muted-foreground/40 opacity-0 transition-opacity duration-150 hover:text-primary group-hover:opacity-100 group-focus-within:opacity-100',
          className,
        )}
        {...rest}
      >
        {children}
      </a>
    )
  }

  const isExternal = /^https?:\/\//i.test(href)

  if (!isExternal) {
    return (
      <a
        href={href}
        className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
      {...rest}
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
    </a>
  )
}

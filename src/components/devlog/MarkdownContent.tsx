import type { ComponentPropsWithoutRef } from 'react'
import { MarkdownAsync, type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings, { type Options as AutolinkOptions } from 'rehype-autolink-headings'
import rehypePrettyCode, { type Options as PrettyCodeOptions } from 'rehype-pretty-code'

import { cn } from '@/lib/utils'
import { CodeBlock } from './CodeBlock'
import { MarkdownImage } from './MarkdownImage'
import { MarkdownLink } from './MarkdownLink'

// ─── Markdown Content ───────────────────────────────────────────────────────
//
// Renders devlog body markdown with the full pipeline: GFM (tables, task
// lists, strikethrough, footnotes, autolinks), heading ids + permalinks, and
// Shiki-powered syntax highlighting via rehype-pretty-code. Uses
// `MarkdownAsync` because rehype-pretty-code's highlighter is asynchronous —
// the synchronous `Markdown` component can't await it.

const prettyCodeOptions: PrettyCodeOptions = {
  theme: { light: 'github-light', dark: 'github-dark' },
  keepBackground: true,
  defaultLang: { block: 'plaintext', inline: 'plaintext' },
}

const autolinkOptions: AutolinkOptions = {
  behavior: 'append',
  properties: { ariaHidden: 'true', tabIndex: -1, className: ['heading-anchor'] },
  content: {
    type: 'element',
    tagName: 'span',
    properties: { className: ['heading-anchor-icon'], ariaHidden: 'true' },
    children: [{ type: 'text', value: '#' }],
  },
}

const headingClass = 'group scroll-mt-28'

// A stray `h1` inside the body is rendered as an `h2` so the page keeps
// exactly one true <h1> (the post title in the page header), preserving a
// clean, accessible heading hierarchy.
function H1AsH2({ className, ...rest }: ComponentPropsWithoutRef<'h1'>) {
  return <h2 className={cn(headingClass, className)} {...rest} />
}
function H2({ className, ...rest }: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className={cn(headingClass, className)} {...rest} />
}
function H3({ className, ...rest }: ComponentPropsWithoutRef<'h3'>) {
  return <h3 className={cn(headingClass, className)} {...rest} />
}
function H4({ className, ...rest }: ComponentPropsWithoutRef<'h4'>) {
  return <h4 className={cn(headingClass, className)} {...rest} />
}
function H5({ className, ...rest }: ComponentPropsWithoutRef<'h5'>) {
  return <h5 className={cn(headingClass, className)} {...rest} />
}
function H6({ className, ...rest }: ComponentPropsWithoutRef<'h6'>) {
  return <h6 className={cn(headingClass, className)} {...rest} />
}

const components: Components = {
  h1: H1AsH2,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: MarkdownLink,
  img: MarkdownImage,
  pre: CodeBlock,
  table: ({ children, ...rest }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table {...rest}>{children}</table>
    </div>
  ),
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <MarkdownAsync
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeSlug,
        [rehypeAutolinkHeadings, autolinkOptions],
        [rehypePrettyCode, prettyCodeOptions],
      ]}
      components={components}
    >
      {content}
    </MarkdownAsync>
  )
}

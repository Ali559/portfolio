import { isValidElement, type HTMLAttributes, type ReactNode } from 'react'

import { CopyButton } from './CopyButton'

// ─── Code Block ─────────────────────────────────────────────────────────────
//
// Overrides <pre> for rendered markdown. rehype-pretty-code (Shiki) has
// already turned the code fence into a fully highlighted tree by the time
// this renders — each line is a `<span data-line>`, and the `<code>` node
// carries a `data-language` attribute. This component just adds the copy
// button and a language pill on top of that markup.

function textOf(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (isValidElement(node)) {
    return textOf((node.props as { children?: ReactNode }).children)
  }
  return ''
}

/** Reconstructs the original code string from the highlighted line spans. */
function codeTextOf(node: ReactNode): string {
  if (Array.isArray(node)) {
    return node
      .map((child) => {
        if (isValidElement(child) && 'data-line' in (child.props as Record<string, unknown>)) {
          return textOf((child.props as { children?: ReactNode }).children)
        }
        return textOf(child)
      })
      .join('\n')
  }
  return textOf(node)
}

export function CodeBlock({ children, ...rest }: HTMLAttributes<HTMLPreElement>) {
  const codeElement = isValidElement(children) ? children : null
  const codeProps = (codeElement?.props ?? {}) as {
    children?: ReactNode
    'data-language'?: string
  }
  const code = codeTextOf(codeProps.children)
  const language = codeProps['data-language']

  return (
    <div className="group relative not-prose">
      {language && (
        <span className="code-lang-pill pointer-events-none absolute right-3 top-3 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-neutral-400 opacity-100 transition-opacity group-hover:opacity-0">
          {language}
        </span>
      )}
      <pre {...rest}>{children}</pre>
      {code && <CopyButton code={code} />}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { cn } from '@/lib/utils'

/** Small clipboard-copy control that sits in the corner of a code block. */
export function CopyButton({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard access can be denied (permissions, insecure context, etc).
      // Failing silently is better than throwing in front of a reader.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
      className={cn(
        'absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-300 opacity-0 backdrop-blur transition-all duration-150 hover:bg-white/10 hover:text-white focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group-hover:opacity-100 group-focus-within:opacity-100',
        className,
      )}
    >
      {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

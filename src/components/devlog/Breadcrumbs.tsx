import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
      <Link href="/" className="transition-colors hover:text-foreground">
        Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      <Link href="/devlog" className="transition-colors hover:text-foreground">
        Devlog
      </Link>
      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      <span className="truncate text-foreground" aria-current="page">
        {title}
      </span>
    </nav>
  )
}

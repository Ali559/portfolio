import Link from 'next/link'

// Sits on the ink header band, above the entry title.
export function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center gap-2 text-sm font-semibold text-on-band-muted"
    >
      <Link href="/" className="transition-colors hover:text-pom">
        Home
      </Link>
      <span aria-hidden className="size-1.5 rotate-45 bg-pom" />
      <Link href="/devlog" className="transition-colors hover:text-pom">
        Devlog
      </Link>
      <span aria-hidden className="size-1.5 rotate-45 bg-pom" />
      <span className="truncate text-paper" aria-current="page">
        {title}
      </span>
    </nav>
  )
}

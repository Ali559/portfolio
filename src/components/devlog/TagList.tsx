import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function TagList({ tags, className }: { tags: string[]; className?: string }) {
  if (!tags || tags.length === 0) return null

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <Link key={tag} href={`/devlog?tag=${encodeURIComponent(tag)}`}>
          <Badge
            variant="secondary"
            className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  )
}

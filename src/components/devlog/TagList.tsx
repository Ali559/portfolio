import Link from 'next/link'

import { Tag } from '@/components/devlog/Tag'
import { cn } from '@/lib/utils'

export function TagList({
  tags,
  onBand = false,
  className,
}: {
  tags: string[]
  onBand?: boolean
  className?: string
}) {
  if (!tags || tags.length === 0) return null

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <Link key={tag} href={`/devlog?tag=${encodeURIComponent(tag)}`}>
          <Tag onBand={onBand}>{tag}</Tag>
        </Link>
      ))}
    </div>
  )
}

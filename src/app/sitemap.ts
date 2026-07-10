import type { MetadataRoute } from 'next'

import { getAllDevlogEntries } from '@/lib/devlog'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const devlogEntries = getAllDevlogEntries()

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/devlog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...devlogEntries.map((entry) => ({
      url: `${siteUrl}/devlog/${entry.slug}`,
      lastModified: new Date(entry.frontmatter.date || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}

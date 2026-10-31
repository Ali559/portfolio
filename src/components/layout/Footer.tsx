'use client'

import { contactLinks } from '@/data/content'
import { useLocale } from '@/lib/locale'

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8 gap-4 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>{t.footer}</span>
        <div className="flex gap-6" dir="ltr">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href={`mailto:${contactLinks.email}`} className="hover:text-foreground">
            {contactLinks.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

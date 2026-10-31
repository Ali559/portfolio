'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { content, localeDirection, type Locale, type SiteContent } from '@/data/content'

// ─── Locale ─────────────────────────────────────────────────────────────────
//
// The site switches between English and Sorani on the client. The choice is
// remembered in localStorage and mirrored onto <html lang dir>, so the whole
// layout flips to right-to-left without any per-component direction logic.
// Devlog posts are English only and pin themselves to `dir="ltr"`.

const STORAGE_KEY = 'locale'

interface LocaleContextValue {
  locale: Locale
  t: SiteContent
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'en' || stored === 'ckb') setLocaleState(stored)
    } catch {
      // Storage can be blocked (private mode); English is a fine default.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = localeDirection[locale]
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {}
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, t: content[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside <LocaleProvider>')
  return value
}

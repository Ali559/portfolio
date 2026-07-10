'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ActiveSectionContext } from '@/lib/active-section-context'
import { useScrollSpy } from '@/lib/useScrollSpy'
import { navLinks } from '@/data'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()
  const isHome = pathname === '/'

  // The in-page anchor sections (Home/About/Projects/...) only exist on the
  // home page — the Devlog nav item is a real route, not a scroll target.
  const sectionIds = useMemo(
    () => navLinks.filter((link) => !link.link).map((link) => link.href.replace('#', '')),
    [],
  )

  const spySectionId = useScrollSpy(sectionIds, isHome)

  useEffect(() => {
    if (isHome && spySectionId) setActiveSection(spySectionId)
  }, [isHome, spySectionId])

  // Close the mobile menu whenever the route changes (e.g. navigating to
  // /devlog from the mobile menu), instead of leaving it stuck open.
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (localStorage.getItem('isDark') === 'true') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      localStorage.setItem('isDark', 'true')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('isDark', 'false')
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        activeSection={activeSection}
        isDark={isDark}
        isMenuOpen={isMenuOpen}
        onSetTheme={setIsDark}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        onCloseMenu={() => setIsMenuOpen(false)}
        onNavigateToSection={setActiveSection}
      />

      <main>
        <ActiveSectionContext.Provider value={setActiveSection}>
          {children}
        </ActiveSectionContext.Provider>
      </main>

      <Footer />
    </div>
  )
}

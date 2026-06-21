'use client'

import { useEffect, useState } from 'react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ActiveSectionContext } from '@/lib/active-section-context'
import { scrollToSection } from '@/lib/utils'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

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
        onScrollToSection={(id) => {
          setActiveSection(id)
          scrollToSection(id)
        }}
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

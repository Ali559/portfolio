'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Code2, Menu, Moon, Sun, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { navLinks } from '@/data'
import type { INavLink } from '@/types'
import { cn } from '@/lib/utils'

interface HeaderProps {
  isDark: boolean
  isMenuOpen: boolean
  activeSection: string
  onSetTheme: (value: boolean) => void
  onToggleMenu: () => void
  onCloseMenu: () => void
  onNavigateToSection: (sectionId: string) => void
}

export function Header({
  isDark,
  isMenuOpen,
  activeSection,
  onSetTheme,
  onToggleMenu,
  onCloseMenu,
  onNavigateToSection,
}: HeaderProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  function isActive(link: INavLink) {
    // Real routes (Devlog) are active for their whole subtree, so
    // /devlog/some-post still highlights "Devlog".
    if (link.link) return pathname === link.href || pathname.startsWith(`${link.href}/`)
    // In-page anchors are only ever "active" while on the home page.
    return isHome && activeSection.toLowerCase() === link.name.toLowerCase()
  }

  function NavItem({ link, mobile = false }: { link: INavLink; mobile?: boolean }) {
    const active = isActive(link)
    const className = cn(
      'capitalize transition-colors hover:text-primary',
      active ? 'text-primary' : 'text-muted-foreground',
      mobile && 'block w-full py-2 text-left',
    )

    if (link.link) {
      return (
        <Link href={link.href} className={className} onClick={onCloseMenu}>
          {link.name}
        </Link>
      )
    }

    // Anchors always resolve relative to the home page (`/#about`), so
    // they work correctly whether you're already home or on another route
    // like /devlog — Next.js scrolls smoothly to the target either way.
    return (
      <Link
        href={`/${link.href}`}
        className={className}
        onClick={() => {
          onNavigateToSection(link.href.replace('#', ''))
          onCloseMenu()
        }}
      >
        {link.name}
      </Link>
    )
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-[105%]"
          >
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-medium">Ali Barznji</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="ml-4"
              onClick={() => onSetTheme(!isDark)}
            >
              {!isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => onSetTheme(!isDark)}>
              {!isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onToggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} mobile />
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

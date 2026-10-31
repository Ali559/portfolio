'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Moon, Sun, X } from 'lucide-react'

import { useLocale } from '@/lib/locale'
import type { INavLink } from '@/types'
import { cn } from '@/lib/utils'

interface HeaderProps {
  links: INavLink[]
  isDark: boolean
  isMenuOpen: boolean
  activeSection: string
  onSetTheme: (value: boolean) => void
  onToggleMenu: () => void
  onCloseMenu: () => void
  onNavigateToSection: (sectionId: string) => void
}

export function Header({
  links,
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
  const { locale, t, setLocale } = useLocale()
  const otherLocale = locale === 'en' ? 'ckb' : 'en'

  function isActive(link: INavLink) {
    // Real routes (Devlog) are active for their whole subtree, so
    // /devlog/some-post still highlights "Devlog".
    if (link.link) return pathname === link.href || pathname.startsWith(`${link.href}/`)
    // In-page anchors are only ever "active" while on the home page.
    return isHome && activeSection === link.key
  }

  function NavItem({ link, mobile = false }: { link: INavLink; mobile?: boolean }) {
    const active = isActive(link)
    const className = cn(
      'transition-colors hover:text-primary',
      active ? 'text-foreground' : 'text-muted-foreground',
      mobile && 'block w-full py-2 text-start text-lg',
    )

    if (link.link) {
      return (
        <Link
          href={link.href}
          className={className}
          aria-current={active ? 'page' : undefined}
          onClick={onCloseMenu}
        >
          {t.nav[link.key]}
        </Link>
      )
    }

    // Anchors always resolve relative to the home page (`/#work`), so they
    // work whether you're already home or on another route like /devlog.
    return (
      <Link
        href={`/${link.href}`}
        className={className}
        aria-current={active ? 'true' : undefined}
        onClick={() => {
          onNavigateToSection(link.key)
          onCloseMenu()
        }}
      >
        {t.nav[link.key]}
      </Link>
    )
  }

  const themeLabel = isDark ? t.theme.toLight : t.theme.toDark

  const languageButton = (
    <button
      type="button"
      lang={otherLocale}
      dir={otherLocale === 'ckb' ? 'rtl' : 'ltr'}
      aria-label={t.switchLanguage.aria}
      onClick={() => setLocale(otherLocale)}
      className="ink-link cursor-pointer px-1"
    >
      {t.switchLanguage.label}
    </button>
  )

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3">
      <div
        className={cn(
          'mx-auto max-w-6xl border border-border bg-background/85 px-5 shadow-[0_10px_30px_-12px_rgb(23_15_59/0.35)] backdrop-blur-md transition-[border-radius] sm:px-6',
          isMenuOpen ? 'rounded-3xl' : 'rounded-full',
        )}
      >
        <div className="flex h-14 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight whitespace-nowrap"
          >
            <span aria-hidden className="size-3 rotate-45 rounded-[2px] bg-pom" />
            {t.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <NavItem key={link.key} link={link} />
            ))}
            {languageButton}
            <button
              type="button"
              aria-label={themeLabel}
              title={themeLabel}
              onClick={() => onSetTheme(!isDark)}
              className="cursor-pointer p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-4 md:hidden">
            {languageButton}
            <button
              type="button"
              aria-label={themeLabel}
              onClick={() => onSetTheme(!isDark)}
              className="cursor-pointer p-1 text-muted-foreground"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              aria-label={isMenuOpen ? t.menu.close : t.menu.open}
              aria-expanded={isMenuOpen}
              onClick={onToggleMenu}
              className="cursor-pointer p-1"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border py-3 md:hidden">
            {links.map((link) => (
              <NavItem key={link.key} link={link} mobile />
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

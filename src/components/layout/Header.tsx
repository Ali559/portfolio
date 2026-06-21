'use client'

import { motion } from 'framer-motion'
import { Code2, Menu, Moon, Sun, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { navLinks } from '@/data'

interface HeaderProps {
  isDark: boolean
  isMenuOpen: boolean
  activeSection: string
  onSetTheme: (value: boolean) => void
  onToggleMenu: () => void
  onScrollToSection: (sectionId: string) => void
}

export function Header({
  isDark,
  isMenuOpen,
  activeSection,
  onSetTheme,
  onToggleMenu,
  onScrollToSection,
}: HeaderProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-[105%]">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-medium">Ali Barznji</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`capitalize hover:text-primary transition-colors ${
                  activeSection.toLowerCase() === link.name.toLowerCase()
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
                onClick={() => onScrollToSection(link.name.toLowerCase())}
              >
                {link.name}
              </button>
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
              <button
                key={link.name}
                className={`block w-full text-left py-2 capitalize hover:text-primary transition-colors ${
                  activeSection.toLowerCase() === link.name.toLowerCase()
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
                onClick={() => onScrollToSection(link.name.toLowerCase())}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

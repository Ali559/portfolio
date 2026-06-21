'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { allSocials, introText } from '@/data'
import { useSetActiveSection } from '@/lib/active-section-context'
import { scrollToSection } from '@/lib/utils'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function HeroSection() {
  const setActiveSection = useSetActiveSection()

  const handleScrollToSection = (id: string) => {
    scrollToSection(id)
    setActiveSection(id)
  }

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <Avatar className="w-32 h-32 mx-auto mb-8">
            <AvatarImage src="/img/avatar.jpg" alt="Ali Barznji" className="object-cover" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl mb-6"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            {introText}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Button size="lg" onClick={() => handleScrollToSection('projects')}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => handleScrollToSection('contact')}>
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Button variant="ghost" size="icon" asChild>
              <a href={allSocials.github.link} target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={allSocials.linkedin.link} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={'mailto:' + allSocials.email.link}>
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

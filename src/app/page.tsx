import { AboutSection } from '@/components/sections/AboutSection'
import { AchievementSection } from '@/components/sections/AchievementSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { FunFactsSection } from '@/components/sections/FunFactsSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectSection } from '@/components/sections/ProjectSection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Fun Facts Section */}
      <FunFactsSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Achievements Section */}
      <AchievementSection />
    </>
  )
}

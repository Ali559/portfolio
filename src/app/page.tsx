import { AboutSection } from '@/components/Sections/AboutSection'
import { AchievementSection } from '@/components/Sections/AchievementSection'
import { ExperienceSection } from '@/components/Sections/ExperienceSection'
import { FunFactsSection } from '@/components/Sections/FunFactsSection'
import { HeroSection } from '@/components/Sections/HeroSection'
import { ProjectSection } from '@/components/Sections/ProjectSection'

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

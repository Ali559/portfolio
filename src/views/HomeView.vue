<script setup lang="ts">
import AboutSection from '@/components/Sections/AboutSection.vue'
import AchievementSection from '@/components/Sections/AchievementSection.vue'
import ExperienceSection from '@/components/Sections/ExperienceSection.vue'
import FunFactsSection from '@/components/Sections/FunFactsSection.vue'
import HeroSection from '@/components/Sections/HeroSection.vue'
import ProjectSection from '@/components/Sections/ProjectSection.vue'
import { funFacts, stats } from '@/data'
import { scrollToSection } from '@/lib/utils'
</script>

<template>
  <!-- Hero Section -->
  <HeroSection
    @scroll-to-section="
      (id) => {
        scrollToSection(id)
        $emit('change-section', id)
      }
    "
  />

  <!-- About Section -->
  <AboutSection />

  <!-- Fun Facts Section -->
  <FunFactsSection :facts="funFacts" :stats="stats" />

  <!-- Projects Section -->
  <ProjectSection />

  <!-- Experience Section -->
  <ExperienceSection />

  <!-- Achievements Section -->
  <AchievementSection />
</template>

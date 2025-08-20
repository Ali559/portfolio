import { describe, it, expect, beforeEach } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import HomeView from '../views/HomeView.vue'
import HeroSection from '@/components/Sections/HeroSection.vue';
import AboutSection from '@/components/Sections/AboutSection.vue';
import ProjectSection from '@/components/Sections/ProjectSection.vue';
import ExperienceSection from '@/components/Sections/ExperienceSection.vue';
import AchievementSection from '@/components/Sections/AchievementSection.vue';
import FunFactsSection from '@/components/Sections/FunFactsSection.vue';
describe('Home Page', () => {
  let wrapper: ReturnType<typeof mount>;
  beforeEach(async () => {
    wrapper = mount(HomeView, {
      global: {
        stubs: {
          HeroSection,
          AboutSection,
          ProjectSection,
          ExperienceSection,
          AchievementSection,
          FunFactsSection
        }
      }
    })
    await flushPromises()
  })
  it('mounts renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders alll the sections properly', () => {
    expect(wrapper.findComponent(HeroSection).exists()).toBe(true)
    expect(wrapper.findComponent(AboutSection).exists()).toBe(true)
    expect(wrapper.findComponent(ProjectSection).exists()).toBe(true)
    expect(wrapper.findComponent(ExperienceSection).exists()).toBe(true)
    expect(wrapper.findComponent(AchievementSection).exists()).toBe(true)
    expect(wrapper.findComponent(FunFactsSection).exists()).toBe(true)
  })
})

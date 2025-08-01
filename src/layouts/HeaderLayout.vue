<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { navLinks } from '@/data'
import { Code2, Menu, Moon, Sun, X } from 'lucide-vue-next'

defineProps<{
  isDark: boolean
  isMenuOpen: boolean
  activeSection: string
}>()
const emit = defineEmits<{
  (e: 'set-theme', value: boolean): void
  (e: 'toggle-menu', value: boolean): void
  (e: 'scroll-to-section', sectionId: string): void
}>()
</script>
<template>
  <nav
    v-motion
    :initial="{ y: -100 }"
    :enter="{ y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
    class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div
          class="flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-[105%]"
        >
          <Code2 class="h-8 w-8 text-primary" />
          <span class="text-xl font-medium">Ali Barznji</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <button
            v-for="(link, index) in navLinks"
            :key="index"
            class="capitalize hover:text-primary transition-colors"
            :class="
              activeSection.toLowerCase() === link.name.toLowerCase()
                ? 'text-primary'
                : 'text-muted-foreground'
            "
            @click="emit('scroll-to-section', link.name.toLowerCase())"
          >
            {{ link.name }}
          </button>
          <Button variant="ghost" size="icon" class="ml-4" @click="emit('set-theme', !isDark)">
            <Sun class="h-5 w-5" v-if="!isDark" />
            <Moon class="h-5 w-5" v-else />
          </Button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" @click="emit('set-theme', !isDark)">
            <Sun class="h-5 w-5" v-if="!isDark" />
            <Moon class="h-5 w-5" v-else />
          </Button>
          <Button variant="ghost" size="icon" @click="emit('toggle-menu', !isMenuOpen)">
            <X class="h-5 w-5" v-if="isMenuOpen" />
            <Menu class="h-5 w-5" v-else />
          </Button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        v-motion
        :initial="{ opacity: 0, height: 0 }"
        :exit="{ opacity: 0, height: 0 }"
        :enter="{
          opacity: 1,
          height: 'auto',
        }"
        class="md:hidden py-4 border-t border-border"
      >
        <button
          v-for="(link, index) in navLinks"
          :key="index"
          class="block w-full text-left py-2 capitalize hover:text-primary transition-colors"
          :class="
            activeSection.toLowerCase() === link.name.toLowerCase()
              ? 'text-primary'
              : 'text-muted-foreground'
          "
          @click="emit('scroll-to-section', link.name.toLowerCase())"
        >
          {{ link.name }}
        </button>
      </div>
    </div>
  </nav>
</template>

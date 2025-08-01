<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import AvatarFallback from '../ui/avatar/AvatarFallback.vue'
import AvatarImage from '../ui/avatar/AvatarImage.vue'
import Button from '../ui/button/Button.vue'
import Avatar from '../ui/avatar/Avatar.vue'
import { introText } from '@/data'
const emit = defineEmits<{
  (e: 'scroll-to-section', sectionId: string): void
}>()
</script>
<template>
  <section
    id="home"
    class="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-4xl mx-auto text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
      >
        <Avatar class="w-32 h-32 mx-auto mb-8">
          <AvatarImage src="/src/assets/img/avatar.jpg" class="object-cover" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>

        <h1
          class="text-4xl sm:text-6xl lg:text-7xl mb-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        >
          Full Stack Developer
        </h1>

        <p
          class="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        >
          {{ introText }}
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        >
          <Button size="lg" @click="emit('scroll-to-section', 'projects')"> View My Work </Button>
          <Button variant="outline" size="lg" @click="emit('scroll-to-section', 'contact')">
            Get In Touch
          </Button>
        </div>

        <div
          class="flex justify-center space-x-6 mt-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github class="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin class="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:alex@example.com">
              <Mail class="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

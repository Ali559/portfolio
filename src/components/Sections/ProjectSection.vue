<script setup lang="ts">
import { projects } from '@/data'
import Card from '../ui/card/Card.vue'
import Button from '../ui/button/Button.vue'
import { Code2, ExternalLink, Github } from 'lucide-vue-next'
import CardHeader from '../ui/card/CardHeader.vue'
import CardTitle from '../ui/card/CardTitle.vue'
import CardDescription from '../ui/card/CardDescription.vue'
import CardContent from '../ui/card/CardContent.vue'
import Badge from '../ui/badge/Badge.vue'
</script>
<template>
  <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div class="max-w-6xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl sm:text-4xl mb-4">Featured Projects</h2>
        <p class="text-xl text-muted-foreground">
          Here are some of my recent projects that showcase my skills and experience
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
          class="h-full transition-transform duration-300 hover:scale-105"
        >
          <Card class="h-full overflow-hidden group">
            <div class="relative overflow-hidden">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                v-else
                class="bg-accent w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              >
                <Code2 class="h-full w-full" />
              </div>

              <div
                v-if="project.github || project.live"
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
              >
                <Button v-if="project.github" size="sm" variant="secondary" asChild>
                  <a :href="project.github" target="_blank" rel="noopener noreferrer">
                    <Github class="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>

                <Button v-if="project.live" size="sm" asChild>
                  <a :href="project.live" target="_blank" rel="noopener noreferrer">
                    <ExternalLink class="h-4 w-4 mr-2" />
                    Live
                  </a>
                </Button>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{{ project.title }}</CardTitle>
              <CardDescription>{{ project.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge v-for="tech in project.technologies" :key="tech" variant="secondary">
                  {{ tech }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

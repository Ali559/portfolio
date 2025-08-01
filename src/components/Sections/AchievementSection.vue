<script setup lang="ts">
import { achievements, allSocials } from '@/data'
import Card from '../ui/card/Card.vue'
import CardHeader from '../ui/card/CardHeader.vue'
import { Award, Calendar, Code2, Download, Github, Linkedin, Mail } from 'lucide-vue-next'
import CardTitle from '../ui/card/CardTitle.vue'
import CardDescription from '../ui/card/CardDescription.vue'
import CardContent from '../ui/card/CardContent.vue'
import Button from '../ui/button/Button.vue'
</script>
<template>
  <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div class="max-w-6xl mx-auto">
      <div
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl sm:text-4xl mb-4">Let's Connect</h2>
        <p class="text-xl text-muted-foreground">
          Ready to discuss your next project or explore collaboration opportunities
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Section -->
        <div
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
          class="space-y-8"
        >
          <div>
            <h3 class="text-2xl mb-6">Get In Touch</h3>
            <p class="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, interesting projects, or potential
              collaborations. Feel free to reach out if you have any questions or just want to say
              hello!
            </p>

            <div class="space-y-6">
              <div
                class="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border transition-all hover:bg-accent hover:ml-5"
              >
                <div class="p-2 bg-primary/10 rounded-lg">
                  <Mail class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p class="font-medium">{{ allSocials.email.name }}</p>
                  <p class="text-muted-foreground">{{ allSocials.email.link }}</p>
                </div>
              </div>

              <div
                class="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border transition-all hover:bg-accent hover:ml-5"
              >
                <div class="p-2 bg-primary/10 rounded-lg">
                  <Github class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p class="font-medium">{{ allSocials.github.name }}</p>
                  <p class="text-muted-foreground">{{ allSocials.github.link }}</p>
                </div>
              </div>

              <div
                class="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border transition-all hover:bg-accent hover:ml-5"
              >
                <div class="p-2 bg-primary/10 rounded-lg">
                  <Linkedin class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p class="font-medium">{{ allSocials.linkedin.name }}</p>
                  <p class="text-muted-foreground">{{ allSocials.linkedin.link }}</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <Button size="lg" class="w-full" asChild>
                <a href="/resume.pdf" download>
                  <Download class="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
          class="space-y-6"
        >
          <h3 class="text-2xl mb-6">Achievements & Certifications</h3>

          <div
            v-for="(achievement, index) in achievements"
            :key="index"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
          >
            <Card class="hover:shadow-lg transition-shadow duration-300">
              <CardHeader class="pb-3">
                <div class="flex items-start justify-between">
                  <div class="flex items-start space-x-3">
                    <div class="p-2 bg-primary/10 rounded-lg">
                      <Award class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle class="text-lg">{{ achievement.title }}</CardTitle>
                      <CardDescription class="text-primary">{{
                        achievement.issuer
                      }}</CardDescription>
                    </div>
                  </div>
                  <div class="flex items-center space-x-1 text-muted-foreground">
                    <Calendar class="h-4 w-4" />
                    <span class="text-sm">{{ achievement.year }}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground">{{ achievement.description }}</p>
              </CardContent>
            </Card>
          </div>

          <Card class="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent class="pt-6">
              <div class="text-center">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4"
                >
                  <Code2 class="h-6 w-6 text-primary" />
                </div>
                <h4 class="font-medium mb-2">Available for new opportunities</h4>
                <p class="text-muted-foreground text-sm">
                  Currently open to freelance projects and full-time positions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Tabs from '../ui/tabs/Tabs.vue'
import TabsList from '../ui/tabs/TabsList.vue'
import TabsTrigger from '../ui/tabs/TabsTrigger.vue'
import Progress from '../ui/progress/Progress.vue'
import TabsContent from '../ui/tabs/TabsContent.vue'
import Card from '../ui/card/Card.vue'
import CardHeader from '../ui/card/CardHeader.vue'
import CardTitle from '../ui/card/CardTitle.vue'
import { Database, Server, Smartphone } from 'lucide-vue-next'
import CardContent from '../ui/card/CardContent.vue'
import { aboutText, skills } from '@/data'
</script>
<template>
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl sm:text-4xl mb-4">About Me</h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          {{ aboutText }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        >
          <h3 class="text-2xl mb-6">Skills & Technologies</h3>
          <!-- 'Languages' |'Tools' | 'Frameworks' | 'Databases' | 'Other' -->
          <Tabs defaultValue="Languages" class="w-full">
            <TabsList class="grid w-full grid-cols-4">
              <TabsTrigger value="Languages">Languages</TabsTrigger>
              <TabsTrigger value="Tools">Tools</TabsTrigger>
              <TabsTrigger value="Frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="Databases">Databases</TabsTrigger>
            </TabsList>
            <TabsContent
              v-for="(category, index) in [
                'Languages',
                'Tools',
                'Frameworks',
                'Databases',
                'Other',
              ]"
              :key="index"
              :value="category"
              class="space-y-4 mt-6"
            >
              <div
                v-for="(skill, index) in skills.filter((s) => s.category === category)"
                :key="index"
                class="space-y-2"
              >
                <div class="flex justify-between">
                  <span>{{ skill.name }}</span>
                  <span class="text-muted-foreground">{{ skill.level }}%</span>
                </div>
                <Progress v-model="skill.level" class="h-2" />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
          class="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Smartphone class="h-5 w-5" />
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">
                Creating responsive, interactive user interfaces with React, Next.js, and modern CSS
                frameworks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Server class="h-5 w-5" />
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">
                Building robust APIs and server-side applications with Node.js, Python, and cloud
                services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Database class="h-5 w-5" />
                Database Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">
                Designing efficient database schemas and optimizing queries for both SQL and NoSQL
                databases.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

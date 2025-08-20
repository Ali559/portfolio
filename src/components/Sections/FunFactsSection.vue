<script setup lang="ts">
import type { IFunFact, IStat } from '@/types'
import Card from '../ui/card/Card.vue'
import CardHeader from '../ui/card/CardHeader.vue'
import CardTitle from '../ui/card/CardTitle.vue'
import CardContent from '../ui/card/CardContent.vue'
interface Props {
  facts: IFunFact[]
  stats: IStat[]
}
defineProps<Props>()
</script>
<template>
  <section id="fun-facts" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div class="max-w-6xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl sm:text-4xl mb-4">Fun Facts About Me</h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Beyond coding, here are some interesting things that make me who I am
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(fact, index) in facts"
          :key="index"
          v-motion
          :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
          class="h-full hover:scale-105 transition-transform duration-500"
        >
          <Card
            :class="[
              fact.color,
              'h-full overflow-hidden group relative bg-gradient-to-br border-border/50 hover:border-primary/30 transition-all duration-300',
            ]"
          >
            <CardHeader class="pb-3">
              <div class="flex items-center justify-between mb-3">
                <div
                  class="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <component :is="fact.icon" class="h-6 w-6 text-primary" />
                </div>
                <div class="w-2 h-2 bg-primary/30 rounded-full" />
              </div>
              <CardTitle class="text-lg group-hover:text-primary transition-colors duration-300">
                {{ fact.title }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ fact.description }}
              </p>
            </CardContent>

            <!-- {/* Animated background effect */} -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
          </Card>
        </div>
      </div>

      <!-- Additional Stats Section  -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        class="mt-16"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, animation: 'ease-in-out', animationDuration: '500ms' }"
            class="text-center"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
            >
              <component :is="stat.icon" class="h-8 w-8 text-primary" />
            </div>
            <div class="text-3xl font-medium text-primary mb-2">{{ stat.number }}</div>
            <div class="text-muted-foreground">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

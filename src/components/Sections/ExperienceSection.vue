<script setup lang="ts">
import { experience } from '@/data'
import Card from '../ui/card/Card.vue'
import CardHeader from '../ui/card/CardHeader.vue'
import CardTitle from '../ui/card/CardTitle.vue'
import CardDescription from '../ui/card/CardDescription.vue'
import Badge from '../ui/badge/Badge.vue'
import CardContent from '../ui/card/CardContent.vue'
</script>
<template>
  <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl sm:text-4xl mb-4">Experience</h2>
        <p class="text-xl text-muted-foreground">My professional journey and career highlights</p>
      </div>

      <div class="space-y-8">
        <div
          v-for="(exp, index) in experience"
          :key="index"
          :initial="{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }"
          :enter="{ opacity: 1, x: 0, animation: 'ease-in-out', animationDuration: '500ms' }"
        >
          <Card>
            <CardHeader>
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <CardTitle class='leading-6'>{{ exp.title }}</CardTitle>
                  <CardDescription class="text-primary">{{ exp.company }}</CardDescription>
                </div>
                <Badge variant="outline">{{ exp.period }}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">{{ exp.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

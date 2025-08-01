<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { allSocials } from '@/data'
import { Code2, Github, Linkedin, Mail } from 'lucide-vue-next'
</script>
<template>
  <footer class="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
    <div class="max-w-6xl mx-auto">
      <Separator class="mb-8" />
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div class="flex items-center space-x-2">
          <Code2 class="h-6 w-6 text-primary" />
          <span>© 2025 Ali Barznji. All rights reserved.</span>
        </div>
        <div class="flex space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a :href="allSocials.github.link" target="_blank" rel="noopener noreferrer">
              <Github class="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a :href="allSocials.linkedin.link" target="_blank" rel="noopener noreferrer">
              <Linkedin class="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a :href="`mailto:${allSocials.email.link}`">
              <Mail class="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>

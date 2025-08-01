<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import HeaderLayout from './layouts/HeaderLayout.vue'
import FooterLayout from './layouts/FooterLayout.vue'
import { scrollToSection } from './lib/utils'

const isDark = ref<boolean>(false)

const isMenuOpen = ref<boolean>(false)
const activeSection = ref<string>('home')

onBeforeMount(() => {
  if (localStorage.getItem('isDark') === 'true') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

watch(isDark, (value) => {
  if (value) {
    localStorage.setItem('isDark', 'true')
    document.documentElement.classList.add('dark')
  } else {
    localStorage.setItem('isDark', 'false')
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <HeaderLayout
      :active-section="activeSection"
      :is-dark="isDark"
      :is-menu-open="isMenuOpen"
      @set-theme="(value) => (isDark = value)"
      @toggle-menu="isMenuOpen = !isMenuOpen"
      @scroll-to-section="
        (id) => {
          activeSection = id
          scrollToSection(id)
        }
      "
    />

    <main>
      <router-view @change-section="(id: string) => (activeSection = id)" />
    </main>
  </div>

  <FooterLayout />
</template>

<style scoped></style>

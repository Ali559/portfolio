<script setup lang="ts">
import LogoFilledIcon from "~/assets/icons/logo-filled-icon.vue";
import MenuTriggerIcon from "~/assets/icons/MenuTrigger-icon.vue";
import { links } from "~/data";

const emit = defineEmits(["toggleMenu"]);
</script>
<template>
  <div class="overflow-x-hidden sticky top-0 z-30 bg-[#282c33]">
    <header class="w-[70%] p-8 mx-auto hidden lg:block">
      <nav class="w-full flex items-center">
        <NuxtLink to="/" class="flex items-center gap-1 bg-transparent">
          <LogoFilledIcon class="w-4 h-4" />
          <h1 class="text-base font-bold text-white">Ali</h1>
        </NuxtLink>
        <ul class="flex items-end-safe gap-6 ml-auto">
          <li v-for="link in links" :key="link.name">
            <NuxtLink
              :to="link.path"
              active-class="text-white"
              class="text-secondary hover:text-white text-base font-medium"
            >
              <span class="text-primary">#</span>{{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <header
      class="w-full p-4 lg:hidden transition-all duration-300 ease-in-out"
    >
      <nav class="flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 cursor-pointer">
          <LogoFilledIcon class="h-4 w-4" />
          <h1 class="text-base font-bold text-white">Ali</h1>
        </NuxtLink>
        <button class="cursor-pointer" @click="emit('toggleMenu')">
          <MenuTriggerIcon />
        </button>
      </nav>
    </header>
  </div>
</template>

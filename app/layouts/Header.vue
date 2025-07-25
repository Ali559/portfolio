<script setup lang="ts">
import LogoFilledIcon from "~/assets/icons/logo-filled-icon.vue";
import MenuTriggerIcon from "~/assets/icons/MenuTrigger-icon.vue";
import type { Link } from "~/types";

const links: Link[] = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "about-me",
    path: "#about-me",
  },
  {
    name: "works",
    path: "#projects",
  },
  {
    name: "contacts",
    path: "#contacts",
  },
  {
    name: "skills",
    path: "#skills",
  },
];

const emit = defineEmits(["toggleMenu"]);
</script>
<template>
  <div class="overflow-x-hidden sticky top-0 z-30">
    <header
      class="bg-transparent w-[70%] p-8 mx-auto hidden lg:block bg:[--ui-background]"
    >
      <nav class="w-full flex items-center">
        <button class="flex items-center gap-1 bg-transparent">
          <LogoFilledIcon class="w-4 h-4" />
          <h1 class="text-base font-bold text-white">Ali</h1>
        </button>
        <ul class="flex items-end-safe gap-6 ml-auto">
          <li v-for="link in links" :key="link.name">
            <NuxtLink
              :to="link.path"
              active-class="text-white"
              class="text-[#ABB2BF] hover:text-white text-base font-medium"
            >
              <span class="text-primary">#</span>{{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <header
      class="bg-transparent w-full p-4 lg:hidden transition-all duration-300 ease-in-out bg:[--ui-background]"
    >
      <nav class="flex items-center justify-between">
        <button class="flex items-center gap-2 cursor-pointer">
          <LogoFilledIcon class="h-4 w-4" />
          <h1 class="text-base font-bold text-white">Ali</h1> 
        </button>
        <button class="cursor-pointer" @click="emit('toggleMenu')">
          <MenuTriggerIcon />
        </button>
      </nav>
    </header>
  </div>
</template>

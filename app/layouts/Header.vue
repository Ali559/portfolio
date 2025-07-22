<script setup lang="ts">
import LogoFilledIcon from "~/assets/icons/logo-filled-icon.vue";
import type { Link } from "~/types";

const links: Link[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about-me",
    path: "/about-me",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "works",
    path: "/works",
  },
];
</script>
<template>
  <header class="bg-transparent w-[70%] p-8 mx-auto fixed z-10 left-1/5 ">
    <nav class="w-full flex items-center">
      <UButton to="/" class="flex items-center gap-1 bg-transparent">
        <LogoFilledIcon class="w-4 h-4" />
        <h1 class="text-base font-bold text-white">Ali</h1>
      </UButton>
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
</template>

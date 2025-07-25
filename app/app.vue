<script setup lang="ts">
import LinksString from "./components/LinksString.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <UApp>
    <LinksString />
    <NuxtLayout>
      <SpeedInsights />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

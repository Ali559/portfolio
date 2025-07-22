<script setup lang="ts">
import LinksString from "./components/LinksString.vue";
</script>

<template>
  <UApp class="bg-background">
    <LinksString />
    <NuxtLayout name="header">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

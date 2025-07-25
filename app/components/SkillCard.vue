<template>
  <div class="border-1 border-secondary">
    <!-- Header Section -->
    <div class="border-b-secondary p-2">
      <p class="text-base font-medium text-white">{{ category }}</p>
    </div>

    <div class="flex gap-2 p-2 items-center border-t-1 flex-wrap">
      <p
        v-for="(skill, index) in skills"
        :key="index"
        class="text-secondary text-base font-normal cursor-pointer p-1 rounded-md transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white"
      >
        {{ skill }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISkills } from "~/types";

defineProps<ISkills>();
</script>

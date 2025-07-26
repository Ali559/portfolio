<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="border-[#C778DD] border-1 py-2 px-4 text-white font-medium hover:bg-[#C778DD] transition-colors duration-500 ease-in-out rounded-xs cursor-pointer"
  >
    {{ text }}
  </NuxtLink>
  <button
    v-else
    class="border-[#C778DD] border-1 py-2 px-4 text-white font-medium hover:bg-[#C778DD] transition-colors duration-500 ease-in-out rounded-xs cursor-pointer"
  >
    {{ text }}
  </button>
</template>
<script setup lang="ts">
defineProps<{
  text: string;
  to?: string;
}>();
</script>

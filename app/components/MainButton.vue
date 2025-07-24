<template>
  <NuxtLink
    :to="to"
    class="border-[#C778DD] border-1 py-2 px-4 text-white font-medium hover:bg-[#C778DD] transition-colors duration-500 ease-in-out rounded-xs"
  >
    {{ text }}
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>

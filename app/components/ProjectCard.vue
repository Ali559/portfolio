<template>
  <div class="border-1 border-secondary cursor-pointer">
    <img
      v-if="image"
      :src="image"
      alt="Course Image"
      class="w-full h-50 object-cover"
    />
    <!-- Tags -->
    <div
      class="flex gap-2 p-2 items-center border-b-secondary border-t-1 flex-wrap"
    >
      <p
        v-for="(tag, index) in tags"
        :key="index"
        class="text-secondary text-base font-normal cursor-pointer p-1 rounded-md transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white"
      >
        {{ tag }}
      </p>
    </div>
    <div class="p-4">
      <h3 class="text-white font-medium text-2xl">{{ name }}</h3>
      <p class="text-secondary font-normal text-base mt-4">{{ description }}</p>
      <div class="mt-4 flex items-center gap-2">
        <MainButton
          v-if="link"
          :text="linkText ? linkText : 'Live <~>'"
          :to="link"
        />
        <MainButton
          v-if="previewImage"
          text="Cached >="
          class="border-secondary hover:bg-secondary hover:text-white"
          @click.capture="() => $emit('preview', previewImage as string)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProject } from "~/types";
const MainButton = defineAsyncComponent(
  () => import("~/components/MainButton.vue"),
);
defineProps<IProject>();
defineEmits(["preview"]);
</script>

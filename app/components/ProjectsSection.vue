<template>
  <section id="projects" class="relative">
    <DotsIcon
      class="absolute -left-12 top-1/2 translate-y-1/2 hidden xl:block"
    />

    <HalfSquareIcon
      class="absolute bottom-1/2 translate-y-1/2 -right-20 hidden h-38 w-38 xl:block"
    />
    <!-- previewOverlay -->
    <Transition :duration="500" name="fade" class=".fade">
      <div
        v-if="preview && previewImage"
        class="fixed top-0 bottom-0 inset-0 z-50 backdrop-blur-2xl"
        @click="preview = false"
      >
        <div class="relative">
          <div
            class="overflow-y-auto h-[100vh] w-[90%] mx-auto relative no-scrollbar"
          >
            <button
              class="absolute top-4 right-4 cursor-pointer p-2"
              @click="preview = false"
            >
              <XIcon />
            </button>
            <img
              :src="previewImage"
              alt="Preview Image"
              class="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </Transition>

    <!-- Projects -->
    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <!-- Header Section -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <h2 class="text-3xl font-medium text-white">
            <span class="text-primary">#</span>{{ sectionTitle }}
          </h2>
          <!-- Line -->
          <div
            v-if="line"
            class="h-[1px] w-xl bg-primary hidden lg:block"
          ></div>
        </div>
        <!-- View All -->
        <NuxtLink
          v-if="viewAllLink"
          :to="viewAllLink"
          class="text-white font-medium text-base transition-all duration-500 ease-in-out hover:scale-105"
          >View all ~~>
        </NuxtLink>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        <ProjectCard
          v-for="(project, index) in data"
          :key="index"
          v-bind="project"
          @preview="handlePreview"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProject } from "~/types";

const DotsIcon = defineAsyncComponent(
  () => import("~/assets/icons/dots-icon.vue"),
);
const HalfSquareIcon = defineAsyncComponent(
  () => import("~/assets/icons/Half-square-icon.vue"),
);
const XIcon = defineAsyncComponent(() => import("~/assets/icons/X-icon.vue"));

const preview = ref<boolean>(false);
const previewImage = ref<string | null>(null);
const handlePreview = (image: string) => {
  preview.value = true;
  previewImage.value = image;
};
interface Props {
  data: IProject[];
  sectionTitle: string;
  viewAllLink?: string;
  line: boolean;
}
defineProps<Props>();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

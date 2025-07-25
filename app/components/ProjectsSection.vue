<template>
  <section id="projects" class="relative">
    <DotsIcon
      class="absolute -left-12 top-1/2 translate-y-1/2 hidden lg:block"
    />

    <HalfSquareIcon
      class="absolute bottom-1/2 translate-y-1/2 right-0 hidden lg:block"
    />
    <!-- previewOverlay -->
    <Transition :duration="500" name="fade" class=".fade">
      <div
        v-if="preview && previewImage"
        class="backdrop-blur-2xl fixed top-0 left-0 w-full h-full z-20 overflow-y-scroll"
        @click="preview = false"
      >
        <img
          :src="previewImage"
          alt="Preview Image"
          class="w-2/3 mx-auto h-full object-contain"
        />
      </div>
    </Transition>

    <!-- Projects -->
    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <!-- Header Section -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <h2 class="text-3xl font-medium">
            <span class="text-primary">#</span>projects
          </h2>
          <!-- Line -->
          <div class="h-[1px] w-xl bg-primary hidden lg:block"></div>
        </div>
        <!-- View All -->
        <NuxtLink
          to="/projects"
          class="font-medium text-base transition-all duration-500 ease-in-out hover:scale-105"
          >View all ~~>
        </NuxtLink>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 ">
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
import InzpiriImage from "~/assets/img/projects/inzpiri.png";
import SmartPricerImage from "~/assets/img/projects/smart-pricer.png";
import SeeYouImage from "~/assets/img/projects/seeyou.png";
import WizRXImage from "~/assets/img/projects/wizrx.jpg";
import WiZRXPreviewImage from "~/assets/img/projects/previews/wizrx.jpg";

const DotsIcon = defineAsyncComponent(
  () => import("~/assets/icons/dots-icon.vue"),
);
const HalfSquareIcon = defineAsyncComponent(
  () => import("~/assets/icons/Half-square-icon.vue"),
);

const data: IProject[] = [
  {
    name: "Inzpiri (In progress)",
    image: InzpiriImage,
    description: "Online Education Platform for Teachers and Students",
    link: "https://beta.inzpiri.com",
    tags: [
      "Vuejs",
      "Tailwindcss",
      "Vite",
      "AWS",
      "Github",
      "Git",
      "Figma",
      "Go",
      "MongoDB",
      "Docker",
      "Redis",
      "Typescript",
    ],
  },
  {
    name: "WiZRX",
    image: WizRXImage,
    description:
      "collaboration tool designed to empower businesses by streamlining communication and strengthening internal connections.",
    link: "https://masterwizr.com/wizr-x/",
    tags: [
      "Reactjs",
      "PostCSS",
      "Vite",
      "AWS",
      "Github",
      "Git",
      "Figma",
      "Go",
      "Nestjs",
      "MongoDB",
      "Socket.io",
      "Typescript",
    ],
    previewImage: WiZRXPreviewImage,
  },
  {
    name: "Smart Pricer",
    image: SmartPricerImage,
    description:
      "Ticketing and Price Analytics as well as Dynamic Pricing based on Data Science for Ski Resorts, Sports, Cinema and Entertainment.",
    link: "https://www.smart-pricer.com/",
    tags: [
      "Nodejs",
      "Express",
      "Typescript",
      "MongoDB",
      "Proxy",
      "JWT",
      "Redis",
      "Git",
      "Github",
      "Swagger",
    ],
  },
  {
    name: "SEEYOU",
    image: SeeYouImage,
    description:
      "A Modern All in one Communication Platform for Teams and Individuals.",
    link: "https://www.smart-pricer.com/",
    tags: [
      "Nodejs",
      "Express",
      "Typescript",
      "MongoDB",
      "Proxy",
      "JWT",
      "Redis",
      "Git",
      "Github",
      "Swagger",
    ],
  },
];
const preview = ref<boolean>(false);
const previewImage = ref<string | null>(null);
const handlePreview = (image: string) => {
  preview.value = true;
  previewImage.value = image;
};
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
</style>

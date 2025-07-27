<script setup lang="ts">
import { allSocials } from "~/data";

const DotsIcon = defineAsyncComponent(
  () => import("~/assets/icons/dots-icon.vue"),
);
</script>

<template>
  <section id="all-media" class="relative">
    <DotsIcon
      class="h-12.5 w-27 absolute -left-10 bottom-1/2 translate-y-1/2 hidden xl:block"
    />
    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <h2 class="text-3xl font-medium text-white">
          <span class="text-primary">#</span>all-media
        </h2>
      </div>

      <div class="mt-5.5 flex items-center gap-4 flex-wrap">
        <div
          v-for="(link, index) in allSocials"
          :key="index"
          class="flex gap-2 items-center"
        >
          <NuxtLink
            :to="link.link"
            target="_blank"
            class="flex items-center gap-2 text-secondary text-base font-medium hover:text-primary transition-colors duration-500 ease-in-out"
          >
            <component :is="link.icon" class="w-6 h-6" />
            {{
              link.username.includes("@") ? link.username : "@" + link.username
            }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

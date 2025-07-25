<template>
  <section id="about-me" class="relative">
    <DotsIcon
      class="absolute -right-12 top-1/2 translate-y-1/2 hidden lg:block"
    />
    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <!-- Header Section -->
      <div class="flex items-center gap-4">
        <h2 class="text-3xl font-medium text-white">
          <span class="text-primary">#</span>about
        </h2>
        <!-- Line -->
        <div class="h-[1px] w-xl bg-primary"></div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col gap-20 lg:flex-row">
        <img
          src="~/assets/img/about.png"
          alt="about image"
          class="w-1/2 mx-auto lg:hidden"
        />
        <div class="mt-5.5 text-left text-wrap lg:w-2/3">
          <p class="text-secondary text-xl">Hello, I'm Ali</p>
          <br /><br />
          <p class="text-secondary text-xl">
            {{ introText }}
          </p>

          <div class="mt-8">
            <MainButton text="Read more ->" to="/about" />
          </div>
        </div>
        <img
          src="~/assets/img/about.png"
          alt="about image"
          class="w-1/2 hidden lg:block"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { introText } from "~/data";
const DotsIcon = defineAsyncComponent(
  () => import("~/assets/icons/dots-icon.vue"),
);
</script>

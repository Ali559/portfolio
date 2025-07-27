<script setup lang="ts">
import DotsIcon from "~/assets/icons/dots-icon.vue";
import GithubIcon from "~/assets/icons/github-icon.vue";
import LinkedinIcon from "~/assets/icons/linkedin-icon.vue";
import LogoFilledIcon from "~/assets/icons/logo-filled-icon.vue";
import MailIcon from "~/assets/icons/mail-icon.vue";
const socialLinks = [
  {
    icon: GithubIcon,
    name: "github",
    path: "https://github.com/ali559",
  },
  {
    icon: LinkedinIcon,
    name: "linkedin",
    path: "https://www.linkedin.com/in/ali-barznji-36b664325/",
  },
  {
    icon: MailIcon,
    name: "Email",
    path: "mailto:biz@alibarznji.dev",
  },
];
</script>

<template>
  <footer class="border-t-1 border-secondary relative">
    <div class="max-w-[1070px] mx-auto px-4 py-8">
      <div
        class="w-full flex flex-col gap-16 sm:flex-row sm:justify-between sm:gap-0"
      >
        <!-- First Row/Column -->
        <div>
          <div class="flex items-center gap-2">
            <button class="flex items-center gap-1 bg-transparent">
              <LogoFilledIcon class="w-4 h-4" />
              <h1 class="text-base font-bold text-white">Ali</h1>
            </button>
            <NuxtLink
              to="mailto:biz@alibarznji.dev"
              class="text-secondary hover:text-primary transition-colors duration-300 ease-in-out"
            >
              biz@alibarznji.dev
            </NuxtLink>
          </div>
          <p class="text-white mt-4">
            Fullstack Engineer and a Programming Enthusiast
          </p>
        </div>

        <!-- Second Row/Column -->
        <div>
          <h3 class="text-white font-medium text-2xl">Media</h3>
          <div class="flex items-center gap-2 mt-2">
            <NuxtLink
              v-for="(link, index) in socialLinks"
              :key="index"
              target="_blank"
              :to="link.path"
              class="text-secondary hover:text-primary transition-colors duration-300 ease-in-out"
            >
              <component :is="link.icon" class="w-8 h-8" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <p class="text-secondary text-center w-full mt-16">
        © Copyright 2025. Made by Ali
      </p>
    </div>
    <DotsIcon class="absolute -right-10 -bottom-20 hidden xl:block" />
  </footer>
</template>

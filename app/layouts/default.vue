<template>
  <div>
    <div
      class="transition-transform duration-300 ease-in-out"
      :class="isMenuOpen ? 'translate-x-full' : 'translate-x-0'"
    >
      <SpeedInsights />
      <HeaderLayout
        :is-menu-open="isMenuOpen"
        @toggle-menu="isMenuOpen = !isMenuOpen"
      />
      <slot />
      <FooterLayout />
    </div>

    <!-- Mobile Menu -->
    <div
      class="fixed top-0 -left-[100%] w-full h-[100vh] transition-all duration-300 ease-in-out z-10 p-4 overflow-hidden"
      :class="isMenuOpen ? 'left-0' : ''"
    >
      <div class="relative w-full h-full">
        <div class="flex items-center justify-between">
          <button class="flex items-center gap-2 cursor-pointer">
            <LogoFilledIcon class="w-4 h-4" />
            <h1 class="text-base font-bold text-white">Ali</h1>
          </button>
          <button class="cursor-pointer" @click="isMenuOpen = false">
            <XIcon class="w-6 h-6" />
          </button>
        </div>
        <ul
          class="bg-background w-full h-[50%] flex flex-col items-start gap-8 pt-12"
        >
          <li v-for="link in links" :key="link.name">
            <NuxtLink
              :to="link.path"
              active-class="text-white"
              class="text-[#ABB2BF] hover:text-white text-3xl font-medium"
              @click.capture="isMenuOpen = false"
            >
              <span class="text-primary">#</span>{{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div
        class="fixed bottom-20 flex items-center justify-center gap-4 w-full"
      >
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.name"
          :to="link.path"
          class="flex items-center gap-1 py-2 max-h-1/3"
        >
          <component :is="link.icon" class="w-12 h-12" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import GithubIcon from "~/assets/icons/github-icon.vue";
import LinkedinIcon from "~/assets/icons/linkedin-icon.vue";
import MailIcon from "~/assets/icons/mail-icon.vue";
import type { Link } from "~/types";
import XIcon from "~/assets/icons/X-icon.vue";
import LogoFilledIcon from "~/assets/icons/logo-filled-icon.vue";
import FooterLayout from "./Footer.vue";
const HeaderLayout = defineAsyncComponent(() => import("~/layouts/Header.vue"));

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

const links: Link[] = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "works",
    path: "#projects",
  },
  {
    name: "skills",
    path: "#skills",
  },
  {
    name: "about-me",
    path: "#about-me",
  },
  {
    path: "#contacts",
    name: "contacts",
  },
];
const isMenuOpen = ref<boolean>(false);

watch(isMenuOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

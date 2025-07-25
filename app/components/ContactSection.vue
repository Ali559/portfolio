<template>
  <section id="contacts" class="relative">
    <DotsIcon
      class="absolute -left-12 top-1/2 translate-y-1/2 hidden lg:block"
    />
    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <div class="flex items-center gap-4">
        <h2 class="text-3xl font-medium text-white">
          <span class="text-primary">#</span>contacts
        </h2>
        <!-- Line -->
        <div class="h-[1px] w-xs bg-primary"></div>
      </div>

      <!-- Main Content -->
      <div
        class="flex flex-col mt-12 gap-8 w-full sm:flex-row sm:items-center sm:justify-between sm:gap-0"
      >
        <p class="text-secondary text-base font-medium max-w-2/3">
          {{ contactText }}
        </p>
        <div class="p-4 border-1 border-secondary">
          <p class="text-white font-semibold text-base text-center">
            Message me here
          </p>
          <div class="flex flex-col items-center space-y-2 mt-4">
            <NuxtLink
              v-for="(link, index) in socialLinks"
              :key="index"
              target="_blank"
              :to="link.path"
              class="text-secondary text-base font-medium flex items-center gap-2 hover:text-primary transition-colors duration-500 ease-in-out w-full"
            >
              <component :is="link.icon" class="w-6 h-6" />
              {{ link.username }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LinkedinIcon from "~/assets/icons/linkedin-icon.vue";
import MailIcon from "~/assets/icons/mail-icon.vue";
import { contactText } from "~/data";

const DotsIcon = defineAsyncComponent(
  () => import("~/assets/icons/dots-icon.vue"),
);

const socialLinks = [
  {
    icon: LinkedinIcon,
    name: "linkedin",
    path: "https://www.linkedin.com/in/ali-barznji-36b664325/",
    username: "ali-barznji",
  },
  {
    icon: MailIcon,
    name: "Email",
    path: "mailto:biz@alibarznji.dev",
    username: "biz@alibarznji.dev",
  },
];
</script>

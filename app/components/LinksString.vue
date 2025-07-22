<script setup lang="ts">
import GithubIcon from "~/assets/icons/github-icon.vue";
import LinkedinIcon from "~/assets/icons/linkedin-icon.vue";
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
  <div
    class="absolute left-20 top-0 flex flex-col justify-center items-center h-78"
  >
    <!-- Line -->
    <div class="w-0.5 h-2/3 bg-secondary" />
    <NuxtLink
      v-for="link in socialLinks"
      :key="link.name"
      :to="link.path"
      class="flex items-center gap-1 py-2 max-h-1/3"
    >
      <component :is="link.icon" class="w-8 h-8" />
    </NuxtLink>
  </div>
</template>

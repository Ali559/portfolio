<script setup lang="ts">
import type { IProject } from "~/types";
import InzpiriImage from "~/assets/img/projects/inzpiri.png";
import SmartPricerImage from "~/assets/img/projects/smart-pricer.png";
import SeeYouImage from "~/assets/img/projects/seeyou.png";
import WizRXImage from "~/assets/img/projects/wizrx.jpg";
import WiZRXPreviewImage from "~/assets/img/projects/previews/wizrx.jpg";
import { contactText, introText, skills } from "~/data";

const projects: IProject[] = [
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
</script>
<template>
  <div class="@container">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Projects Section -->
    <ProjectsSection
      :data="projects"
      section-title="projects"
      view-all-link="/projects"
      :line="true"
    />

    <!-- Skills Section -->
    <SkillsSection
      :skills="skills"
      :group-icon="true"
      :line="true"
      :section-title="'skills'"
    />

    <!-- About me Section -->
    <AboutMeSection :data="introText" :line="true" :read-more="true" />

    <!-- Contact Section -->
    <ContactSection
      :contact-text="contactText"
      :line="true"
      section-title="contacts"
    />

  </div>
</template>

<style scoped></style>

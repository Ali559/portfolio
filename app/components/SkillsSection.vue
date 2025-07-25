<script setup lang="ts">
import type { ISkills } from "~/types";

const GroupIcon = defineAsyncComponent(
  () => import("~/assets/icons/Group-icon.vue"),
);

const SkillCard = defineAsyncComponent(
  () => import("~/components/SkillCard.vue"),
);
const skills: ISkills[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Go", "C#"],
  },
  {
    category: "Frameworks",
    skills: [
      "Vue",
      "Nuxt",
      "React",
      "Next",
      "Svelte",
      "Nestjs",
      "Fastify",
      "Express",
      "Chi",
      ".NET",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "NPM",
      "Docker",
      "Postman",
      "Swagger",
      "Figma",
      "Vercel",
      "AWS",
      "VSCode",
      "GraphQL",
    ],
  },
  {
    category: "Databases",
    skills: [
      "MongoDB",
      "Redis",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "DynamoDB",
      "MSSQL",
    ],
  },
  {
    category: "Other",
    skills: ["CSS", "HTML", "Tailwind", "Jest", "Vitest", "API Dev", "TDD"],
  },
];
</script>

<template>
  <section id="skills" class="relative">
    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <!-- Header Section -->
      <div class="flex items-center gap-4">
        <h2 class="text-3xl font-medium text-white">
          <span class="text-primary">#</span>skills
        </h2>
        <!-- Line -->
        <div class="h-[1px] w-lg bg-primary"></div>
      </div>

      <!-- Cards -->
      <div class="flex flex-col gap-16 mt-4 w-full lg:flex-row">
        <GroupIcon class="w-2/3 h-full mx-auto lg:w-full" />

        <div class="grid gap-4 grid-cols-1 sm:grid-cols-3">
          <SkillCard
            v-for="(skill, index) in skills"
            :key="index"
            v-bind="skill"
          />
        </div>
      </div>
    </div>
  </section>
</template>

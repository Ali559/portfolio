<script setup lang="ts">
import type { ISkills } from "~/types";

interface Props {
  skills: ISkills[];
  line: boolean;
  groupIcon: boolean;
  sectionTitle: string;
}

defineProps<Props>();

const GroupIcon = defineAsyncComponent(
  () => import("~/assets/icons/Group-icon.vue"),
);

const SkillCard = defineAsyncComponent(
  () => import("~/components/SkillCard.vue"),
);
</script>

<template>
  <section id="skills" class="relative">
    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <!-- Header Section -->
      <div v-if="sectionTitle || line" class="flex items-center gap-4">
        <h2 v-if="sectionTitle" class="text-3xl font-medium text-white">
          <span class="text-primary">#</span>{{ sectionTitle }}
        </h2>
        <!-- Line -->
        <div v-if="line" class="h-[1px] w-lg bg-primary"></div>
      </div>

      <!-- Cards -->
      <div class="flex flex-col gap-16 mt-12 w-full lg:flex-row">
        <GroupIcon v-if="groupIcon" class="w-2/3 h-full mx-auto lg:w-full" />

        <div class="flex flex-wrap justify-center gap-4">
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

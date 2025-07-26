<script setup lang="ts">
import { factsAboutMe, introTextAll, skills } from "~/data";
</script>

<template>
  <div class="@container">
    <div class="p-4">
      <div class="max-w-[1070px] mx-auto">
        <h1 class="text-3xl font-semibold text-white">
          <span class="text-primary">/</span>about-me
        </h1>
        <p class="text-white mt-4">Who am i?</p>
      </div>
    </div>

    <!-- About Me -->
    <AboutMeSection :data="introTextAll" :line="false" :read-more="false" />

    <!-- Skills -->
    <SkillsSection
      :skills="skills"
      :line="false"
      :group-icon="false"
      section-title="skills"
    />

    <!-- Fun Facts -->
    <FunFactsSection :facts="factsAboutMe" section-title="my-fun-facts" />
  </div>
</template>

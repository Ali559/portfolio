<script setup lang="ts">
import { projects, smallProjects } from "~/data";
</script>

<template>
  <div class="@container">
    <!-- Page Header -->
    <div class="p-4">
      <div class="max-w-[1070px] mx-auto">
        <h1 class="text-3xl font-semibold text-white">
          <span class="text-primary">/</span>projects
        </h1>
        <p class="text-white mt-4">List of my projects</p>
      </div>
    </div>

    <!-- Compelte Apps -->
    <ProjectsSection
      :data="projects"
      section-title="complete-apps"
      :line="false"
    />

    <!-- Small projects -->
    <ProjectsSection
      :data="smallProjects"
      section-title="small-projects"
      :line="false"
    />
  </div>
</template>

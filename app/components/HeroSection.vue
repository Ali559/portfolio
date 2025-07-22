<script setup lang="ts">
import DotsIcon from "~/assets/icons/dots-icon.vue";
import LogoOutlineIcon from "~/assets/icons/logo-outline-icon.vue";
</script>
<template>
  <section class="relative">
    <div class="p-4 max-w-[1200px] mx-auto">
      <div class="flex flex-col gap-8 items-center justify-center lg:flex-row">
        <!-- Hero Text -->
        <div class="text-left text-wrap">
          <h1 class="text-[32px] font-semibold text-left text-wrap">
            Ali is a <span class="text-primary">Fullstack Engineer</span> and a
            <span class="text-primary">Programming Enthusiast</span>
          </h1>
          <p class="mt-4 text-secondary">
            He enjoys creating things that live on the internet, whether that be
            websites, applications, or anything in between.
          </p>
        </div>

        <!-- Hero Image -->
        <div class="relative">
          <LogoOutlineIcon class="absolute left-0 top-10 h-30 w-30 -z-1" />
          <img src="~/assets/img/hero.png" alt="Hero Image" class="z-10" />
          <DotsIcon class="absolute right-2 bottom-10 w-14 h-14" />
          <div
            class="absolute right-0 bottom-0 w-full border-[1px] border-secondary p-4 flex items-center gap-4 justify-start bg-[var(--ui-background)]"
          >
            <div class="h-4 w-4 bg-primary"></div>
            <span class="text-secondary"
              >Currently working on <br />
              <span class="text-white font-semibold">Portfolio</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

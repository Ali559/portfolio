<script setup lang="ts">
const QuoteIcon = defineAsyncComponent(
  () => import("~/assets/icons/Quote-icon.vue"),
);
const HalfSquareIcon = defineAsyncComponent(
  () => import("~/assets/icons/Half-square-icon.vue"),
);
</script>
<template>
  <section id="home" class="relative">
    <HalfSquareIcon class="absolute bottom-0 -right-0 hidden lg:block" />

    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <!-- Hero Content -->
      <div class="w-full flex flex-col gap-8 md:flex-row md:items-center">
        <!-- Hero Text -->
        <div class="text-left text-wrap md:w-1/2">
          <h1 class="text-[32px] font-semibold text-left text-wrap text-white">
            Ali is a <span class="text-primary">Fullstack Engineer</span> and a
            <span class="text-primary">Programming Enthusiast</span>
          </h1>
          <p class="mt-8 text-secondary">
            He enjoys creating things that live on the internet, whether that be
            websites, applications, or anything in between.
          </p>

          <div class="mt-6">
            <MainButton text="Contact me!!" to="/contact" />
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative md:w-1/2">
          <img src="~/assets/img/hero.png" alt="hero image" />
          <div
            class="z-20 absolute w-full mx-auto right-1/2 translate-x-1/2 bottom-0 border-[1px] border-secondary p-2 flex items-center gap-4 justify-start bg-[var(--ui-background)]"
          >
            <div class="h-4 w-4 bg-primary"></div>
            <span class="text-secondary"
              >Currently working on <br />
              <span class="text-white font-semibold">Portfolio</span></span
            >
          </div>
        </div>
      </div>

      <!-- Quote -->
      <div class="flex flex-col mt-26 lg:w-2/3 mx-auto">
        <div class="border-1 border-secondary relative text-center text-wrap">
          <QuoteIcon class="absolute -top-4 left-4 h-7 w-8" />
          <p class="text-lg text-white font-medium p-4 md:text-2xl">
            Given enough eyeballs, all bugs are shallow.
          </p>
          <QuoteIcon class="absolute -bottom-3 right-4 h-7 w-8" />
        </div>
        <div
          class="border-1 border-secondary p-4 border-t-0 text-center text-wrap self-end"
        >
          <p class="text-lg text-white md:text-2xl">- Linus Trovalds</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
<template>
  <section class="@container p-4">
    <div class="w-full flex flex-col gap-8 lg:flex-row lg:items-center">
      <!-- Hero Text -->
      <div class="text-left text-wrap lg:w-1/2">
        <h1 class="text-[32px] font-semibold text-left text-wrap">
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
      <div class="relative lg:w-1/2">
        <img src="~/assets/img/hero.png" alt="hero image" />
        <div
          class="z-100 absolute w-full mx-auto right-1/2 translate-x-1/2 bottom-0 border-[1px] border-secondary p-2 flex items-center gap-4 justify-start bg-[var(--ui-background)]"
        >
          <div class="h-4 w-4 bg-primary"></div>
          <span class="text-secondary"
            >Currently working on <br />
            <span class="text-white font-semibold">Portfolio</span></span
          >
        </div>
      </div>
    </div>
  </section>
</template>

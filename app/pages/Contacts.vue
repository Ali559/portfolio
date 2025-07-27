<script setup lang="ts">
import { contactTextAll } from "~/data";
</script>

<template>
  <div class="@container">
    <!-- Page Header -->
    <div class="p-4">
      <div class="max-w-[1070px] mx-auto">
        <h1 class="text-3xl font-semibold text-white">
          <span class="text-primary">/</span>contacts
        </h1>
        <p class="text-white mt-4">How to reach me?</p>
      </div>
    </div>

    <!-- Contact Section -->
    <ContactSection :contact-text="contactTextAll" :line="false" />

    <!-- All Media -->
    <AllMediaSection />
  </div>
</template>

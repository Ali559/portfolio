<script setup lang="ts">
import type { IFacts } from "~/types";
import { highlightParts } from "~/utils";
const DotsIcon = defineAsyncComponent(
  () => import("~/assets/icons/dots-icon.vue"),
);
const HalfSquareIcon = defineAsyncComponent(
  () => import("~/assets/icons/Half-square-icon.vue"),
);
const FactsIcon = defineAsyncComponent(
  () => import("~/assets/icons/Facts-icon.vue"),
);
interface Props {
  sectionTitle?: string;
  facts: IFacts[];
}

defineProps<Props>();
</script>

<template>
  <section id="fun-facts" class="relative">
    <DotsIcon class="w-26 h-26 absolute -right-6 bottom-20 hidden xl:block" />
    <HalfSquareIcon
      class="w-39 h-39 absolute -left-20 top-1/2 translate-y-1/2 rotate-180 hidden xl:block"
    />
    <div class="max-w-[1070px] mx-auto px-4 py-20">
      <!-- Header -->

      <h2 v-if="sectionTitle" class="text-3xl font-medium text-white">
        <span class="text-primary">#</span>{{ sectionTitle }}
      </h2>

      <!-- Content -->
      <div
        class="w-full flex flex-col mt-12 gap-16 lg:flex-row lg:justify-between lg:items-center"
      >
        <FactsIcon class="w-full lg:hidden" />

        <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
          <!-- Facts -->
          <div
            v-for="(fact, index) in facts"
            :key="index"
            class="border-1 border-secondary p-2 text-center text-wrap"
          >
            <span
              v-for="(part, i) in highlightParts(
                fact.text,
                fact.highlightedParts,
              )"
              :key="i"
              class="text-base"
              :class="part.highlighted ? 'text-white' : 'text-secondary'"
            >
              {{ part.text }}
            </span>
          </div>
        </div>
        <FactsIcon class="w-full hidden lg:block" />
      </div>
    </div>
  </section>
</template>

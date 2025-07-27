<!-- components/SplashScreen.vue -->
<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-background text-white"
  >
    <p class="text-xl md:text-4xl xl:text-7xl">
      {{ displayedText }}<span class="cursor">|</span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const fullText = "Hey what's up, I'm Ali :)";
const displayedText = ref("");
const typingSpeed = 4000 / fullText.length; // total duration is 5s

onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < fullText.length) {
      displayedText.value += fullText[i++];
    } else {
      clearInterval(interval);
    }
  }, typingSpeed);
});
</script>

<style scoped>
.cursor {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>

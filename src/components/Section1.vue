<script lang="ts">
export default {
  name: 'SectionOne',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import { NButton } from 'naive-ui'

const start = ref(false)
</script>

<template>
  <Transition name="slide-up" mode="out-in">
    <div
      class="h-full w-90% rounded-2xl bg-#64a970 bg-cover bg-center-center bg-no-repeat"
      :style="{
        backgroundImage:
          'url(https://academy.allaboutbirds.org/features/bird-song-hero/images/intro-bg.png)',
      }"
      v-if="!start"
    >
      <div
        class="mt-10 h-60 w-full bg-contain bg-center-top bg-no-repeat"
        :style="{
          backgroundImage:
            'url(https://academy.allaboutbirds.org/features/bird-song-hero/images/hero-wordmark.png)',
        }"
      ></div>

      <div class="flex justify-center mt-10">
        <div class="w-145 p-5 bg-#E0D4D8 text-center">
          Get prepared for the sound matching game that helps you appreciate & visualize bird song.
          Watch the Bird Song Hero video tutorial.
        </div>
      </div>

      <div class="flex justify-center mt-6">
        <n-button color="#AC4D7D" class="py-10 px-20 text-2xl" @click="start = true"
          >Start</n-button
        >
      </div>
    </div>

    <div v-else class="flex items-center">
      <iframe
        width="840"
        height="472.5"
        src="https://www.youtube.com/embed/Jj1_mfUzjOs?si=ZxiteVKoDPKl6fuS"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </Transition>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

<script lang="ts">
export default {
  name: 'SectionOne',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import { NButton } from 'naive-ui'

import m4a from '@/assets/20240513.m4a'

import a from '@/assets/a.png'
import { useRouter } from 'vue-router'

const start = ref(false)

const audio = new Audio(m4a)
const play = () => {
  if (!audio.paused && !audio.ended && audio.readyState > 2) {
    return
  }
  audio.play()
}

const router = useRouter()
const next = () => {
  router.push('/section2')
}
</script>

<template>
  <Transition name="slide-up" mode="out-in">
    <div
      class="h-full w-90% rounded-2xl bg-blue bg-cover bg-center-center bg-no-repeat"
      :style="{
        backgroundImage: 'url()',
      }"
      v-if="!start"
    >
      <div class="w-full h-1/3 grid place-items-center">
        <div class="max-w-80%">
          <div class="p-5 bg-#E0D4D8 overflow-auto sm:text-base text-xs">
            Prepare to listen to examples, answer questions and complete the questionnaire according
            to the step-by-step instructions.
          </div>
        </div>
      </div>
      <div class="w-full h-1/3 grid place-items-center">
        <img :src="a" class="h-full" />
      </div>
      <div class="w-full h-1/3 grid place-items-center">
        <n-button color="#AC4D7D" class="py-10 px-20 text-2xl" @click="start = true"
          >Start</n-button
        >
      </div>
    </div>

    <div v-else class="h-full">
      <div class="h-full md:text-3xl sm:text-xl">
        <div class="h-1/2 pt-4">
          <div class="h-1/3">Step 1: Listen to the target bird’s calls and songs</div>
          <div class="h-1/3">
            Step 2: Listen to the corresponding calls and songs in the subsequent sound samples
          </div>
          <div class="h-1/3">Step 3: After selecting all options, answer the questionnaire</div>
        </div>

        <div class="h-1/4 grid place-items-center">
          <div class="flex gap-x-10">
            <n-button class="w-30" color="white"
              ><span class="text-black" @click="play">Call 1</span></n-button
            >
            <n-button class="w-30" color="white"
              ><span class="text-black" @click="play">Call 2</span></n-button
            >
          </div>

          <div class="flex gap-x-10">
            <n-button class="w-30" color="white"
              ><span class="text-black" @click="play">Song 1</span></n-button
            >
            <n-button class="w-30" color="white"
              ><span class="text-black" @click="play">Song 2</span></n-button
            >
          </div>
        </div>

        <div class="h-1/4 grid place-items-center">
          <n-button class="w-30" color="white"
            ><span class="text-black" @click="next">Next</span></n-button
          >
        </div>
      </div>
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

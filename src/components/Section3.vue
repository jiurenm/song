<script lang="ts">
export default {
  name: 'SectionThree',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import { NButton } from 'naive-ui'

import SectionThreeContent from './Section3Content.vue'

import a from '@/assets/a.png'

const start = ref(false)
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
          <div class="p-5 overflow-auto sm:text-4xl text-xs">
            Please help us fill the Questionnaire.
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

    <section-three-content v-else></section-three-content>
  </Transition>
</template>

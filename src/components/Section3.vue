<script lang="ts">
export default {
  name: 'SectionThree',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import { NButton } from 'naive-ui'

import SectionThreeContent from './Section3Content.vue'

const start = ref(false)
</script>

<template>
  <Transition name="slide-up" mode="out-in">
    <div
      class="h-full w-90% rounded-2xl bg-#D6AA80 bg-cover bg-center-center bg-no-repeat"
      v-if="!start"
    >
      <div
        class="mt-10 h-40 bg-contain bg-center-top bg-no-repeat"
        :style="{
          backgroundImage: 'url()',
        }"
      ></div>

      <div class="flex justify-center text-xl mt-3">
        Please help us fill the Questionnaire
      </div>

      <div class="flex justify-center mt-6">
        <n-button color="#AC4D7D" class="py-10 px-20 text-2xl" @click="start = true"
          >Start</n-button
        >
      </div>
    </div>

    <section-three-content v-else></section-three-content>
  </Transition>
</template>

<script lang="ts">
export default {
  name: 'SectionTwo',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import { NButton } from 'naive-ui'

import SectionTwoContent from './Section2Content.vue'

const start = ref(false)
</script>

<template>
  <Transition name="slide-up" mode="out-in">
    <div
      class="h-full w-90% rounded-2xl bg-blue bg-cover bg-center-center bg-no-repeat"
      v-if="!start"
    >
      <div class="h-1/3 lg:text-3xl md:text-2xl sm:text-md grid place-items-center text-base">
        CHALLENGE ROUND - try to figure out are target calls or songs exist from the sounds.
      </div>

      <div class="h-1/3 grid place-items-center">
        <div class="w-50 flex items-center">
          <div
            class="w-15 h-8 bg-#AC4D7D text-white rounded-xl mr-1 flex items-center justify-center"
          >
            Step 1
          </div>
          <span>- Play the sounds</span>
        </div>
        <div class="w-50 flex items-center">
          <div
            class="w-15 h-8 bg-#2C773B text-white rounded-xl mr-1 flex items-center justify-center"
          >
            Step 2
          </div>
          <span>- Make your choice</span>
        </div>
      </div>

      <div class="h-1/3 grid place-items-center">
        <n-button color="#AC4D7D" class="py-10 px-20 text-2xl" @click="start = true"
          >Start</n-button
        >
      </div>
    </div>

    <section-two-content v-else></section-two-content>
  </Transition>
</template>

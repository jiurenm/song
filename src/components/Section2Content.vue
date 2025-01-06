<script lang="ts">
export default {
  name: 'SectionTwoContent',
}
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { NButton, NRadioButton, NRadioGroup } from 'naive-ui'

const playVideo = (option: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const video: any = document.getElementById('myVideo' + option)

  video!.play()
}

const q = ref([
  {
    index: 1,
    url: 'https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4',
    picture:
      'https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg',
    option: '',
    options: [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' },
    ],
  },
  {
    index: 2,
    url: 'https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4',
    picture:
      'https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg',
    option: '',
    options: [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' },
    ],
  },
  {
    index: 3,
    url: 'https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4',
    picture:
      'https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg',
    option: '',
    options: [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' },
    ],
  },
  {
    index: 4,
    url: 'https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4',
    picture:
      'https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg',
    option: '',
    options: [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' },
    ],
  },
  {
    index: 5,
    url: 'https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4',
    picture:
      'https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg',
    option: '',
    options: [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' },
    ],
  },
  {
    index: 6,
    url: 'https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4',
    picture:
      'https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg',
    option: '',
    options: [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' },
    ],
  },
])

const activeIndex = ref(0)
const activeQuestion = computed(() => {
  return [q.value[activeIndex.value * 2], q.value[activeIndex.value * 2 + 1]]
})

const next = () => {
  if (activeQuestion.value[0].option === '' || activeQuestion.value[1].option === '') {
    alert('please select')

    return
  }
  activeIndex.value++
}
</script>

<template>
  <div class="w-1/3 h-full grid place-items-center">
    <div class="grid place-items-center w-80 h-60 rounded bg-#ABD7B3">
      <div class="grid place-items-center w-40 h-40 rounded-full bg-#78435E">
        <div class="text-4xl text-white"># {{ activeIndex + 1 }}</div>
      </div>
    </div>
  </div>
  <div class="w-2/3 h-full grid place-items-center">
    <div v-for="item in activeQuestion" :key="item.index" class="grid place-items-center h-full">
      <div class="flex items-center">
        <div
          class="relative left-6 h-50px aspect-square rounded-full bg-#42B156 flex items-center justify-center text-4xl text-white cursor-pointer hover:bg-#AC4D7D"
          @click="playVideo(item.index)"
        >
          {{ item.index }}
        </div>
        <video :id="'myVideo' + item.index" width="500px" height="130px" class="bg-black">
          <source :src="item.url" type="video/mp4" />
        </video>
        <img class="h-130px w-130px" :src="item.picture" />
      </div>
      <n-radio-group v-model:value="item.option" class="ml-50px">
        <n-radio-button
          v-for="op in item.options"
          class="w-250px text-center rounded!"
          :key="op.value"
          :value="op.value"
          >{{ op.label }}</n-radio-button
        >
      </n-radio-group>
    </div>

    <n-button color="black" v-if="activeIndex < q.length / 2 - 1" @click="next">Next</n-button>
    <n-button color="black" v-if="activeIndex == q.length / 2 - 1">Submit</n-button>
  </div>
</template>

<style>
.n-radio-group .n-radio-group__splitor {
  width: 0px;
  margin-left: 65px;
  margin-right: 65px;
}

.n-radio-group .n-radio-button.n-radio-button--checked {
  color: white !important;
  background-color: #42b156;
}
</style>

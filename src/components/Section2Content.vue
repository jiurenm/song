<script lang="ts">
export default {
  name: 'SectionTwoContent',
}
</script>

<script lang="ts" setup>
import { NGrid, NGi, NButton } from 'naive-ui'

import m4a from '@/assets/20240513.m4a'

const audio = new Audio(m4a)
const play = () => {
  if (!audio.paused && !audio.ended && audio.readyState > 2) {
    return
  }
  audio.play()
}
const playVideo = (option: 'A' | 'B' | 'C' | 'D') => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const video: any = document.getElementById('myVideo' + option)

  video!.play()
}
</script>

<template>
  <n-grid class="h-full" x-gap="12" :cols="6">
    <n-gi :span="2">
      <div class="w-full">
        <div class="flex items-center justify-center mt-10">
          <div class="flex items-center justify-center w-80 h-60 rounded bg-#ABD7B3">
            <div
              class="w-40 h-40 rounded-full bg-#78435E cursor-pointer flex items-center justify-center"
              @click="play"
            >
              <div class="text-4xl text-white"># 1</div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-6">
          <n-button class="w-80 py-6" color="#AC4D7D">Skip Question</n-button>
        </div>

        <div class="flex justify-center items-center mt-10">
          <div class="w-15 h-11 bg-#42B156 text-center p-1">HERO METER:</div>
          <div class="w-61 h-13 bg-#C3E3C9 flex items-center pl-2 gap-x-1">
            <div class="w-5 h-5 rounded-full bg-green"></div>
            <div class="w-5 h-5 rounded-full bg-green"></div>
            <div class="w-5 h-5 rounded-full bg-green"></div>
            <div class="w-5 h-5 rounded-full bg-green"></div>
            <div class="w-5 h-5 rounded-full bg-green"></div>
            <div class="w-5 h-5 rounded-full bg-red"></div>
            <div class="w-5 h-5 rounded-full bg-red"></div>
            <div class="w-5 h-5 rounded-full bg-red"></div>
            <div class="w-5 h-5 rounded-full bg-white"></div>
            <div class="w-5 h-5 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </n-gi>
    <n-gi :span="4" class="h-130">
      <div class="h-1/4 flex items-center">
        <div
          class="relative left-10 h-2/3 aspect-square rounded-full bg-#42B156 flex items-center justify-center text-4xl text-white cursor-pointer hover:bg-#AC4D7D"
          @click="playVideo('A')"
        >
          A
        </div>
        <video id="myVideoA" width="60%" height="90%" class="bg-black">
          <source
            src="https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4"
            type="video/mp4"
          />
        </video>
        <img
          class="h-90%"
          src="https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg"
        />
      </div>
      <div class="h-1/4 flex items-center">
        <div
          class="relative left-10 h-2/3 aspect-square rounded-full bg-#42B156 flex items-center justify-center text-4xl text-white cursor-pointer hover:bg-#AC4D7D"
          @click="playVideo('B')"
        >
          B
        </div>
        <video id="myVideoB" width="60%" height="90%" class="bg-black">
          <source
            src="https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4"
            type="video/mp4"
          />
        </video>
        <img
          class="h-90%"
          src="https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg"
        />
      </div>
      <div class="h-1/4 flex items-center">
        <div
          class="relative left-10 h-2/3 aspect-square rounded-full bg-#42B156 flex items-center justify-center text-4xl text-white cursor-pointer hover:bg-#AC4D7D"
          @click="playVideo('C')"
        >
          C
        </div>
        <video id="myVideoC" width="60%" height="90%" class="bg-black">
          <source
            src="https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4"
            type="video/mp4"
          />
        </video>
        <img
          class="h-90%"
          src="https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg"
        />
      </div>
      <div class="h-1/4 flex items-center">
        <div
          class="relative left-10 h-2/3 aspect-square rounded-full bg-#42B156 flex items-center justify-center text-4xl text-white cursor-pointer hover:bg-#AC4D7D"
          @click="playVideo('D')"
        >
          D
        </div>
        <video id="myVideoD" width="60%" height="90%" class="bg-black">
          <source
            src="https://academy.allaboutbirds.org/features/bird-song-hero/video/intro/HumanWoldWhistle_spectrogram.mp4"
            type="video/mp4"
          />
        </video>
        <img
          class="h-90%"
          src="https://academy.allaboutbirds.org/features/bird-song-hero/images/intro/nateWhistle.jpg"
        />
      </div>
    </n-gi>
  </n-grid>
</template>

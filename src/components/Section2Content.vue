<script lang="ts">
export default {
  name: 'SectionTwoContent',
}
</script>

<script lang="ts" setup>
import { NGrid, NGi, NButton } from 'naive-ui'

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
            <div class="w-40 h-40 rounded-full bg-#78435E flex items-center justify-center">
              <div class="text-4xl text-white"># 1</div>
            </div>
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
      <div class="h-1/4 flex items-center justify-center gap-x-50">
        <n-button class="w-50" color="white"><span class="text-black">Yes</span></n-button>
        <n-button class="w-50" color="white"><span class="text-black">No</span></n-button>
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
      <div class="h-1/4 flex items-center justify-center gap-x-50">
        <n-button class="w-50" color="white"><span class="text-black">Yes</span></n-button>
        <n-button class="w-50" color="white"><span class="text-black">No</span></n-button>
      </div>
      <n-button class="absolute right-60 top-150" color="black">Next</n-button>
    </n-gi>
  </n-grid>
</template>

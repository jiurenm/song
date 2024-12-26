<script lang="ts">
export default {
  name: 'SLayout',
}
</script>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { RouterView, useRouter } from 'vue-router'

import { NLayout, NLayoutHeader, NPopover } from 'naive-ui'

const router = useRouter()
const activateSection = ref<'1' | '2' | '3'>('1')
const changeSection = (section: '1' | '2' | '3') => {
  activateSection.value = section
  router.push('/section' + section)
}

onMounted(() => {
  if (window.location.href.endsWith('3')) {
    activateSection.value = '3'
  } else if (window.location.href.endsWith('2')) {
    activateSection.value = '2'
  } else {
    activateSection.value = '1'
  }
})
</script>

<template>
  <div class="h-100vh" style="position: relative">
    <n-layout position="absolute">
      <n-layout-header
        class="relative bg-#282D2C text-white flex items-center"
        style="height: 64px"
      >
        <div class="px-24px pb-8px flex items-center justify-center ml-80px">
          <img
            class="w-10"
            src="data:image/png;base64,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"
          />
        </div>
        <div class="px-24px pb-8px flex items-center justify-center text-xl">
          Fukushima birds sound
        </div>
        <div class="px-24px pb-8px flex gap-x-8px items-center justify-center ml-auto mr-80px">
          <div>sections:</div>
          <n-popover trigger="hover">
            <template #trigger>
              <div
                class="h-30px w-30px bg-#3E4443 flex items-center justify-center cursor-pointer border-b-solid border-b-2px hover:bg-#8ECA9A hover:border-b-4px"
                :class="
                  activateSection === '1'
                    ? ' border-#8ECA9A hover:border-#8ECA9A'
                    : 'border-#3E4443 hover:border-yellow'
                "
                @click="changeSection('1')"
              >
                1
              </div>
            </template>
            <div class="w-30 h-30">这是 section 1</div>
          </n-popover>
          <n-popover trigger="hover">
            <template #trigger>
              <div
                class="h-30px w-30px bg-#3E4443 flex items-center justify-center cursor-pointer border-b-solid border-b-2px hover:bg-#8ECA9A hover:border-b-4px"
                :class="
                  activateSection === '2'
                    ? ' border-#8ECA9A hover:border-#8ECA9A'
                    : 'border-#3E4443 hover:border-yellow'
                "
                @click="changeSection('2')"
              >
                2
              </div>
            </template>
            <div class="w-30 h-30">这是 section 2</div>
          </n-popover>
          <n-popover trigger="hover">
            <template #trigger>
              <div
                class="h-30px w-30px bg-#3E4443 flex items-center justify-center cursor-pointer border-b-solid border-b-2px hover:bg-#8ECA9A hover:border-b-4px"
                :class="
                  activateSection === '3'
                    ? ' border-#8ECA9A hover:border-#8ECA9A'
                    : 'border-#3E4443 hover:border-yellow'
                "
                @click="changeSection('3')"
              >
                3
              </div>
            </template>
            <div class="w-30 h-30">这是 section 3</div>
          </n-popover>
        </div>
        <div class="absolute bottom-0 w-full h-8px bg-sky-800"></div>
      </n-layout-header>
      <n-layout position="absolute" style="top: 64px">
        <n-layout content-style="padding: 48px;" class="h-full bg-blue-300">
          <div class="h-90% bg-sky rounded-xl flex justify-center">
            <RouterView />
          </div>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

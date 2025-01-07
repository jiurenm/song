<script lang="ts">
export default {
  name: 'SLayout',
}
</script>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

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

watch(router.currentRoute, () => {
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
        <div
          class="md:px-24px md:pb-8px md:pl-20 md:flex md:items-center md:justify-center md:text-xl hidden"
        >
          Fukushima birds sound
        </div>
        <div class="px-24px pb-8px flex gap-x-8px items-center justify-center ml-auto mr-80px">
          <div>sections:</div>
          <n-popover trigger="manual" :show="false">
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
          <n-popover trigger="manual" :show="false">
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
          <n-popover trigger="manual" :show="false">
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
      <n-layout position="absolute" style="top: 64px" class="h-screen">
        <n-layout content-style="padding: 48px;" class="h-full bg-blue-300">
          <div class="h-90% bg-sky rounded-xl flex justify-center">
            <RouterView />
          </div>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

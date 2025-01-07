<script lang="ts" setup>
import { NForm, NFormItem, NButton, NInput, NRadio, NRadioGroup, NSpace } from 'naive-ui'
import { ref } from 'vue'

const formValue = ref({
  user: {
    name: '',
    age: '',
  },
  phone: '',
})

const rules = {
  user: {
    name: {
      required: true,
      message: '',
      trigger: 'blur',
    },
    age: {
      required: true,
      message: 'please input age',
      trigger: ['input', 'blur'],
    },
  },
  phone: {
    required: true,
    message: 'please input phone',
    trigger: ['input'],
  },
}

const value = ref(null)
const songs = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: 'No',
    label: 'No',
  }
].map((s) => {
  s.value = s.value.toLowerCase()
  return s
})
</script>

<template>
  <div class="w-1/2 py-10">
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
      size="large"
      class="grid place-items-center"
    >
      <n-form-item
        label="Do you think the sounds you heard is clear?"
        path="user.name"
        class="w-100%"
      >
        <n-radio-group v-model:value="value" name="radiogroup">
          <n-space>
            <n-radio v-for="song in songs" :key="song.value" :value="song.value">
              {{ song.label }}
            </n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
      <n-form-item
        label="Which season do you think it is from the sound?"
        path="phone"
        class="w-100%"
      >
        <n-input v-model:value="formValue.phone" placeholder="please fill" />
      </n-form-item>
      <n-form-item class="float-right">
        <n-button attr-type="button" color="#AC4D7D"> submit </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

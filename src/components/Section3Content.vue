<script lang="ts" setup>
import { NForm, NFormItem, NButton, NInput } from 'naive-ui'
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
      message: 'please input name',
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
</script>

<template>
  <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="large">
    <n-form-item label="Name" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="input name" />
    </n-form-item>
    <n-form-item label="Age" path="user.age">
      <n-input v-model:value="formValue.user.age" placeholder="input age" />
    </n-form-item>
    <n-form-item label="Phone" path="phone">
      <n-input v-model:value="formValue.phone" placeholder="phone" />
    </n-form-item>
    <n-form-item class="float-right">
      <n-button attr-type="button" color="#AC4D7D"> submit </n-button>
    </n-form-item>
  </n-form>
</template>

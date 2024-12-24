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
      message: '请输入姓名',
      trigger: 'blur',
    },
    age: {
      required: true,
      message: '请输入年龄',
      trigger: ['input', 'blur'],
    },
  },
  phone: {
    required: true,
    message: '请输入电话号码',
    trigger: ['input'],
  },
}
</script>

<template>
  <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="large">
    <n-form-item label="姓名" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
    </n-form-item>
    <n-form-item label="年龄" path="user.age">
      <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
    </n-form-item>
    <n-form-item label="电话号码" path="phone">
      <n-input v-model:value="formValue.phone" placeholder="电话号码" />
    </n-form-item>
    <n-form-item class="float-right">
      <n-button attr-type="button" color="#AC4D7D"> submit </n-button>
    </n-form-item>
  </n-form>
</template>

<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-input
      label="National Insurance number"
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      :rules="rules"
      v-model="model"
    >
      <template #label="{ label }">
        <h1>{{ label }}</h1>
      </template>

      <template #hint="{ hint }">
        <a>{{ hint }}</a>
      </template>

      <template #error="{ error }">
        <h2>{{ error }}</h2>
      </template>
    </nhs-input>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33"> Form valid: {{ valid }} </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [(v: string) => !!v || 'Error message goes here'],
      model: '',
      valid: false
    })

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form')
      }
    }

    function onReset(): void {
      state.model = ''
    }

    return { ...toRefs(state), onSubmit, onReset }
  }
})
</script>

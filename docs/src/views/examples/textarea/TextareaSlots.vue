<template>
  <nhs-form @submit="onSubmit()" @reset="onReset()" v-model="valid">
    <nhs-textarea
      label="Why can't you provide a National Insurance number?"
      hint="Hint text"
      :rules="rules"
      v-model="model"
    >
      <template #label="{ label }">
        <h1>{{ label }}</h1>
      </template>

      <template #hint="{ hint }">
        <h2>{{ hint }}</h2>
      </template>

      <template #error="{ error }">
        <h3>{{ error }}</h3>
      </template>
    </nhs-textarea>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Submit</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      rules: [(v: string) => !!v || 'You must provide an explanation'],
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('success submission');
      }
    }

    function onReset(): void {
      state.model = '';
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
</script>

<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-select
      label="Label text goes here"
      hint="Hint text goes here"
      v-model="model"
      :rules="rules"
    >
      <option>NHS.UK frontend option 1</option>
      <option>NHS.UK frontend option 2</option>
      <option>NHS.UK frontend option 3</option>

      <template #label="{ label }">
        <h1>{{ label }}</h1>
      </template>

      <template #hint="{ hint }">
        <a>{{ hint }}</a>
      </template>

      <template #error="{ error }">
        <h2>{{ error }}</h2>
      </template>
    </nhs-select>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Submit</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33"> Form valid: {{ valid }} </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 1',
      rules: [(v: string) => v !== 'NHS.UK frontend option 1' || 'Error message goes here'],
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

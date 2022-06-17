<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-radios
      :items="items"
      v-model="model"
      label="Have you changed your name?"
      hint="This includes changing your last name or spelling your name differently."
      :rules="rules"
      ref="radios"
    >
      <template #item-label="{ item }">
        <h3>{{ item }}</h3>
      </template>

      <template #item-hint="{ item }">
        <a>{{ item }}</a>
      </template>

      <template #hint="{ hint }">
        <h2>{{ hint }}</h2>
      </template>

      <template #error="{ error }">
        <h2>{{ error }}</h2>
      </template>
    </nhs-radios>
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
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      items: [
        {
          label: 'Yes',
          value: 'yes',
          hint: 'hint text'
        },
        {
          label: 'No',
          value: 'no'
        },
        {
          divider: 'or'
        },
        {
          label: 'Maybe',
          value: 'maybe'
        }
      ],
      rules: [(v: string) => !!v || 'Please select an option'],
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form');
      }
    }

    function onReset(): void {
      state.model = '';
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
</script>

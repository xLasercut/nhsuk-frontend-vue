<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-checkboxes
      :items="items"
      v-model="model"
      label="What is your nationality?"
      hint="If you have more than 1 nationality, select all options that are relevant to you."
      ref="checkbox"
      :rules="rules"
    >
      <template #hint="{ hint }">
        <a>{{ hint }}</a>
      </template>

      <template #item-label="{ item }">
        <h3>{{ item }}</h3>
      </template>
    </nhs-checkboxes>
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
      items: [
        {
          label: 'British',
          value: 'british'
        },
        {
          label: 'Irish',
          value: 'irish'
        },
        {
          label: 'citizen of another country',
          value: 'other'
        }
      ],
      model: [],
      rules: [(v: Array<string>) => v.length > 0 || 'Please select an option'],
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form');
      }
    }

    function onReset(): void {
      state.model = [];
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
</script>

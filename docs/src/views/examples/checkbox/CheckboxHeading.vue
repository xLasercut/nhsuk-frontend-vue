<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    page-heading
    label="Which types of waste do you transport regularly?"
    hint="Select all that apply."
    heading-size="m"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: [],
      items: [
        {
          label: 'Waste from animal carcasses',
          value: 'animal'
        },
        {
          label: 'Waste from mines or quarries',
          value: 'mines'
        },
        {
          label: 'Farm or agricultural waste',
          value: 'farm'
        }
      ]
    });

    return { ...toRefs(state) };
  }
});
</script>

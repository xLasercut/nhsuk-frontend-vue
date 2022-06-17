<template>
  <nhs-radios
    :items="items"
    v-model="model"
    disabled
    label="Have you changed your name?"
    heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
  ></nhs-radios>
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
          value: 'yes'
        },
        {
          label: 'No',
          value: 'no'
        }
      ]
    });
    return { ...toRefs(state) };
  }
});
</script>

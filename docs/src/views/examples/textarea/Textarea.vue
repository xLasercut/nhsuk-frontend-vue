<template>
  <nhs-textarea
    label="Can you provide more detail?"
    hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
    v-model="model"
  ></nhs-textarea>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    });

    return { ...toRefs(state) };
  }
});
</script>

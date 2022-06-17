<template>
  <nhs-input label="Postcode" autocomplete="postal-code" v-model="model"></nhs-input>
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

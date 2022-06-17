<template>
  <nhs-header :service="service"></nhs-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      service: {
        name: 'Prototype kit'
      }
    });

    return { ...toRefs(state) };
  }
});
</script>

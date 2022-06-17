<template>
  <nhs-header :service="service" transactional></nhs-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      service: {
        name: 'Register with a GP',
        href: '/'
      }
    });

    return { ...toRefs(state) };
  }
});
</script>

<template>
  <nhs-header :service="service" show-nav show-search>
    <nhs-header-item href="#">NHS service standard</nhs-header-item>
    <nhs-header-item href="#">Design system</nhs-header-item>
    <nhs-header-item href="#">Content style guide</nhs-header-item>
    <nhs-header-item href="#">Accessibility</nhs-header-item>
    <nhs-header-item href="#">Community and contribution</nhs-header-item>
  </nhs-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      service: {
        name: 'Digital service manual'
      }
    });

    return { ...toRefs(state) };
  }
});
</script>

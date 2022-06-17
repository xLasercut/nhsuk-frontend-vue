<template>
  <dt class="nhsuk-summary-list__key" v-bind="$attrs">
    <slot></slot>
  </dt>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: [],
  inheritAttrs: false
});
</script>

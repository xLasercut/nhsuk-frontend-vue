<template>
  <label :class="classes" v-bind="$attrs">
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsLabelSize } from '../types';

defineOptions({
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  size: {
    type: String as PropType<NhsLabelSize>
  }
});
const classes = computed(() => {
  let classes = ['nhsuk-label'];

  if (props.size) {
    classes.push(`nhsuk-label--${props.size}`);
  }

  return classes.join(' ');
});
</script>

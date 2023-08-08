<template>
  <h1 class="nhsuk-label-wrapper">
    <nhs-label-normal :size="size" v-bind="$attrs">
      <slot></slot>
    </nhs-label-normal>
  </h1>
</template>

<script setup lang="ts">
import NhsLabelNormal from './NhsLabelNormal.vue';
import { PropType } from 'vue';
import { NhsLabelSize } from '../types';

defineOptions({
  inheritAttrs: false
});
defineEmits([]);
defineProps({
  size: {
    type: String as PropType<NhsLabelSize>
  }
});
</script>

<template>
  <component :is="element" class="nhsuk-hint" v-bind="$attrs" :id="id">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { NhsHintTextElement } from './types';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-hint-text'
});
defineEmits([]);
defineProps({
  id: {
    type: String
  },
  element: {
    type: String as PropType<NhsHintTextElement>,
    default: (): NhsHintTextElement => {
      return 'span';
    }
  }
});
</script>

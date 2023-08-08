<template>
  <button :aria-disabled="disabled" @click="$emit('click')" v-bind="attributes">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { addAttributes } from '../../shared/helpers/attribute-helper';
import { useAttrs } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: () => {
      return false;
    }
  },
  href: {
    type: String
  }
});
defineEmits(['click']);
defineOptions({
  inheritAttrs: false
});
const attrs = useAttrs();
const attributes = addAttributes(['disabled'], props, attrs);
</script>

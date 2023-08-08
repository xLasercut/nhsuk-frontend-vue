<template>
  <a :href="href" @click="$emit('click')" v-bind="attributes">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import { addAttributes } from '../../helpers/attribute-helper';

defineOptions({
  inheritAttrs: false
});
defineEmits(['click']);
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  }
});
const attrs = useAttrs();
const attributes = addAttributes(['disabled'], props, attrs);
</script>

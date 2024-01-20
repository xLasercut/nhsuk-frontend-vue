<template>
  <router-link :to="href" @click="$emit('click')" v-bind="attributes">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
import { addAttributes } from '../../helpers/attribute-helper';
import { useAttrs } from 'vue';

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

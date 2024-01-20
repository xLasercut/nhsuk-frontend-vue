<template>
  <component :is="getIcon()" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { ICON_MAP } from './icons/icons';
import { PropType } from 'vue';
import { NhsIconType } from './types';

defineEmits([]);
const props = defineProps({
  icon: {
    type: String as PropType<NhsIconType>,
    required: true
  }
});
defineOptions({
  inheritAttrs: false
});

function getIcon() {
  return ICON_MAP[props.icon];
}
</script>

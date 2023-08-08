<template>
  <figure class="nhsuk-image" v-bind="$attrs">
    <img class="nhsuk-image__img" :src="src" :alt="alt" :sizes="sizes" :srcset="srcset" />
    <figcaption class="nhsuk-image__caption" v-if="isCaption">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-image'
});
defineEmits([]);
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  sizes: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  srcset: {
    type: String,
    default: (): string => {
      return '';
    }
  }
});
const slots = useSlots();
const isCaption = computed((): boolean => {
  return Boolean(slots.default);
});
</script>

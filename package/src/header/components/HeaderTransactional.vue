<template>
  <div :class="classes" v-if="isService" v-bind="$attrs">
    <nhs-link-switcher class="nhsuk-header__transactional-service-name--link" :href="href">
      {{ service.name }}
    </nhs-link-switcher>
  </div>
</template>

<script setup lang="ts">
import { NhsLinkSwitcher } from '../../shared/link-switcher';
import { computed, PropType } from 'vue';
import { NhsHeaderService } from '../interfaces';

defineOptions({
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  service: {
    type: Object as PropType<NhsHeaderService>,
    required: true
  }
});
const classes = computed(() => {
  const classes = ['nhsuk-header__transactional-service-name'];

  if (props.service.name && props.service.name.length > 22) {
    classes.push('nhsuk-header__transactional-service-name--long');
  }

  return classes.join(' ');
});

const href = computed(() => {
  if (props.service.href) {
    return props.service.href;
  }
  return '/';
});

const isService = computed((): boolean => {
  return Object.keys(props.service).length > 0;
});
</script>

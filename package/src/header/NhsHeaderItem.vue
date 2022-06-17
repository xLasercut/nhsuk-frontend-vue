<template>
  <li class="nhsuk-header__navigation-item">
    <nhs-link-switcher
      @click="$emit('click')"
      class="nhsuk-header__navigation-link"
      :href="href"
      v-bind="$attrs"
    >
      <slot></slot>
      <nhs-icon icon="chevron-right"></nhs-icon>
    </nhs-link-switcher>
  </li>
</template>

<script lang="ts">
import { NhsLinkSwitcher } from '../shared/link-switcher';
import NhsIcon from '../icon/NhsIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-header-item',
  emits: ['click'],
  components: { NhsLinkSwitcher, NhsIcon },
  props: {
    href: {
      type: String,
      required: true
    }
  }
});
</script>

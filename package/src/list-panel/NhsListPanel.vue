<template>
  <nhs-card feature v-bind="$attrs" :heading-level="headingLevel" :heading="label" :id="id">
    <template #description>
      <ul :class="classes" v-if="!disabled">
        <slot></slot>
      </ul>
      <div :class="classes" v-if="disabled">
        {{ message }}
      </div>
    </template>
  </nhs-card>
</template>

<script lang="ts">
import { NhsHeadingSwitcher } from '../shared/heading-switcher';
import { NhsLinkSwitcher } from '../shared/link-switcher';
import NhsIcon from '../icon/NhsIcon.vue';
import { computed, defineComponent, PropType } from 'vue';
import { NhsHeadingType } from '../shared/heading-switcher/types';

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-list-panel',
  emits: [],
  components: { NhsHeadingSwitcher, NhsLinkSwitcher, NhsIcon },
  props: {
    label: {
      type: String
    },
    id: {
      type: String
    },
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      default: (): NhsHeadingType => {
        return 2;
      }
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false;
      }
    },
    message: {
      type: String
    }
  },
  setup() {
    const classes = computed((): string => {
      const classes = ['nhsuk-list nhsuk-list--border'];
      return classes.join(' ');
    });

    return { classes };
  }
});
</script>

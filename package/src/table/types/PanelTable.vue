<template>
  <div class="nhsuk-table__panel-with-heading-tab" v-bind="$attrs">
    <nhs-heading-switcher :heading-level="headingLevel" class="nhsuk-table__heading-tab">
      {{ heading }}
    </nhs-heading-switcher>
    <table role="table" :class="classes">
      <slot></slot>
    </table>
  </div>
</template>

<script lang="ts">
import { NhsHeadingSwitcher } from '../../shared/heading-switcher';
import { computed, defineComponent, PropType } from 'vue';
import { NhsHeadingType } from '../../shared/heading-switcher/types';

export default defineComponent({
  inheritAttrs: false,
  emit: [],
  props: {
    heading: {
      type: String
    },
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      default: (): NhsHeadingType => {
        return 3;
      }
    },
    responsive: {
      type: Boolean,
      default: (): boolean => {
        return true;
      }
    }
  },
  components: { NhsHeadingSwitcher },
  setup(props) {
    const classes = computed((): string => {
      if (props.responsive) {
        return 'nhsuk-table-responsive';
      }
      return 'nhsuk-table';
    });

    return { classes };
  }
});
</script>

<template>
  <nhs-heading-switcher :heading-level="headingLevel" :class="`nhsuk-heading-${size}`" v-bind="$attrs">
    <slot></slot>
  </nhs-heading-switcher>
</template>

<script lang="ts">
import {NhsHeadingSwitcher} from '../shared/heading-switcher'
import {computed, defineComponent, PropType} from 'vue'
import {NhsHeadingSize} from './types'
import {NhsHeadingType} from '../shared/heading-switcher/types'

const NHS_HEADING_SIZES: {[key: string]: NhsHeadingType} = {
  xl: 1,
  l: 2,
  m: 3,
  s: 4,
  xs: 5
}

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-heading',
  emits: [],
  components: { NhsHeadingSwitcher },
  props: {
    size: {
      type: String as PropType<NhsHeadingSize>,
      default: (): NhsHeadingSize => {
        return 'l'
      },
      validators: (val: NhsHeadingSize): boolean => {
        return val in NHS_HEADING_SIZES
      }
    }
  },
  setup(props) {
    const headingLevel = computed((): NhsHeadingType => {
      return NHS_HEADING_SIZES[props.size]
    })

    return {headingLevel}
  }
})
</script>

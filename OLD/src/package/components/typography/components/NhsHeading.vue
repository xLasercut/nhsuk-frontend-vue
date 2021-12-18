<template>
  <heading-switcher :heading-level="headingLevel" :class="`nhsuk-heading-${size}`" v-bind="$attrs">
    <slot></slot>
  </heading-switcher>
</template>

<script>
import HeadingSwitcher from '../../../shared/HeadingSwitcher.vue'
import {computed, defineComponent} from 'vue'

const SIZES = {
  xl: 1,
  l: 2,
  m: 3,
  s: 4,
  xs: 5
}

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsHeading',
  components: { HeadingSwitcher },
  props: {
    size: {
      type: String,
      default: 'l',
      validators(val) {
        return (val in SIZES)
      }
    }
  },
  setup(props) {
    const headingLevel = computed(() => {
      return SIZES[props.size]
    })

    return {headingLevel}
  }
})
</script>

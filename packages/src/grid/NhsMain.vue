<template>
  <div :class="classes" v-bind="$attrs">
    <main class="nhsuk-main-wrapper" id="maincontent">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {NhsMainType} from './types'

const NHS_MAIN_TYPES = {
  fluid: 'nhsuk-width-container-fluid',
  normal: 'nhsuk-width-container'
}

export default defineComponent({
  name: 'nhs-main',
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<NhsMainType>,
      default: (): NhsMainType => {
        return 'normal'
      },
      validator: (val: NhsMainType): boolean => {
        return val in NHS_MAIN_TYPES
      }
    }
  },
  setup(props) {
    const classes = computed((): string => {
      return NHS_MAIN_TYPES[props.type]
    })
    return {classes}
  }
})
</script>

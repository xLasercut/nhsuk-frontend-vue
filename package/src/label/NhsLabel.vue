<template>
  <component :is="labelType" :size="size" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import NhsLabelHeading from './types/NhsLabelHeading.vue'
import NhsLabelNormal from './types/NhsLabelNormal.vue'
import { computed, defineComponent, PropType } from 'vue'
import { NhsLabelSize } from './types'

const NHS_LABEL_SIZES: Array<NhsLabelSize> = ['xl', 's']

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-label',
  emits: [],
  props: {
    pageHeading: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    size: {
      type: String as PropType<NhsLabelSize>,
      validator: (val: NhsLabelSize): boolean => {
        if (val) {
          return NHS_LABEL_SIZES.includes(val)
        }
        return true
      }
    }
  },
  setup(props) {
    const labelType = computed(() => {
      if (props.pageHeading) {
        return NhsLabelHeading
      }
      return NhsLabelNormal
    })

    return { labelType }
  }
})
</script>

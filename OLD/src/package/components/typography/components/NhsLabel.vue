<template>
  <component :is="labelType" :size="size" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
import LabelHeading from '../label-types/LabelHeading.vue'
import LabelNormal from '../label-types/LabelNormal.vue'
import {defineComponent} from 'vue'

const SIZES = [ 'xl', 's' ]

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsLabel',
  props: {
    pageHeading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(val) {
        if (val) {
          return SIZES.includes(val)
        }
        return true
      }
    }
  },
  setup(props) {
    const labelType = computed(() => {
      if (props.pageHeading) {
        return LabelHeading
      }
      return LabelNormal
    })

    return {labelType}
  }
})
</script>

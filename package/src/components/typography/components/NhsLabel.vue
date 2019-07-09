<template>
  <component :is="labelType" :size="size" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
  import LabelHeading from '../label-types/LabelHeading.vue'
  import LabelNormal from '../label-types/LabelNormal.vue'

  const sizes = [ 'xl', 's' ]

  export default {
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
            return sizes.includes(val)
          }
          return true
        }
      }
    },
    computed: {
      labelType() {
        if (this.pageHeading) {
          return LabelHeading
        }
        return LabelNormal
      }
    }
  }
</script>
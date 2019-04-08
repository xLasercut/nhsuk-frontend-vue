<template>
  <component :is="labelType" :attributes="attributes">
    <slot></slot>
  </component>
</template>

<script>
  import LabelHeading from './label/LabelHeading.vue'
  import LabelNormal from './label/LabelNormal.vue'

  export default {
    name: "NhsLabel",
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      pageHeading: {
        type: Boolean,
        default: false
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
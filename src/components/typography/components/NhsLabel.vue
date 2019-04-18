<template>
  <component :is="labelType" :attributes="attrs()">
    <slot></slot>
  </component>
</template>

<script>
  import LabelHeading from '../label-types/LabelHeading.vue'
  import LabelNormal from '../label-types/LabelNormal.vue'
  import ClassSetter from '../../../mixins/class-setter.js'

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
    mixins: [ClassSetter],
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
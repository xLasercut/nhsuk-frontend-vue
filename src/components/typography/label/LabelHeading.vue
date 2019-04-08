<template>
  <h1 class="nhsuk-label-wrapper">
    <label-normal class="nhsuk-label--xl" :attributes="attributes">
      <slot></slot>
    </label-normal>
  </h1>
</template>

<script>
  import LabelNormal from './LabelNormal.vue'

  export default {
    components: {
      LabelNormal
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
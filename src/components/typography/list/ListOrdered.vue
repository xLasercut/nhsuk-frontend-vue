<template>
  <ol v-bind="attributes">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
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
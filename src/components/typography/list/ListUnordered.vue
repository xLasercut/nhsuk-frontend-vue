<template>
  <ul v-bind="attributes">
    <slot></slot>
  </ul>
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
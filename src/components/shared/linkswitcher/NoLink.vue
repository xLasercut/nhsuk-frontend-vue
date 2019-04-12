<template>
  <span v-bind="attributes">
    <slot></slot>
  </span>
</template>


<script>
  export default {
    props: {
      attributes: {
        type: Object,
        required: true
      },
      href: {
        type: String
      }
    }
  }
</script>

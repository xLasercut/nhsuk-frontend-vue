<template>
  <label class="nhsuk-label" v-bind="attributes">
    <slot></slot>
  </label>
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
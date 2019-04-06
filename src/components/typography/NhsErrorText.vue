<template>
  <span :class="`nhsuk-error-message${extraClasses}`" v-bind="attributes">
    <slot></slot>
  </span>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsErrorText",
    mixins: [SharedProps]
  }
</script>

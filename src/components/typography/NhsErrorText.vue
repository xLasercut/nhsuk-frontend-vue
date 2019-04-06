<template>
  <span :class="`nhsuk-error-message${extraClasses}`" v-bind="attributes">
    <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span> 
    <slot></slot>
  </span>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsErrorText",
    mixins: [SharedProps],
    props: {
      hiddenText: {
        type: String,
        default: "Error: "
      }
    }
  }
</script>

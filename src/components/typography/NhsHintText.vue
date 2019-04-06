<template>
  <span :class="`nhsuk-hint${extraClasses}`" v-bind="attributes" :id="id">
    <slot></slot>
  </span>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsHintText",
    props: {
      id: {
        type: String,
        default: ""
      }
    },
    mixins: [SharedProps]
  }
</script>
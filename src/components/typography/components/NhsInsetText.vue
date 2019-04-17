<template>
  <div class="nhsuk-inset-text" v-bind="attributes">
    <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NhsInsetText",
    props: {
      hiddenText: {
        type: String,
        default: "Information: "
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
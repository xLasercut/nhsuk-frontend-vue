<template>
  <span class="nhsuk-hint" v-bind="attributes" :id="id">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: "NhsHintText",
    props: {
      id: {
        type: String,
        default: ""
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
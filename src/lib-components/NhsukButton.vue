<template>
  <button :class="buttonClass()" type="submit" @click="$emit('click')" :diabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'NhsukButton',
    props: ["type", "disabled"],
    methods: {
      buttonClass() {
        if (this.type === "secondary") {
          return "nhsuk-button nhsuk-button--secondary"
        }
        else if (this.type === "reverse") {
          return "nhsuk-button nhsuk-button--reverse"
        }
        else {
          return "nhsuk-button"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'node_modules/nhsuk-frontend/packages/nhsuk';
</style>
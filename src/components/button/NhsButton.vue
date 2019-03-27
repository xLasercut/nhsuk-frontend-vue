<template>
  <button
    :class="buttonClass"
    type="submit"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'NhsButton',
    props: ["type", "disabled"],
    computed: {
      buttonClass() {
        switch (this.type) {
          case "secondary":
            return "nhsuk-button nhsuk-button--secondary"
          case "reverse":
            return "nhsuk-button nhsuk-button--reverse"
          default:
            return "nhsuk-button"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'node_modules/nhsuk-frontend/packages/core/all';
  @import 'node_modules/nhsuk-frontend/packages/components/button/button';
</style>
<template>
  <div :class="formgroupClass" v-bind="attributes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      attributes: {
        type: Object,
        required: true
      },
      error: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      formgroupClass() {
        if (this.error) {
          return "nhsuk-form-group nhsuk-form-group--error"
        }
        return "nhsuk-form-group"
      }
    }
  }
</script>

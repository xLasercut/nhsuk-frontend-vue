<template>
  <div :class="formgroupClass" v-bind="attributes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NhsFormGroup",
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
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

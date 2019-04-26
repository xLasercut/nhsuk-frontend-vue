<template>
  <form-item :error="error()">
    <slot name="fieldset"></slot>
    <slot name="hint"></slot>
    <slot name="error"></slot>
    <slot></slot>
  </form-item>
</template>

<script>
  import FormItem from '../shared/FormItem.vue'

  export default {
    name: 'NhsFormItemgroup',
    components: {
      FormItem
    },
    methods: {
      error() {
        if (this.$slots.error) {
          return true
        }
        return false
      }
    }
  }
</script>
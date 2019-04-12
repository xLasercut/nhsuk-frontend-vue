<template>
  <button :name="name" :disabled="disabled" :aria-disabled="disabled" @click="$emit('click')" v-bind="attributes">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      href: {
        type: String
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

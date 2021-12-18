<template>
  <button :disabled="disabled" :aria-disabled="disabled" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      href: {
        type: String
      }
    }
  }
</script>

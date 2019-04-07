<template>
  <button :name="name" :value="value" :disabled="disabled" :type="type" :aria-disabled="disabled" @click="$emit('click')" v-bind="attributes">
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
      value: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "submit",
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

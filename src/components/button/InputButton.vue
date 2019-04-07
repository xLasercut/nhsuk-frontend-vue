<template>
  <input :type="type" :name="name" :aria-disabled="disabled" :disabled="disabled" @click="$emit('click')" v-bind="attributes">
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: "submit",
        required: true
      },
      name: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      href: {
        type: String
      },
      value: {
        type: String
      }
    }
  }
</script>
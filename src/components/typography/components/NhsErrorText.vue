<template>
  <span class="nhsuk-error-message" :id="id" v-bind="attributes">
    <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'NhsErrorText',
    props: {
      hiddenText: {
        type: String,
        default: 'Error: '
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      id: {
        type: String,
        default: ''
      }
    }
  }
</script>

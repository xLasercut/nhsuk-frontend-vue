<template>
  <span class="nhsuk-error-message" :id="id" v-bind="$attrs">
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
      id: {
        type: String
      }
    }
  }
</script>

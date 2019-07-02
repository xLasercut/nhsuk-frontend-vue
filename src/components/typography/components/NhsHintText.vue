<template>
  <span class="nhsuk-hint" v-bind="$attrs" :id="id">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'NhsHintText',
    props: {
      id: {
        type: String,
        default: ''
      }
    }
  }
</script>
<template>
  <div class="nhsuk-expander-group" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NhsExpanderGroup'
  }
</script>
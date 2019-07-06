<template>
  <a class="nhsuk-skip-link" href="#maincontent" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'NhsSkipLink'
  }
</script>
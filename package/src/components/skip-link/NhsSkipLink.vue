<template>
  <a class="nhsuk-skip-link" href="#maincontent" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
  import nhsukSkiplink from '../../../node_modules/nhsuk-frontend/packages/components/skip-link/skip-link'

  export default {
    name: 'NhsSkipLink',
    mounted() {
      nhsukSkiplink()
    }
  }
</script>
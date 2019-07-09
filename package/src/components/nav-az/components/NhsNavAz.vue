<template>
  <nav class="nhsuk-nav-a-z" id="nhsuk-nav-a-z" role="navigation" :aria-label="ariaLabel" v-bind="$attrs">
    <ol class="nhsuk-nav-a-z__list" role="list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: 'NhsNavAz',
    props: {
      ariaLabel: {
        type: String,
        default: 'A to Z Navigation'
      }
    }
  }
</script>
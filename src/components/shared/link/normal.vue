<template>
  <a :href="to">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    }
  }
</script>
<template>
  <router-link :to="to">
    <slot></slot>
  </router-link>
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

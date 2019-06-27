<template>
  <router-link :to="href" @click.native="$emit('click')">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        required: true
      }
    }
  }
</script>
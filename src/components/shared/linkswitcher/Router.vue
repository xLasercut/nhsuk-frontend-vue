<template>
  <router-link :to="href" v-bind="attributes" @click.native="$emit('click')">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      attributes: {
        type: Object,
        required: true
      },
      href: {
        type: String,
        required: true
      }
    }
  }
</script>
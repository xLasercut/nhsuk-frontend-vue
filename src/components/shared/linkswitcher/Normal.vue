<template>
  <a :href="href" v-bind="attributes" @click.native="$emit('click')">
    <slot></slot>
  </a>
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